// Test importing the deities at runtime
try {
  const path = require('path');
  const deities = require('./src/content/deities/index.ts');
  console.log("Import failed - using compile approach");
} catch (e) {
  console.log("Expected - cannot load TS directly");
}

// Try compiling and loading
const fs = require('fs');
console.log("Checking if built artifacts exist...");
console.log(fs.existsSync('./.next/server/app/pantheon/[slug]/page.js'));
