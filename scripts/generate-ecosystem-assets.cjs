const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '../public/images/ecosystem');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Vector geometry of base MOLOLO logo
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

const mololoBaseSvg = (color = '#ffffff') => `
  <!-- M (3 vertical bars, middle bar shorter at bottom) -->
  <rect x="${b1_x.toFixed(2)}" y="0" width="${bar_w.toFixed(2)}" height="${bar_h.toFixed(2)}" fill="${color}" />
  <rect x="${b2_x.toFixed(2)}" y="0" width="${bar_w.toFixed(2)}" height="${b2_h.toFixed(2)}" fill="${color}" />
  <rect x="${b3_x.toFixed(2)}" y="0" width="${bar_w.toFixed(2)}" height="${bar_h.toFixed(2)}" fill="${color}" />
  <!-- O1 -->
  <path fill="${color}" fill-rule="evenodd" d="M ${o1_cx.toFixed(2)} ${(cy - r_outer).toFixed(2)} A ${r_outer.toFixed(2)} ${r_outer.toFixed(2)} 0 1 0 ${o1_cx.toFixed(2)} ${(cy + r_outer).toFixed(2)} A ${r_outer.toFixed(2)} ${r_outer.toFixed(2)} 0 1 0 ${o1_cx.toFixed(2)} ${(cy - r_outer).toFixed(2)} Z M ${o1_cx.toFixed(2)} ${(cy - r_inner).toFixed(2)} A ${r_inner.toFixed(2)} ${r_inner.toFixed(2)} 0 1 1 ${o1_cx.toFixed(2)} ${(cy + r_inner).toFixed(2)} A ${r_inner.toFixed(2)} ${r_inner.toFixed(2)} 0 1 1 ${o1_cx.toFixed(2)} ${(cy - r_inner).toFixed(2)} Z" />
  <!-- L1 -->
  <rect x="${l1_x.toFixed(2)}" y="0" width="${bar_w.toFixed(2)}" height="${bar_h.toFixed(2)}" fill="${color}" />
  <!-- O2 -->
  <path fill="${color}" fill-rule="evenodd" d="M ${o2_cx.toFixed(2)} ${(cy - r_outer).toFixed(2)} A ${r_outer.toFixed(2)} ${r_outer.toFixed(2)} 0 1 0 ${o2_cx.toFixed(2)} ${(cy + r_outer).toFixed(2)} A ${r_outer.toFixed(2)} ${r_outer.toFixed(2)} 0 1 0 ${o2_cx.toFixed(2)} ${(cy - r_outer).toFixed(2)} Z M ${o2_cx.toFixed(2)} ${(cy - r_inner).toFixed(2)} A ${r_inner.toFixed(2)} ${r_inner.toFixed(2)} 0 1 1 ${o2_cx.toFixed(2)} ${(cy + r_inner).toFixed(2)} A ${r_inner.toFixed(2)} ${r_inner.toFixed(2)} 0 1 1 ${o2_cx.toFixed(2)} ${(cy - r_inner).toFixed(2)} Z" />
  <!-- L2 -->
  <rect x="${l2_x.toFixed(2)}" y="0" width="${bar_w.toFixed(2)}" height="${bar_h.toFixed(2)}" fill="${color}" />
  <!-- O3 -->
  <path fill="${color}" fill-rule="evenodd" d="M ${o3_cx.toFixed(2)} ${(cy - r_outer).toFixed(2)} A ${r_outer.toFixed(2)} ${r_outer.toFixed(2)} 0 1 0 ${o3_cx.toFixed(2)} ${(cy + r_outer).toFixed(2)} A ${r_outer.toFixed(2)} ${r_outer.toFixed(2)} 0 1 0 ${o3_cx.toFixed(2)} ${(cy - r_outer).toFixed(2)} Z M ${o3_cx.toFixed(2)} ${(cy - r_inner).toFixed(2)} A ${r_inner.toFixed(2)} ${r_inner.toFixed(2)} 0 1 1 ${o3_cx.toFixed(2)} ${(cy + r_inner).toFixed(2)} A ${r_inner.toFixed(2)} ${r_inner.toFixed(2)} 0 1 1 ${o3_cx.toFixed(2)} ${(cy - r_inner).toFixed(2)} Z" />
`;

// Vector geometry of Monogram M (3 bars centered)
const mololoMonogramSvg = (color = '#ffffff') => `
  <rect x="20" y="10" width="28" height="140" fill="${color}" />
  <rect x="76" y="10" width="28" height="112" fill="${color}" />
  <rect x="132" y="10" width="28" height="140" fill="${color}" />
`;

