const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('MOLOLO CHARTE & CO.pdf');

let pos = 0;
let streamIndex = 0;
while (true) {
  let sIdx = buf.indexOf(Buffer.from('stream'), pos);
  if (sIdx === -1) break;
  let eIdx = buf.indexOf(Buffer.from('endstream'), sIdx);
  if (eIdx === -1) break;

  let start = sIdx + 6;
  if (buf[start] === 0x0d && buf[start + 1] === 0x0a) start += 2;
  else if (buf[start] === 0x0a || buf[start] === 0x0d) start += 1;

  let streamData = buf.subarray(start, eIdx);
  try {
    let uncompressed = zlib.inflateSync(streamData).toString('latin1');
    console.log(`\n================ STREAM ${streamIndex} (Length: ${uncompressed.length}) ================`);
    // print first 500 chars and any text
    const textMatches = [...uncompressed.matchAll(/\(([^)]+)\)/g)].map(m => m[1]);
    console.log('Text matches:', textMatches.join(' | '));
    // Check if it defines fonts, matrices, colors
    const colors = [...new Set([...uncompressed.matchAll(/([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\s+rg/g)].map(m => `${m[1]} ${m[2]} ${m[3]}`))];
    if (colors.length > 0) console.log('Colors (rg):', colors);
  } catch (e) {}
  pos = eIdx + 9;
  streamIndex++;
}
