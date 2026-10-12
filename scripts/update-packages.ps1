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
Write-Host "`n[1/4] Generowanie $offlineZipPath ..." -ForegroundColor Yellow

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
# 2. AKTUALIZACJA: koronka.ipa (Apple iOS)
# ========================================================
$ipaPath = Join-Path $assetsDir "koronka.ipa"
Write-Host "`n[2/4] Aktualizacja pakietu Apple iOS: $ipaPath ..." -ForegroundColor Yellow

if (Test-Path $ipaPath) {
    $ipaStream = [System.IO.File]::Open($ipaPath, [System.IO.FileMode]::Open, [System.IO.FileAccess]::ReadWrite)
    $ipaArchive = New-Object System.IO.Compression.ZipArchive($ipaStream, [System.IO.Compression.ZipArchiveMode]::Update)

    Set-ZipEntry -Zip $ipaArchive -EntryName "Payload\Koronka.app\index.html" -SourceFilePath $indexPath
    Set-ZipEntry -Zip $ipaArchive -EntryName "Payload\Koronka.app\style.css" -SourceFilePath $stylePath
    Set-ZipEntry -Zip $ipaArchive -EntryName "Payload\Koronka.app\app.js" -SourceFilePath $appPath
    Set-ZipEntry -Zip $ipaArchive -EntryName "Payload\Koronka.app\sw.js" -SourceFilePath $swPath
    Set-ZipEntry -Zip $ipaArchive -EntryName "Payload\Koronka.app\manifest.json" -SourceFilePath $manifestPath
    Set-ZipEntry -Zip $ipaArchive -EntryName "Payload\Koronka.app\assets\jezus-milosierny-wilno.jpg" -SourceFilePath $jezusImg
    Set-ZipEntry -Zip $ipaArchive -EntryName "Payload\Koronka.app\assets\matka-boza.jpg" -SourceFilePath $maryImg
    Set-ZipEntry -Zip $ipaArchive -EntryName "Payload\Koronka.app\assets\icon-192.png" -SourceFilePath $icon192
    Set-ZipEntry -Zip $ipaArchive -EntryName "Payload\Koronka.app\assets\icon-512.png" -SourceFilePath $icon512

    $ipaArchive.Dispose()
    $ipaStream.Dispose()

    $ipaSize = (Get-Item $ipaPath).Length / 1KB
    Write-Host " -> Zaktualizowano koronka.ipa (Rozmiar: $([math]::Round($ipaSize, 1)) KB)" -ForegroundColor Green
} else {
    Write-Host " -> Plik $ipaPath nie istnieje!" -ForegroundColor Red
}

# ========================================================
# 3. AKTUALIZACJA: koronka.apk (Android)
# ========================================================
$apkPath = Join-Path $assetsDir "koronka.apk"
Write-Host "`n[3/4] Aktualizacja pakietu Android: $apkPath ..." -ForegroundColor Yellow