const branches = [
  { id: 'mololo-studio', label: 'STUDIO', color: '#e01a31', badgeBg: '#000000', badgeText: '#ffffff' },
  { id: 'mololo-session', label: 'SESSION', color: '#e01a31', badgeBg: '#e01a31', badgeText: '#ffffff' },
  { id: 'mololo-club', label: 'CLUB', color: '#e01a31', badgeBg: '#e01a31', badgeText: '#ffffff' },
  { id: 'mololo-radar', label: 'RADAR', color: '#e01a31', badgeBg: '#e01a31', badgeText: '#ffffff' },
  { id: 'mololo-news', label: 'NEWS', color: '#e01a31', badgeBg: '#e01a31', badgeText: '#ffffff' },
  { id: 'mololo-plus', label: '+', color: '#e01a31', badgeBg: '#000000', badgeText: '#e01a31', isPlus: true },
  { id: 'mololo-episode', label: 'EPISODE', color: '#e01a31', badgeBg: '#e01a31', badgeText: '#ffffff' },
  { id: 'mololo-playlist', label: 'PLAYLIST', color: '#e01a31', badgeBg: '#e01a31', badgeText: '#ffffff' },
  { id: 'mololo-original', label: 'ORIGINAL', color: '#e01a31', badgeBg: '#e01a31', badgeText: '#ffffff' },
];

async function generate() {
  // 1. Generate Monogram SVG & PNG
  const monoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 160">
    <rect width="180" height="160" fill="#e01a31" />
    ${mololoMonogramSvg('#ffffff')}
  </svg>`;
  fs.writeFileSync(path.join(outDir, 'mololo-monogram.svg'), monoSvg);
  await sharp(Buffer.from(monoSvg)).resize(360, 320).png().toFile(path.join(outDir, 'mololo-monogram.png'));
  console.log('Generated Monogram logo');

  // 2. Generate each Branch logo (Dark on white and White on red)
  for (const b of branches) {
    const isPlus = b.isPlus;
    
    // Version White on Red
    const svgRed = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 220" width="840" height="220">
      <rect width="840" height="220" rx="16" fill="#e01a31" />
      <g transform="translate(40, 53)">
        ${mololoBaseSvg('#ffffff')}
      </g>
      ${isPlus ? `
        <!-- Plus Symbol -->
        <g transform="translate(710, 50)">
          <circle cx="55" cy="55" r="45" fill="#000000" />
          <path d="M 55 30 L 55 80 M 30 55 L 80 55" stroke="#ffffff" stroke-width="12" stroke-linecap="round" />
        </g>
      ` : `
        <!-- Text Descriptor Badge -->
        <g transform="translate(680, 75)">
          <rect x="0" y="0" width="${Math.max(120, b.label.length * 15 + 30)}" height="48" rx="6" fill="#ffffff" />
          <text x="${Math.max(60, (b.label.length * 15 + 30) / 2)}" y="32" font-family="'Unbounded', 'Exo', sans-serif" font-weight="900" font-size="20" fill="#e01a31" text-anchor="middle" letter-spacing="3">${b.label}</text>
        </g>
      `}
    </svg>`;

    // Version Dark on Linen/Light (#fff1d9)
    const svgLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 220" width="840" height="220">
      <rect width="840" height="220" rx="16" fill="#fff1d9" stroke="#000000" stroke-width="3" />
      <g transform="translate(40, 53)">
        ${mololoBaseSvg('#000000')}
      </g>
      ${isPlus ? `
        <!-- Plus Symbol -->
        <g transform="translate(710, 50)">
          <circle cx="55" cy="55" r="45" fill="#e01a31" />
          <path d="M 55 30 L 55 80 M 30 55 L 80 55" stroke="#ffffff" stroke-width="12" stroke-linecap="round" />
        </g>
      ` : `
        <!-- Text Descriptor Badge -->
        <g transform="translate(680, 75)">
          <rect x="0" y="0" width="${Math.max(120, b.label.length * 15 + 30)}" height="48" rx="6" fill="#e01a31" />
          <text x="${Math.max(60, (b.label.length * 15 + 30) / 2)}" y="32" font-family="'Unbounded', 'Exo', sans-serif" font-weight="900" font-size="20" fill="#ffffff" text-anchor="middle" letter-spacing="3">${b.label}</text>
        </g>
      `}
    </svg>`;

    fs.writeFileSync(path.join(outDir, `${b.id}-red.svg`), svgRed);
    fs.writeFileSync(path.join(outDir, `${b.id}-light.svg`), svgLight);

    await sharp(Buffer.from(svgRed)).resize(840, 220).png().toFile(path.join(outDir, `${b.id}-red.png`));
    await sharp(Buffer.from(svgLight)).resize(840, 220).png().toFile(path.join(outDir, `${b.id}-light.png`));
    console.log(`Generated ${b.id} logos`);
  }
}

generate().catch(console.error);
