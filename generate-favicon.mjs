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