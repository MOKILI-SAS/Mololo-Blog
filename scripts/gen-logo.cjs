const fs = require('fs');
const sharp = require('sharp');

const ox = 193.235;
const b1_x = 193.235 - ox; // 0
const b2_x = 240.995 - ox; // 47.76
const b3_x = 288.754 - ox; // 95.519
const bar_w = 22.936;
const bar_h = 113.752;
const b2_h = 91.907;

const o1_cx = 393.3906 - ox; // 200.1556
const l1_x = 475.09 - ox; // 281.855
const o2_cx = 579.7266 - ox; // 386.4916
const l2_x = 661.427 - ox; // 468.192
const o3_cx = 766.0625 - ox; // 572.8275

const cy = 56.876;
const r_outer = 56.585;
const r_inner = 35.031;

const svgTemplate = (color = 'currentColor') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 114" fill="${color}">
  <!-- M (3 vertical bars, middle bar shorter at bottom) -->
  <rect x="${b1_x.toFixed(2)}" y="0" width="${bar_w.toFixed(2)}" height="${bar_h.toFixed(2)}" />
  <rect x="${b2_x.toFixed(2)}" y="0" width="${bar_w.toFixed(2)}" height="${b2_h.toFixed(2)}" />
  <rect x="${b3_x.toFixed(2)}" y="0" width="${bar_w.toFixed(2)}" height="${bar_h.toFixed(2)}" />
  <!-- O1 -->
  <path fill-rule="evenodd" d="M ${o1_cx.toFixed(2)} ${(cy - r_outer).toFixed(2)} A ${r_outer.toFixed(2)} ${r_outer.toFixed(2)} 0 1 0 ${o1_cx.toFixed(2)} ${(cy + r_outer).toFixed(2)} A ${r_outer.toFixed(2)} ${r_outer.toFixed(2)} 0 1 0 ${o1_cx.toFixed(2)} ${(cy - r_outer).toFixed(2)} Z M ${o1_cx.toFixed(2)} ${(cy - r_inner).toFixed(2)} A ${r_inner.toFixed(2)} ${r_inner.toFixed(2)} 0 1 1 ${o1_cx.toFixed(2)} ${(cy + r_inner).toFixed(2)} A ${r_inner.toFixed(2)} ${r_inner.toFixed(2)} 0 1 1 ${o1_cx.toFixed(2)} ${(cy - r_inner).toFixed(2)} Z" />
  <!-- L1 -->
  <rect x="${l1_x.toFixed(2)}" y="0" width="${bar_w.toFixed(2)}" height="${bar_h.toFixed(2)}" />
  <!-- O2 -->
  <path fill-rule="evenodd" d="M ${o2_cx.toFixed(2)} ${(cy - r_outer).toFixed(2)} A ${r_outer.toFixed(2)} ${r_outer.toFixed(2)} 0 1 0 ${o2_cx.toFixed(2)} ${(cy + r_outer).toFixed(2)} A ${r_outer.toFixed(2)} ${r_outer.toFixed(2)} 0 1 0 ${o2_cx.toFixed(2)} ${(cy - r_outer).toFixed(2)} Z M ${o2_cx.toFixed(2)} ${(cy - r_inner).toFixed(2)} A ${r_inner.toFixed(2)} ${r_inner.toFixed(2)} 0 1 1 ${o2_cx.toFixed(2)} ${(cy + r_inner).toFixed(2)} A ${r_inner.toFixed(2)} ${r_inner.toFixed(2)} 0 1 1 ${o2_cx.toFixed(2)} ${(cy - r_inner).toFixed(2)} Z" />
  <!-- L2 -->
  <rect x="${l2_x.toFixed(2)}" y="0" width="${bar_w.toFixed(2)}" height="${bar_h.toFixed(2)}" />
  <!-- O3 -->
  <path fill-rule="evenodd" d="M ${o3_cx.toFixed(2)} ${(cy - r_outer).toFixed(2)} A ${r_outer.toFixed(2)} ${r_outer.toFixed(2)} 0 1 0 ${o3_cx.toFixed(2)} ${(cy + r_outer).toFixed(2)} A ${r_outer.toFixed(2)} ${r_outer.toFixed(2)} 0 1 0 ${o3_cx.toFixed(2)} ${(cy - r_outer).toFixed(2)} Z M ${o3_cx.toFixed(2)} ${(cy - r_inner).toFixed(2)} A ${r_inner.toFixed(2)} ${r_inner.toFixed(2)} 0 1 1 ${o3_cx.toFixed(2)} ${(cy + r_inner).toFixed(2)} A ${r_inner.toFixed(2)} ${r_inner.toFixed(2)} 0 1 1 ${o3_cx.toFixed(2)} ${(cy - r_inner).toFixed(2)} Z" />
</svg>`;

if (!fs.existsSync('public/images')) fs.mkdirSync('public/images', { recursive: true });

fs.writeFileSync('public/images/logo.svg', svgTemplate('currentColor'));
console.log('Saved public/images/logo.svg');

async function run() {
  await sharp(Buffer.from(svgTemplate('#ffffff')), { density: 300 })
    .resize(1260, 228)
    .png()
    .toFile('public/images/logo-white.png');
  console.log('Saved logo-white.png');

  await sharp(Buffer.from(svgTemplate('#000000')), { density: 300 })
    .resize(1260, 228)
    .png()
    .toFile('public/images/logo-dark.png');
  console.log('Saved logo-dark.png');

  await sharp(Buffer.from(svgTemplate('#e01a31')), { density: 300 })
    .resize(1260, 228)
    .png()
    .toFile('public/images/logo-red.png');
  console.log('Saved logo-red.png');

  // Overwrite public/images/logo.png with the crisp dark version or white
  fs.copyFileSync('public/images/logo-white.png', 'public/images/logo.png');
  console.log('Copied logo-white.png to logo.png');
}

run().catch(console.error);
