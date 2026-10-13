const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('MOLOLO CHARTE & CO.pdf');
let pos = 0;
let streams = [];
while (true) {
  let sIdx = buf.indexOf('stream', pos);
  if (sIdx === -1) break;
  let eIdx = buf.indexOf('endstream', sIdx);
  if (eIdx === -1) break;
  let start = sIdx + 6;
  if (buf[start] === 13 && buf[start + 1] === 10) start += 2;
  else if (buf[start] === 10 || buf[start] === 13) start += 1;
  let streamBuf = buf.slice(start, eIdx);
  try {
    let uncompressed = zlib.inflateSync(streamBuf).toString('latin1');
    streams.push(uncompressed);
  } catch (e) {
    try {
      let uncompressed = zlib.inflateRawSync(streamBuf).toString('latin1');
      streams.push(uncompressed);
    } catch (e2) {}
  }
  pos = eIdx + 9;
}

console.log('Successfully decompressed streams:', streams.length);
for (let i = 0; i < streams.length; i++) {
  let s = streams[i];
  let matches = [...s.matchAll(/\(([^)]+)\)/g)].map((m) => m[1]);
  if (matches.length > 0) {
    console.log('--- STREAM ' + i + ' ---');
    console.log(matches.join(' '));
  }
}
