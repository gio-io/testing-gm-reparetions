/**
 * One-off script to generate a branded 1200x630 OG image for G&M Reparaciones.
 * Run once: node scripts/generate-og-image.mjs
 * The resulting file is committed to public/og-image.jpg and can be replaced
 * by the client with their own designed image at any time.
 */

import sharp from "sharp";
import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "../public/og-image.jpg");

// Brand colors
const BLACK = "#0A0A0A";
const CYAN = "#29ABE2";
const ORANGE = "#F7931E";
const WHITE = "#FFFFFF";
const MUTED = "#888888";

const W = 1200;
const H = 630;

// Build an SVG that will be rasterized by sharp
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <!-- Background gradient: very dark, slight warmth -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A0A0A"/>
      <stop offset="100%" stop-color="#111111"/>
    </linearGradient>
    <!-- Accent gradient: cyan → orange -->
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${CYAN}"/>
      <stop offset="100%" stop-color="${ORANGE}"/>
    </linearGradient>
    <!-- Subtle radial glow behind logo -->
    <radialGradient id="glow" cx="50%" cy="45%" r="38%">
      <stop offset="0%" stop-color="${CYAN}" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="${BLACK}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- Soft glow -->
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- Top accent bar — full width gradient stripe -->
  <rect x="0" y="0" width="${W}" height="6" fill="url(#accent)" rx="0"/>

  <!-- Bottom accent bar -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="url(#accent)" rx="0"/>

  <!-- Left decorative vertical bar -->
  <rect x="80" y="80" width="4" height="${H - 160}" fill="url(#accent)" rx="2" opacity="0.4"/>

  <!-- Wrench icon (simplified SVG path, centered-left) -->
  <g transform="translate(136, ${H / 2 - 44}) scale(1.1)" opacity="0.18" fill="${CYAN}">
    <path d="M68.5 2.3c-11.3-3.5-23.5-.4-31.6 8.1L21.7 25.7c-1.3 1.3-1.3 3.3 0 4.6l9.2 9.2-14.3 14.3c-3.7 3.7-3.7 9.7 0 13.4l16.5 16.5c3.7 3.7 9.7 3.7 13.4 0l14.3-14.3 9.2 9.2c1.3 1.3 3.3 1.3 4.6 0l15.3-15.2c8.5-8.1 11.6-20.3 8.1-31.6l-9.5 9.5c-3.5 3.5-9.2 3.5-12.7 0l-7.3-7.3c-3.5-3.5-3.5-9.2 0-12.7l9.5-9.5z"/>
  </g>

  <!-- Company logo circle (brand mark) -->
  <!-- Outer ring gradient -->
  <circle cx="192" cy="${H / 2}" r="78" fill="none" stroke="url(#accent)" stroke-width="3" opacity="0.7"/>
  <!-- Inner fill -->
  <circle cx="192" cy="${H / 2}" r="72" fill="#151515"/>
  <!-- "G&M" initials inside circle -->
  <text x="192" y="${H / 2 - 8}" text-anchor="middle" dominant-baseline="middle"
    font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="34"
    fill="${CYAN}" letter-spacing="-1">G&amp;M</text>
  <text x="192" y="${H / 2 + 26}" text-anchor="middle" dominant-baseline="middle"
    font-family="Arial, sans-serif" font-weight="700" font-size="13"
    fill="${ORANGE}" letter-spacing="3">REPARACIONES</text>

  <!-- Main company name -->
  <text x="320" y="${H / 2 - 55}" dominant-baseline="middle"
    font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="62"
    fill="${WHITE}" letter-spacing="-1">G&amp;M</text>
  <text x="320" y="${H / 2 + 12}" dominant-baseline="middle"
    font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="62"
    fill="${WHITE}" letter-spacing="-1">REPARACIONES</text>

  <!-- Gradient underline beneath company name -->
  <rect x="320" y="${H / 2 + 46}" width="520" height="4" fill="url(#accent)" rx="2"/>

  <!-- Tagline -->
  <text x="320" y="${H / 2 + 86}" dominant-baseline="middle"
    font-family="Arial, sans-serif" font-weight="400" font-size="22"
    fill="${MUTED}" letter-spacing="0.3">
    Reparaci&#243;n de electrodom&#233;sticos en Valladolid y provincia
  </text>

  <!-- Service chips — bottom row -->
  <g transform="translate(320, ${H / 2 + 130})">
    <!-- Chip 1 -->
    <rect x="0" y="0" width="130" height="28" rx="14" fill="${CYAN}" fill-opacity="0.12" stroke="${CYAN}" stroke-opacity="0.35" stroke-width="1"/>
    <text x="65" y="14" text-anchor="middle" dominant-baseline="middle"
      font-family="Arial, sans-serif" font-size="12" fill="${CYAN}" font-weight="600">Lavadoras</text>
    <!-- Chip 2 -->
    <rect x="142" y="0" width="130" height="28" rx="14" fill="${ORANGE}" fill-opacity="0.12" stroke="${ORANGE}" stroke-opacity="0.35" stroke-width="1"/>
    <text x="207" y="14" text-anchor="middle" dominant-baseline="middle"
      font-family="Arial, sans-serif" font-size="12" fill="${ORANGE}" font-weight="600">Frigor&#237;ficos</text>
    <!-- Chip 3 -->
    <rect x="284" y="0" width="100" height="28" rx="14" fill="${CYAN}" fill-opacity="0.12" stroke="${CYAN}" stroke-opacity="0.35" stroke-width="1"/>
    <text x="334" y="14" text-anchor="middle" dominant-baseline="middle"
      font-family="Arial, sans-serif" font-size="12" fill="${CYAN}" font-weight="600">Hornos</text>
    <!-- Chip 4 -->
    <rect x="396" y="0" width="140" height="28" rx="14" fill="${ORANGE}" fill-opacity="0.12" stroke="${ORANGE}" stroke-opacity="0.35" stroke-width="1"/>
    <text x="466" y="14" text-anchor="middle" dominant-baseline="middle"
      font-family="Arial, sans-serif" font-size="12" fill="${ORANGE}" font-weight="600">Aires acondicionados</text>
  </g>

  <!-- Bottom right: domain -->
  <text x="${W - 80}" y="${H - 28}" text-anchor="end" dominant-baseline="middle"
    font-family="Arial, sans-serif" font-size="14" fill="${MUTED}" opacity="0.7">
    gmreparaciones.es
  </text>
</svg>`;

sharp(Buffer.from(svg))
  .resize(W, H)
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(outputPath)
  .then((info) => {
    console.log(`OG image created: ${outputPath}`);
    console.log(`Dimensions: ${info.width}x${info.height} | Size: ${(info.size / 1024).toFixed(1)} KB`);
  })
  .catch((err) => {
    console.error("Error generating OG image:", err);
    process.exit(1);
  });
