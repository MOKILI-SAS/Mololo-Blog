const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('MOLOLO CHARTE & CO.pdf');
const content = buf.toString('latin1');

// Find page objects
const pageObjRegex = /(\d+)\s+0\s+obj\s*<<\s*\/Type\s*\/Page\b([\s\S]*?)>>\s*endobj/g;
let m;
let pages = [];
while ((m = pageObjRegex.exec(content)) !== null) {
  pages.push({ id: m[1], dict: m[2] });
}
console.log('Pages found:', pages.length);

// Also look at XMP Metadata
const xmpMatch = content.match(/<x:xmpmeta[\s\S]*?<\/x:xmpmeta>/);
if (xmpMatch) {
  console.log('--- XMP METADATA ---');
  // Print titles, text, descriptions
  const xmp = xmpMatch[0];
  const lines = xmp.split('\n').filter(l => l.includes('stFnt:') || l.includes('dc:') || l.includes('pdf:') || l.includes('xmp:'));
  console.log(lines.slice(0, 50).join('\n'));
}

// Function to get object by id
function getObject(id) {
  const reg = new RegExp(`\\b${id}\\s+0\\s+obj\\b([\\s\\S]*?)endobj`);
  const match = content.match(reg);
  if (!match) return null;
  return match[1];
}

// Inspect each page's /Contents
for (let i = 0; i < pages.length; i++) {
  const p = pages[i];
  console.log(`\n=== PAGE ${i + 1} (Obj ${p.id}) ===`);
  const contentsMatch = p.dict.match(/\/Contents\s+(\d+)\s+0\s+R/) || p.dict.match(/\/Contents\s*\[(.*?)\]/);
  if (contentsMatch) {
    let contentIds = [];
    if (contentsMatch[1].includes(' ')) {
      contentIds = contentsMatch[1].match(/\d+/g).filter((_, idx) => idx % 2 === 0);
    } else {
      contentIds = [contentsMatch[1]];
    }
    for (let cId of contentIds) {
      const objStr = getObject(cId);
      if (objStr) {
        // extract stream
        const sMatch = objStr.match(/stream\r?\n([\s\S]*?)\r?\nendstream/);
        if (sMatch) {
          try {
            const raw = Buffer.from(sMatch[1], 'latin1');
            const uncompressed = zlib.inflateSync(raw).toString('latin1');
            // search for text
            const textMatches = [...uncompressed.matchAll(/\(([^)]+)\)\s*Tj/g)].map(tm => tm[1]);
            const textMatches2 = [...uncompressed.matchAll(/\[(.*?)\]\s*TJ/g)].map(tm => tm[1]);
            console.log(`Contents ${cId} text:`, [...textMatches, ...textMatches2].join(' '));
          } catch (e) {
            console.log(`Contents ${cId} inflate error:`, e.message);
          }
        }
      }
    }
  }
}
