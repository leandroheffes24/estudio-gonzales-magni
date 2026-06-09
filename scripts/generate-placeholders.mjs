/*
 * Genera imágenes de muestra (placeholders) para que el sitio corra de
 * inmediato con el componente <Image/> de Astro.
 *
 *   Uso:  npm run setup:images
 *
 * ⚠️  Reemplazá estos archivos por fotografías profesionales reales:
 *      · src/assets/placeholders/hero-portrait.jpg
 *      · src/assets/placeholders/about-portrait.jpg
 *      · public/og-image.jpg   (imagen para compartir en redes, 1200×630)
 */

import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const assetsDir = path.join(root, 'src', 'assets', 'placeholders');
const publicDir = path.join(root, 'public');

fs.mkdirSync(assetsDir, { recursive: true });
fs.mkdirSync(publicDir, { recursive: true });

// Paleta (coincide con tailwind.config.mjs)
const C = {
  arena100: '#f3eee3',
  arena300: '#ddcfb7',
  terracota200: '#f0c8b5',
  pino200: '#c3d6c7',
  grafito400: '#857d6f',
  grafito600: '#6a6256',
  grafito950: '#131110',
  arena50: '#faf7f1',
  arena300b: '#ddcfb7',
  terracota500: '#c75f37',
};

function portraitSVG(w, h, label) {
  const min = Math.min(w, h);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${C.arena100}"/>
        <stop offset="1" stop-color="${C.arena300}"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <circle cx="${w * 0.78}" cy="${h * 0.2}" r="${min * 0.3}" fill="${C.terracota200}" opacity="0.55"/>
    <circle cx="${w * 0.18}" cy="${h * 0.84}" r="${min * 0.24}" fill="${C.pino200}" opacity="0.5"/>
    <text x="50%" y="47%" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${min * 0.24}" fill="${C.grafito400}" opacity="0.85" letter-spacing="4">GM</text>
    <text x="50%" y="58%" text-anchor="middle" font-family="Georgia, serif" font-size="${min * 0.05}" fill="${C.grafito600}" letter-spacing="6">${label}</text>
    <text x="50%" y="63%" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${min * 0.03}" fill="${C.grafito400}" letter-spacing="2">imagen de muestra · reemplazar por foto real</text>
  </svg>`;
}

function ogSVG(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="${C.grafito950}"/>
    <circle cx="${w * 0.86}" cy="${h * 0.2}" r="${h * 0.5}" fill="${C.terracota500}" opacity="0.18"/>
    <rect x="90" y="${h * 0.28}" width="64" height="6" rx="3" fill="${C.terracota500}"/>
    <text x="88" y="${h * 0.43}" font-family="Georgia, serif" font-size="60" fill="${C.arena50}">Estudio Contable y Jurídico</text>
    <text x="88" y="${h * 0.55}" font-family="Georgia, serif" font-size="60" fill="${C.arena50}">González Magni</text>
    <text x="92" y="${h * 0.7}" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="${C.arena300}">Asesoría contable y jurídica en Bariloche · Río Negro</text>
    <text x="92" y="${h * 0.86}" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="${C.grafito400}" letter-spacing="2">Empresas · Pymes · Monotributo · Personas</text>
  </svg>`;
}

async function render(svg, w, h, outPath, fallback) {
  try {
    await sharp(Buffer.from(svg)).jpeg({ quality: 82 }).toFile(outPath);
  } catch (e) {
    // Si el entorno de sharp no rasteriza SVG, generamos un color sólido válido.
    console.warn(`  ! SVG no soportado para ${path.basename(outPath)} (${e.message}). Uso color sólido.`);
    await sharp({ create: { width: w, height: h, channels: 3, background: fallback } })
      .jpeg({ quality: 82 })
      .toFile(outPath);
  }
  console.log(`  ✓ ${path.relative(root, outPath)}  (${w}×${h})`);
}

const tasks = [
  {
    svg: portraitSVG(1080, 1350, 'ESTUDIO GONZÁLEZ MAGNI'),
    w: 1080,
    h: 1350,
    out: path.join(assetsDir, 'hero-portrait.jpg'),
    fb: { r: 234, g: 225, b: 208 },
  },
  {
    svg: portraitSVG(960, 1200, 'GONZÁLEZ MAGNI'),
    w: 960,
    h: 1200,
    out: path.join(assetsDir, 'about-portrait.jpg'),
    fb: { r: 221, g: 207, b: 183 },
  },
  {
    svg: ogSVG(1200, 630),
    w: 1200,
    h: 630,
    out: path.join(publicDir, 'og-image.jpg'),
    fb: { r: 19, g: 17, b: 16 },
  },
];

console.log('Generando imágenes de muestra…');
for (const t of tasks) {
  await render(t.svg, t.w, t.h, t.out, t.fb);
}
console.log('Listo. Recordá reemplazarlas por fotografías reales.');
