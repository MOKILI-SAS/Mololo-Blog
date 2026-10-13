const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('MOLOLO CHARTE & CO.pdf');
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
    let uncompressed = zlib.inflateSync(streamData).toString('latin1');
    streams.push({ idx: streams.length, text: uncompressed });
  } catch(e){}
  pos = eIdx + 9;
}

[20, 21, 3, 4, 6, 7, 9, 11, 13, 15].forEach(i => {
  if (streams[i]) {
    console.log(`=== STREAM ${i} ===`);
    console.log(streams[i].text.slice(0, 1000));
  }
});
