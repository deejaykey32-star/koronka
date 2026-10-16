<#
================================================================================
 Skrypt aktualizacji pakietów instalacyjnych: APK, AAB, IPA, PWA i ZIP Offline
 Koronka do Miłosierdzia Bożego 2.0
================================================================================
#>

param(
    [string]$RootDir = ""
)

if ([string]::IsNullOrWhiteSpace($RootDir)) {
    if ($PSScriptRoot) {
        $RootDir = Split-Path -Parent $PSScriptRoot
    } else {
        $RootDir = (Get-Location).Path
    }
}
$RootDir = (Resolve-Path $RootDir).Path
Write-Host "Katalog główny projektu: $RootDir" -ForegroundColor Cyan

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$assetsDir = Join-Path $RootDir "assets"
$indexPath = Join-Path $RootDir "index.html"
$stylePath = Join-Path $RootDir "style.css"
$appPath   = Join-Path $RootDir "app.js"
$swPath    = Join-Path $RootDir "sw.js"
$manifestPath = Join-Path $RootDir "manifest.json"

$jezusImg = Join-Path $assetsDir "jezus-milosierny-wilno.jpg"
$maryImg  = Join-Path $assetsDir "matka-boza.jpg"
$icon192  = Join-Path $assetsDir "icon-192.png"
$icon512  = Join-Path $assetsDir "icon-512.png"

