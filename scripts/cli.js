#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const command = process.argv[2];

const scriptMap = {
  init: 'integrate.js',
  remove: 'remove.js',
  uninstall: 'remove.js',
};

if (!command || command === 'init') {
  // Default to init
  const scriptPath = path.join(__dirname, 'integrate.js');
  const child = spawn('node', [scriptPath], { stdio: 'inherit' });
  child.on('exit', (code) => process.exit(code));
} else if (scriptMap[command]) {
  const scriptPath = path.join(__dirname, scriptMap[command]);
  const child = spawn('node', [scriptPath], { stdio: 'inherit' });
  child.on('exit', (code) => process.exit(code));
} else {
  console.log('\n╔════════════════════════════════════════════════════╗');
  console.log('║              design-comments - CLI                ║');
  console.log('╚════════════════════════════════════════════════════╝\n');
  console.log('Usage:');
  console.log('  npx design-comments init       Install and integrate the commenting system');
  console.log('  npx design-comments remove     Remove the commenting system');
  console.log('  npx design-comments uninstall  Remove the commenting system (alias)\n');
  process.exit(1);
}
