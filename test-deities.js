// This is a quick test to see what's being exported
const fs = require('fs');
const path = require('path');

// Read the index.ts file to understand structure
const indexContent = fs.readFileSync(path.join(__dirname, 'src/content/deities/index.ts'), 'utf-8');
console.log("=== INDEX.TS CONTENT ===");
console.log(indexContent.split('\n').slice(0, 60).join('\n'));

// Check the meta.ts file structure
const metaContent = fs.readFileSync(path.join(__dirname, 'src/content/deities/meta.ts'), 'utf-8');
console.log("\n=== META.TS FIRST 100 LINES ===");
console.log(metaContent.split('\n').slice(0, 100).join('\n'));
