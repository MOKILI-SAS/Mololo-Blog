const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('MOLOLO CHARTE & CO.pdf');

// Let's find all streams in the PDF
let pos = 0;
let streams = [];
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
    let uncompressed = zlib.inflateSync(streamData);
    streams.push(uncompressed);
  } catch (e) {
    try {
      let uncompressed = zlib.inflateRawSync(streamData);
      streams.push(uncompressed);
    } catch (e2) {}
  }
  pos = eIdx + 9;
}

console.log('Decompressed streams:', streams.length);

// Search for text in all uncompressed streams
for (let i = 0; i < streams.length; i++) {
  const str = streams[i].toString('latin1');
  // Find strings like (text) Tj or [(t)(e)(x)(t)] TJ
  const tjMatches = [...str.matchAll(/\(([^)]+)\)\s*Tj/g)].map(m => m[1]);
  const tjArrayMatches = [...str.matchAll(/\[(.*?)\]\s*TJ/g)].map(m => {
    return [...m[1].matchAll(/\(([^)]+)\)/g)].map(x => x[1]).join('');
  });
  const all = [...tjMatches, ...tjArrayMatches];
  if (all.length > 0) {
    console.log(`\n=== STREAM ${i} ===`);
    console.log(all.join(' '));
  }
}