if (Test-Path $apkPath) {
    $manifestContent = [System.IO.File]::ReadAllText($manifestPath, [System.Text.Encoding]::UTF8)
    
    $apkStream = [System.IO.File]::Open($apkPath, [System.IO.FileMode]::Open, [System.IO.FileAccess]::ReadWrite)
    $apkArchive = New-Object System.IO.Compression.ZipArchive($apkStream, [System.IO.Compression.ZipArchiveMode]::Update)

    # Aktualizacja skompilowanego zasobu manifestu TWA
    Set-ZipEntry -Zip $apkArchive -EntryName "res/Wo.json" -StringContent $manifestContent

    # Wbudowanie pełnego kodu aplikacji Web/PWA do assets/www w APK
    Set-ZipEntry -Zip $apkArchive -EntryName "assets/www/index.html" -SourceFilePath $indexPath
    Set-ZipEntry -Zip $apkArchive -EntryName "assets/www/style.css" -SourceFilePath $stylePath
    Set-ZipEntry -Zip $apkArchive -EntryName "assets/www/app.js" -SourceFilePath $appPath
    Set-ZipEntry -Zip $apkArchive -EntryName "assets/www/sw.js" -SourceFilePath $swPath
    Set-ZipEntry -Zip $apkArchive -EntryName "assets/www/manifest.json" -SourceFilePath $manifestPath
    Set-ZipEntry -Zip $apkArchive -EntryName "assets/www/assets/jezus-milosierny-wilno.jpg" -SourceFilePath $jezusImg
    Set-ZipEntry -Zip $apkArchive -EntryName "assets/www/assets/matka-boza.jpg" -SourceFilePath $maryImg
    Set-ZipEntry -Zip $apkArchive -EntryName "assets/www/assets/icon-192.png" -SourceFilePath $icon192
    Set-ZipEntry -Zip $apkArchive -EntryName "assets/www/assets/icon-512.png" -SourceFilePath $icon512

    $apkArchive.Dispose()
    $apkStream.Dispose()

    $apkSize = (Get-Item $apkPath).Length / 1MB
    Write-Host " -> Zaktualizowano koronka.apk (Rozmiar: $([math]::Round($apkSize, 2)) MB)" -ForegroundColor Green
} else {
    Write-Host " -> Plik $apkPath nie istnieje!" -ForegroundColor Red
}

# ========================================================
# 4. AKTUALIZACJA: koronka.aab (Google Play Bundle)
# ========================================================
$aabPath = Join-Path $assetsDir "koronka.aab"
Write-Host "`n[4/4] Aktualizacja pakietu Google Play Store: $aabPath ..." -ForegroundColor Yellow

if (Test-Path $aabPath) {
    $manifestContent = [System.IO.File]::ReadAllText($manifestPath, [System.Text.Encoding]::UTF8)

    $aabStream = [System.IO.File]::Open($aabPath, [System.IO.FileMode]::Open, [System.IO.FileAccess]::ReadWrite)
    $aabArchive = New-Object System.IO.Compression.ZipArchive($aabStream, [System.IO.Compression.ZipArchiveMode]::Update)

    # Aktualizacja raw manifestu w AAB
    Set-ZipEntry -Zip $aabArchive -EntryName "base/res/raw/web_app_manifest.json" -StringContent $manifestContent

    # Wbudowanie zasobów do base/assets/www w AAB
    Set-ZipEntry -Zip $aabArchive -EntryName "base/assets/www/index.html" -SourceFilePath $indexPath
    Set-ZipEntry -Zip $aabArchive -EntryName "base/assets/www/style.css" -SourceFilePath $stylePath
    Set-ZipEntry -Zip $aabArchive -EntryName "base/assets/www/app.js" -SourceFilePath $appPath
    Set-ZipEntry -Zip $aabArchive -EntryName "base/assets/www/sw.js" -SourceFilePath $swPath
    Set-ZipEntry -Zip $aabArchive -EntryName "base/assets/www/manifest.json" -SourceFilePath $manifestPath
    Set-ZipEntry -Zip $aabArchive -EntryName "base/assets/www/assets/jezus-milosierny-wilno.jpg" -SourceFilePath $jezusImg
    Set-ZipEntry -Zip $aabArchive -EntryName "base/assets/www/assets/matka-boza.jpg" -SourceFilePath $maryImg
    Set-ZipEntry -Zip $aabArchive -EntryName "base/assets/www/assets/icon-192.png" -SourceFilePath $icon192
    Set-ZipEntry -Zip $aabArchive -EntryName "base/assets/www/assets/icon-512.png" -SourceFilePath $icon512

    $aabArchive.Dispose()
    $aabStream.Dispose()

    $aabSize = (Get-Item $aabPath).Length / 1MB
    Write-Host " -> Zaktualizowano koronka.aab (Rozmiar: $([math]::Round($aabSize, 2)) MB)" -ForegroundColor Green
} else {
    Write-Host " -> Plik $aabPath nie istnieje!" -ForegroundColor Red
}

Write-Host "`nSukces! Wszystkie pliki instalacyjne (APK, AAB, IPA, PWA, ZIP) zostały zaktualizowane do wersji 2.0 (v24)." -ForegroundColor Cyan
