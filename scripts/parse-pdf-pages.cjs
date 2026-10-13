const fs = require('fs');

const buf = fs.readFileSync('MOLOLO CHARTE & CO.pdf');
const content = buf.toString('latin1');

// Find all object types and dictionaries
const pageMatches = [...content.matchAll(/\/Type\s*\/Page[^s]/g)];
console.log('Page matches:', pageMatches.length);

// Find all fonts mentioned
const fontMatches = [...new Set([...content.matchAll(/\/BaseFont\s*\/([^\s/>]+)/g)].map(m => m[1]))];
console.log('Fonts:', fontMatches);

// Find text streams
const streamMatches = [...content.matchAll(/stream\r?\n([\s\S]*?)\r?\nendstream/g)];
console.log('Total streams:', streamMatches.length);

// Find any URLs or links
const urls = [...new Set([...content.matchAll(/https?:\/\/[^\s)<>]+/g)].map(m => m[0]))];
console.log('URLs in PDF:', urls);
