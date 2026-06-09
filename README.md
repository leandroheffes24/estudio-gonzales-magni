# Estudio Gonzáles Magni — Sitio web institucional

Sitio *one-page* premium para un estudio contable en **San Carlos de Bariloche, Río Negro**.
Construido con **Astro** (cero JavaScript por defecto, máxima velocidad) y **Tailwind CSS**, con un
diseño de autor: paleta cálida inspirada en Bariloche, tipografía editorial y micro-interacciones en
CSS puro.

---

## 🚀 Puesta en marcha

Requisitos: **Node 18+** (probado con Node 25) y **npm**.

```bash
npm install          # instala dependencias
npm run setup:images # genera imágenes de muestra (sólo la 1ª vez o para regenerarlas)
npm run dev          # entorno de desarrollo en http://localhost:4321
```

| Comando                | Qué hace                                                       |
| ---------------------- | ------------------------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo con recarga en caliente.               |
| `npm run build`        | Compila el sitio estático en `dist/`.                         |
| `npm run preview`      | Sirve localmente el sitio ya compilado.                       |
| `npm run setup:images` | (Re)genera las imágenes de muestra (hero, nosotros y OG).     |

---

## ✏️ Lo único que tenés que editar: `src/data/site.ts`

**Todo el contenido sensible vive en un solo archivo.** Abrí
[`src/data/site.ts`](src/data/site.ts) y reemplazá los valores marcados con `// EDITAR`:

- **Datos de contacto:** teléfono, WhatsApp, email.
- **Domicilio (NAP):** calle, código postal y coordenadas (clave para el SEO local).
- **Titular:** nombre real de la contadora y número de matrícula.
- **Horarios, redes sociales y zona de cobertura.**
- **Servicios y Preguntas Frecuentes:** editá los textos a gusto (las FAQ alimentan
  automáticamente el acordeón **y** el *schema* de Google).

También actualizá el dominio en [`astro.config.mjs`](astro.config.mjs) (`SITE_URL`) y en
[`public/robots.txt`](public/robots.txt). Eso alimenta las URLs canónicas, Open Graph y el sitemap.

---

## 🖼️ Reemplazar las imágenes

Las imágenes son de muestra. Cambialas por fotos profesionales reales (mismas rutas y, idealmente,
proporciones verticales similares):

- `src/assets/placeholders/hero-portrait.jpg` — foto del hero.
- `src/assets/placeholders/about-portrait.jpg` — foto de la sección *Nosotros*.
- `public/og-image.jpg` — imagen para compartir en redes (1200×630).

> Las dos primeras se sirven con el componente `<Image/>` de Astro, que las convierte a WebP y genera
> tamaños responsive automáticamente para optimizar **Core Web Vitals**. No hace falta tocar código:
> sólo reemplazá los archivos.

---

## 📩 Activar el formulario de contacto

Por defecto, el formulario **deriva la consulta a WhatsApp** con los datos pre-cargados (funciona sin
backend). Si querés recibir las consultas por email:

1. Creá un formulario gratuito en [Formspree](https://formspree.io) (u otro servicio similar).
2. Pegá la URL del endpoint en `site.contact.formEndpoint` dentro de `src/data/site.ts`.

A partir de ahí, el formulario envía por `fetch` sin recargar la página y muestra el estado al usuario.

---

## 🔍 SEO incluido

- Jerarquía semántica estricta: **un solo `<h1>`**, seguido de `<h2>` y `<h3>`.
- Meta tags + **Open Graph** + **Twitter Cards** + etiquetas `geo.*` para SEO local.
- **Datos estructurados JSON-LD:** `AccountingService` (LocalBusiness con dirección, teléfono,
  horarios, geo y zona de cobertura) y `FAQPage`.
- `sitemap-index.xml` y `robots.txt` generados automáticamente.
- Diseño **mobile-first**, 100% responsive y accesible (skip-link, foco visible, `prefers-reduced-motion`).

---

## 🎨 Sistema de diseño

Definido en [`tailwind.config.mjs`](tailwind.config.mjs):

- **Paleta:** `grafito` (grises cálidos), `arena` (tiza/papel), `terracota` (acento/CTA) y `pino`
  (verde bosque).
- **Tipografía:** *Fraunces* (serif editorial, títulos) + *Hanken Grotesk* (sans, cuerpo),
  auto-alojadas con Fontsource.
- **Micro-interacciones** y revelados al hacer scroll en CSS puro ([`src/styles/global.css`](src/styles/global.css)).

---

## ☁️ Deploy

Salida 100% estática (`dist/`). Funciona en cualquier hosting estático:

- **Netlify / Vercel / Cloudflare Pages:** build command `npm run build`, directorio de publicación `dist`.
- **GitHub Pages / hosting tradicional:** subí el contenido de `dist/`.

Acordate de configurar el dominio real en `astro.config.mjs` antes de compilar para producción.

---

## 🗂️ Estructura

```
src/
├── assets/placeholders/   # imágenes (reemplazar por fotos reales)
├── components/            # Hero, TargetAudience, Services, HowWeWork, WhyUs,
│                          # AboutUs, FAQ, Contact, Header, Footer, WhatsAppFloat…
├── data/site.ts           # ⭐ configuración central (editá esto)
├── layouts/Layout.astro   # <head>, SEO, Open Graph, JSON-LD
├── pages/index.astro      # ensamble del one-page
└── styles/global.css      # tokens, base y micro-interacciones
```