# Funkcja pomocnicza: bezpieczna aktualizacja wpisu w ZipArchive
function Set-ZipEntry {
    param(
        [System.IO.Compression.ZipArchive]$Zip,
        [string]$EntryName,
        [string]$SourceFilePath,
        [string]$StringContent = $null
    )

    # Usuń istniejący wpis jeśli istnieje
    $existing = @($Zip.Entries | Where-Object { 
        $_.FullName -eq $EntryName -or 
        $_.FullName -eq $EntryName.Replace('\', '/') -or 
        $_.FullName -eq $EntryName.Replace('/', '\') 
    })
    foreach ($e in $existing) {
        $e.Delete()
    }

    $newEntry = $Zip.CreateEntry($EntryName, [System.IO.Compression.CompressionLevel]::Optimal)
    $stream = $newEntry.Open()

    if (![string]::IsNullOrEmpty($StringContent)) {
        $bytes = [System.Text.Encoding]::UTF8.GetBytes($StringContent)
        $stream.Write($bytes, 0, $bytes.Length)
    } elseif ($SourceFilePath) {
        if (Test-Path $SourceFilePath) {
            $bytes = [System.IO.File]::ReadAllBytes($SourceFilePath)
            $stream.Write($bytes, 0, $bytes.Length)
        } else {
            Write-Warning "Plik nie istnieje: $SourceFilePath"
        }
    }
    $stream.Flush()
    $stream.Close()
    $stream.Dispose()
}

# ========================================================
# 1. AKTUALIZACJA: koronka-offline.zip
# ========================================================
$offlineZipPath = Join-Path $assetsDir "koronka-offline.zip"
Write-Host "`n[1/3] Generowanie $offlineZipPath ..." -ForegroundColor Yellow

if (Test-Path $offlineZipPath) {
    Remove-Item -Force $offlineZipPath
}

$zipArchive = [System.IO.Compression.ZipFile]::Open($offlineZipPath, [System.IO.Compression.ZipArchiveMode]::Create)

Set-ZipEntry -Zip $zipArchive -EntryName "index.html" -SourceFilePath $indexPath
Set-ZipEntry -Zip $zipArchive -EntryName "style.css" -SourceFilePath $stylePath
Set-ZipEntry -Zip $zipArchive -EntryName "app.js" -SourceFilePath $appPath
Set-ZipEntry -Zip $zipArchive -EntryName "sw.js" -SourceFilePath $swPath
Set-ZipEntry -Zip $zipArchive -EntryName "manifest.json" -SourceFilePath $manifestPath
Set-ZipEntry -Zip $zipArchive -EntryName "assets/icon-192.png" -SourceFilePath $icon192
Set-ZipEntry -Zip $zipArchive -EntryName "assets/icon-512.png" -SourceFilePath $icon512
Set-ZipEntry -Zip $zipArchive -EntryName "assets/jezus-milosierny-wilno.jpg" -SourceFilePath $jezusImg
Set-ZipEntry -Zip $zipArchive -EntryName "assets/matka-boza.jpg" -SourceFilePath $maryImg

# Kopie w katalogu głównym dla bezpośredniego otwierania offline
Set-ZipEntry -Zip $zipArchive -EntryName "icon-192.png" -SourceFilePath $icon192
Set-ZipEntry -Zip $zipArchive -EntryName "icon-512.png" -SourceFilePath $icon512
Set-ZipEntry -Zip $zipArchive -EntryName "jezus-milosierny-wilno.jpg" -SourceFilePath $jezusImg
Set-ZipEntry -Zip $zipArchive -EntryName "matka-boza.jpg" -SourceFilePath $maryImg

$zipArchive.Dispose()

$zipSize = (Get-Item $offlineZipPath).Length / 1KB
Write-Host " -> Utworzono koronka-offline.zip (Rozmiar: $([math]::Round($zipSize, 1)) KB)" -ForegroundColor Green

# ========================================================
# 2. NATYWNA APLIKACJA ANDROID: koronka.apk + koronka.aab (Capacitor)
# ========================================================
# Pliki aplikacji są wbudowane w pakiet (działa bez internetu).
# Podpis: native/android-keys/keystore.properties + koronka-release.jks (poza gitem!).
$nativeDir = Join-Path $RootDir "native"
$androidDir = Join-Path $nativeDir "android"
$keyProps = Join-Path $nativeDir "android-keys\keystore.properties"
$apkPath = Join-Path $assetsDir "koronka.apk"
$aabPath = Join-Path $assetsDir "koronka.aab"
Write-Host "`n[2/3] Budowa natywnej aplikacji Android (APK + AAB) ..." -ForegroundColor Yellow
if (-not (Test-Path $keyProps)) {
    Write-Host " -> Brak klucza wydania ($keyProps) - pomijam budowę Android." -ForegroundColor Red
} else {
    if (-not $env:JAVA_HOME) { $env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr" }
    Push-Location $nativeDir
    npm run sync
    Pop-Location
    Push-Location $androidDir
    & .\gradlew.bat assembleRelease bundleRelease -q
    $gradleOk = $LASTEXITCODE -eq 0
    Pop-Location
    if ($gradleOk) {
        Copy-Item -Force (Join-Path $androidDir "app\build\outputs\apk\release\app-release.apk") $apkPath
        Copy-Item -Force (Join-Path $androidDir "app\build\outputs\bundle\release\app-release.aab") $aabPath
        Write-Host " -> koronka.apk ($([math]::Round((Get-Item $apkPath).Length / 1MB, 1)) MB) i koronka.aab ($([math]::Round((Get-Item $aabPath).Length / 1MB, 1)) MB) zbudowane i podpisane" -ForegroundColor Green
    } else {
        Write-Host " -> Błąd budowy Gradle - pakiety Android NIE zostały zaktualizowane!" -ForegroundColor Red
    }
}

# ========================================================
# 3. NATYWNA APLIKACJA iOS: koronka.ipa
# ========================================================
# Budowana na macOS przez GitHub Actions (.github/workflows/ios-ipa.yml) po wypchnięciu zmian;
# gotowy plik trafia do assets/koronka.ipa (git pull, aby go pobrać).
Write-Host "`n[3/3] iOS: koronka.ipa budowany automatycznie przez GitHub Actions po 'git push'." -ForegroundColor Yellow

Write-Host "`nGotowe: ZIP/PWA zaktualizowane, Android zbudowany lokalnie, iOS budowany w chmurze." -ForegroundColor Cyan
