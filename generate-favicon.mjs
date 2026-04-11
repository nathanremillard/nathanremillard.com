import sharp from 'sharp';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBow="0 0 32 32">
    <rect width="32" height="32" rx="6" fill="#2D5016"/>
    <text
        x="16"
        y="22"
        font-family="system-ui, sans-serif"
        font-size="14"
        font-weight="700"
        fill="#F7F7F5"
        text-anchor="middle"
    >NR</text>
</svg>`;

await sharp(Buffer.from(svg))
    .resize(32, 32)
    .toFile('public/favicon.ico');

await sharp(Buffer.from(svg))
    .resize(180, 180)
    .toFile('public/apple-touch-icon.png');

console.log('Favicon generated');

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#2D5016"/>
  <rect x="60" y="60" width="1080" height="510" rx="12" fill="#F7F7F5"/>
  <text x="100" y="200" font-family="system-ui, sans-serif" font-size="28" font-weight="600" fill="#4A6741" letter-spacing="4">POLICY RESEARCHER</text>
  <text x="100" y="320" font-family="system-ui, sans-serif" font-size="72" font-weight="700" fill="#1C2128">Nathan J. Remillard</text>
  <text x="100" y="420" font-family="system-ui, sans-serif" font-size="28" fill="#3D4654">Drug policy · Health care policy · Environmental policy</text>
  <text x="100" y="510" font-family="system-ui, sans-serif" font-size="22" fill="#8A9099">nathanremillard.com</text>
</svg>`;

await sharp(Buffer.from(ogSvg))
  .resize(1200, 630)
  .toFile('public/og-image.png');

console.log('OG image generated!');