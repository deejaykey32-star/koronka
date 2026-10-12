/**
 * Skrypt aktualizacji pakietów instalacyjnych APK, AAB, IPA, ZIP i PWA
 * Wywołanie: node update-packages.js
 */

const { execSync } = require('child_process');
const path = require('path');

const scriptPath = path.join(__dirname, 'scripts', 'update-packages.ps1');
console.log('Uruchamianie aktualizacji pakietów instalacyjnych...');

try {
  const output = execSync(`powershell -ExecutionPolicy Bypass -File "${scriptPath}"`, {
    stdio: 'inherit',
    encoding: 'utf-8'
  });
} catch (error) {
  console.error('Błąd podczas aktualizacji pakietów:', error.message);
  process.exit(1);
}
