#!/usr/bin/env node

/**
 * Simple PWA Icon Generator for Kirat
 * Creates placeholder icons in various sizes
 *
 * This is a basic implementation. For production, use tools like:
 * - https://realfavicongenerator.net/
 * - https://www.pwabuilder.com/imageGenerator
 */

const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, '../public/icons');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate SVG icons for each size
sizes.forEach(size => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="${size}" height="${size}" fill="#2563eb" rx="${size * 0.15}"/>

  <!-- Gradient overlay -->
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#grad)" rx="${size * 0.15}"/>

  <!-- Letter K -->
  <text
    x="50%"
    y="50%"
    font-family="Arial, sans-serif"
    font-size="${size * 0.6}"
    font-weight="bold"
    fill="white"
    text-anchor="middle"
    dominant-baseline="central">K</text>
</svg>`;

  const filename = `icon-${size}x${size}.png`;
  const svgFilename = `icon-${size}x${size}.svg`;

  // Save SVG version
  fs.writeFileSync(
    path.join(iconsDir, svgFilename),
    svg
  );

  console.log(`✓ Generated ${svgFilename}`);
});

console.log(`\n✅ Generated ${sizes.length} SVG icons in ${iconsDir}`);
console.log('\nNote: These are SVG placeholders. For PNG icons:');
console.log('1. Use an online tool: https://realfavicongenerator.net/');
console.log('2. Or convert SVGs to PNGs using ImageMagick, Sharp, or similar');
console.log('\nFor now, the PWA will work with the SVG favicon in the HTML.');
