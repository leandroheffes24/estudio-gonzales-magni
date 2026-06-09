import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// ⚠️ CONFIGURACIÓN: reemplazá este dominio por el real cuando publiques el sitio.
// Se usa para generar URLs canónicas, Open Graph y el sitemap.xml.
const SITE_URL = 'https://www.estudiogmagni.com.ar';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Salida 100% estática => cero JS por defecto y máxima velocidad de carga.
  output: 'static',
  integrations: [
    tailwind({
      // Desactivamos la inyección automática: declaramos las directivas
      // @tailwind nosotros mismos en src/styles/global.css para poder usar @layer.
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  image: {
    // Servicio de imágenes basado en sharp (optimización de Core Web Vitals).
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
  },
});
