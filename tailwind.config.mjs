/** @type {import('tailwindcss').Config} */

/*
 * ============================================================================
 *  SISTEMA DE DISEÑO — Estudio Gonzáles Magni
 * ----------------------------------------------------------------------------
 *  Paleta de autor inspirada en Bariloche: la seriedad de un estudio formal
 *  con la calidez de la cordillera. Nada de azul eléctrico corporativo.
 *
 *  · grafito   → grises grafito profundos y cálidos (texto, secciones oscuras)
 *  · arena     → tonos arena / tiza texturizada (fondos, "papel")
 *  · terracota → acento terroso para CTAs y detalles
 *  · pino      → verde bosque apagado, acento secundario (lagos y bosques)
 * ============================================================================
 */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        grafito: {
          50: '#f5f4f2',
          100: '#e8e6e1',
          200: '#cfcbc3',
          300: '#aea89c',
          400: '#857d6f',
          500: '#6a6256',
          600: '#534c43',
          700: '#433d37',
          800: '#2c2825',
          900: '#1f1c19',
          950: '#131110',
        },
        arena: {
          50: '#faf7f1',
          100: '#f3eee3',
          200: '#eae1d0',
          300: '#ddcfb7',
          400: '#cbb795',
          500: '#bb9f76',
          600: '#a4855a',
          700: '#866b49',
          800: '#6d573e',
          900: '#5a4836',
          950: '#30251a',
        },
        terracota: {
          50: '#fcf4f0',
          100: '#f8e5db',
          200: '#f0c8b5',
          300: '#e5a486',
          400: '#d77c55',
          500: '#c75f37',
          600: '#b54e2c',
          700: '#963e26',
          800: '#793525',
          900: '#642f22',
          950: '#36150f',
        },
        pino: {
          50: '#f2f6f3',
          100: '#e0eae2',
          200: '#c3d6c7',
          300: '#9bb8a1',
          400: '#6c9275',
          500: '#4d7357',
          600: '#3a5a44',
          700: '#2f4838',
          800: '#283a2e',
          900: '#223027',
          950: '#111c16',
        },
      },
      fontFamily: {
        // Serif editorial para títulos (variable: optical sizing + peso)
        serif: ['"Fraunces Variable"', '"Fraunces"', 'Georgia', 'Cambria', 'serif'],
        // Grotesca sumamente legible para el cuerpo (evitamos el cliché de Inter)
        sans: [
          '"Hanken Grotesk Variable"',
          '"Hanken Grotesk"',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
      },
      fontSize: {
        // Escala tipográfica fluida (clamp) para una jerarquía editorial responsive
        'fluid-sm': 'clamp(0.875rem, 0.84rem + 0.18vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'fluid-lg': 'clamp(1.2rem, 1.1rem + 0.5vw, 1.5rem)',
        'fluid-xl': 'clamp(1.5rem, 1.3rem + 1vw, 2.25rem)',
        'fluid-2xl': 'clamp(2rem, 1.6rem + 2vw, 3.25rem)',
        'fluid-3xl': 'clamp(2.5rem, 1.9rem + 3vw, 4.75rem)',
        'fluid-4xl': 'clamp(2.5rem, 1.85rem + 3.4vw, 5rem)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        eyebrow: '0.22em',
      },
      maxWidth: {
        prose: '64ch',
        content: '78rem',
      },
      spacing: {
        section: 'clamp(4.5rem, 3rem + 8vw, 9rem)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(19,17,16,0.04), 0 12px 32px -12px rgba(19,17,16,0.16)',
        lift: '0 2px 4px rgba(19,17,16,0.05), 0 30px 60px -24px rgba(19,17,16,0.28)',
        glow: '0 18px 40px -16px rgba(199,95,55,0.5)',
        ring: 'inset 0 0 0 1px rgba(19,17,16,0.08)',
      },
      backgroundImage: {
        'grain':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-line': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'float-soft': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
        'float-soft': 'float-soft 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
