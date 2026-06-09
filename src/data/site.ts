/*
 * ============================================================================
 *  CONFIGURACIÓN CENTRAL DEL SITIO — Estudio Contable y Jurídico González Magni
 * ----------------------------------------------------------------------------
 *  ⚠️  DATOS DE EJEMPLO. Reemplazá los valores marcados con « EDITAR » por la
 *      información real del estudio. Todo el sitio (textos, botones, JSON-LD
 *      de SEO, mapa y WhatsApp) se alimenta desde este único archivo.
 * ============================================================================
 */

export const site = {
  // ── Identidad ────────────────────────────────────────────────────────────
  name: 'Estudio Contable y Jurídico González Magni',
  legalName: 'Estudio Contable y Jurídico González Magni',
  shortName: 'González Magni',
  tagline: 'Asesoría contable y jurídica en San Carlos de Bariloche',
  url: 'https://www.estudiogmagni.com.ar',
  lang: 'es-AR',
  locale: 'es_AR',
  foundingYear: 2011, // EDITAR

  description:
    'Estudio contable y jurídico en San Carlos de Bariloche, Río Negro. Asesoría impositiva, contable y jurídica para empresas, pymes, monotributistas y profesionales, con atención personalizada y lenguaje claro.',

  // ── Titular ──────────────────────────────────────────────────────────────
  owner: {
    name: 'María Emilia González Magni', // EDITAR (nombre de la titular)
    role: 'Contadora Pública · Titular del estudio',
    matricula: 'Matrícula C.P.C.E. Río Negro', // EDITAR (Nº de matrícula)
  },

  // ── Contacto ─────────────────────────────────────────────────────────────
  contact: {
    phoneDisplay: '+54 9 2944 44-6302', // Línea principal (Impuestos y contabilidad)
    phoneE164: '+5492944446302',
    whatsapp: '5492944446302', // Número por defecto (fallback sin JS) — ver whatsappLines
    whatsappMessage:
      'Hola, llegué desde la web del estudio y quería hacer una consulta.',
    email: 'estudiogmagni@gmail.com',
    // Endpoint del formulario — FormSubmit.co (gratis, sin cuenta, va directo a tu Gmail).
    // ⚠️ ACTIVACIÓN: la primera vez que llegue una consulta, FormSubmit te manda un
    //    mail para "Activar" el formulario. Hacé clic en ese enlace UNA sola vez.
    // 🔒 Recomendado: reemplazar el mail por el alias con hash que te da FormSubmit
    //    (ej. https://formsubmit.co/ajax/abc123) para no exponer la dirección en el HTML.
    // Si lo dejás vacío o como el placeholder, el formulario deriva la consulta a WhatsApp.
    formEndpoint: 'https://formsubmit.co/ajax/estudiogmagni@gmail.com',
  },

  // ── Líneas de WhatsApp por área ──────────────────────────────────────────
  // Al hacer clic en cualquier botón de WhatsApp se abre un selector con estas
  // opciones. El número va sólo en dígitos (código país + 9 + área + número).
  whatsappLines: [
    { label: 'Impuestos y contabilidad', number: '5492944446302', display: '+54 9 2944 44-6302' },
    { label: 'Sueldos y jurídicas', number: '5492944304163', display: '+54 9 2944 30-4163' },
  ],

  // ── Domicilio (NAP — clave para SEO local) ───────────────────────────────
  address: {
    street: 'Mitre 660, Piso 1, Of. D',
    city: 'San Carlos de Bariloche',
    region: 'Río Negro',
    regionCode: 'AR-R',
    postalCode: '8400',
    country: 'AR',
    countryName: 'Argentina',
    geo: { lat: -41.1334, lng: -71.3088 },
  },

  // ── Horarios ─────────────────────────────────────────────────────────────
  hoursDisplay: 'Lunes a viernes · 7:00 a 15:00 h',
  // Formato schema.org (para JSON-LD LocalBusiness)
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
  ],

  // ── Zona de cobertura (SEO local) ────────────────────────────────────────
  areaServed: [
    'San Carlos de Bariloche',
    'Dina Huapi',
    'El Bolsón',
    'Villa La Angostura',
    'Río Negro',
  ],

  // ── Redes (dejá en '' las que no uses) ───────────────────────────────────
  social: {
    instagram: 'https://instagram.com/estudiogmagni', // EDITAR
    linkedin: '', // EDITAR
    facebook: '', // EDITAR
  },

  // ── Navegación (one-page) ────────────────────────────────────────────────
  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Para quién', href: '#para-quien' },
    { label: 'Cómo trabajamos', href: '#proceso' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Preguntas', href: '#preguntas' },
    { label: 'Contacto', href: '#contacto' },
  ],
} as const;

/* ── Servicios ──────────────────────────────────────────────────────────── */
export const services = [
  {
    title: 'Liquidación de impuestos',
    summary:
      'IVA, Ganancias, Bienes Personales, Ingresos Brutos y Convenio Multilateral, presentados en término.',
    detail:
      'Llevamos tus declaraciones juradas ante ARCA (ex AFIP) y la Agencia de Recaudación Tributaria de Río Negro sin sobresaltos: cálculo, presentación y seguimiento de vencimientos para que nunca llegues tarde.',
  },
  {
    title: 'Monotributo y autónomos',
    summary:
      'Alta, categorización, recategorización y facturación electrónica, explicadas en palabras simples.',
    detail:
      'Te ayudamos a elegir bien la categoría, mantenerla al día y entender qué podés y qué no podés facturar. Ideal si recién arrancás o si querés ordenar lo que ya venís haciendo.',
  },
  {
    title: 'Liquidación de sueldos',
    summary:
      'Recibos, cargas sociales, F.931, Libro de Sueldos Digital y altas y bajas de personal.',
    detail:
      'Gestionamos toda la nómina de tu empresa con prolijidad y a tiempo: convenios, ART, obra social y aportes, para que tu equipo cobre tranquilo y vos cumplas sin dolores de cabeza.',
  },
  {
    title: 'Consultas impositivas puntuales',
    summary:
      'Una respuesta clara cuando tenés que tomar una decisión y necesitás saber dónde estás parado.',
    detail:
      '¿Conviene pasar a Responsable Inscripto? ¿Cómo facturo este trabajo? ¿Qué impuesto me corresponde? Resolvemos tu duda puntual sin que tengas que contratar un abono mensual.',
  },
  {
    title: 'Cierre de ejercicio y balances',
    summary:
      'Estados contables, memorias y cierres para sociedades y empresas, listos para presentar.',
    detail:
      'Preparamos tus estados contables con criterio profesional y los dejamos listos para bancos, organismos o socios, acompañándote en la lectura de los números de tu negocio.',
  },
  {
    title: 'Asesoramiento jurídico',
    summary:
      'Sociedades, contratos y derecho laboral, integrados con la mirada contable e impositiva.',
    detail:
      'Constitución y reorganización de sociedades, estatutos y actas, contratos comerciales y laborales, y acompañamiento en conflictos. Coordinamos lo legal con tu situación impositiva para que ambas cosas vayan en la misma dirección.',
  },
] as const;

/* ── Preguntas frecuentes (alimentan el acordeón Y el Schema FAQ) ─────────── */
export const faqs = [
  {
    q: '¿Atienden sólo en Bariloche o también a clientes de otras ciudades?',
    a: 'Estamos en San Carlos de Bariloche y atendemos a clientes de toda la región andina de Río Negro —Dina Huapi, El Bolsón, Villa La Angostura— y del resto del país de forma remota. La distancia no es un problema: gran parte del trabajo se resuelve online.',
  },
  {
    q: '¿Trabajan con monotributistas que recién empiezan?',
    a: 'Sí, es una de nuestras especialidades. Te acompañamos desde el alta, te explicamos cómo facturar y qué categoría te conviene, y quedamos disponibles para tus dudas a medida que tu actividad crece.',
  },
  {
    q: '¿Puedo hacer una consulta puntual sin contratar un servicio mensual?',
    a: 'Por supuesto. Muchas personas nos contactan por una situación concreta: una recategorización, una venta, un cambio de condición frente al IVA. Resolvemos esa consulta puntual sin obligarte a un abono permanente.',
  },
  {
    q: '¿Qué necesito para la primera consulta?',
    a: 'Con que nos cuentes tu situación alcanza para empezar. Si ya tenés CUIT, clave fiscal o facturación previa, tenerlos a mano agiliza todo, pero no es excluyente: en la primera charla ordenamos juntos qué hace falta.',
  },
  {
    q: '¿Se ocupan de la liquidación de sueldos de mi empresa?',
    a: 'Sí. Liquidamos sueldos y jornales, generamos los recibos, presentamos el F.931, llevamos el Libro de Sueldos Digital y gestionamos altas y bajas de personal ante los organismos correspondientes.',
  },
  {
    q: '¿La atención es presencial u online?',
    a: 'Como vos prefieras. Podés visitarnos en la oficina en Bariloche o resolver todo por videollamada, mail y WhatsApp. Adaptamos la modalidad a tu ritmo y a tu ubicación.',
  },
  {
    q: '¿Cómo son los honorarios?',
    a: 'Dependen del servicio y de la complejidad de cada caso, así que preferimos cotizarte con claridad después de escucharte. No hay sorpresas: antes de empezar vas a saber exactamente qué incluye y cuánto cuesta.',
  },
  {
    q: '¿Atienden empresas y pymes además de personas?',
    a: 'Sí. Trabajamos tanto con personas (monotributo, Ganancias, Bienes Personales) como con pymes y sociedades en su gestión impositiva, laboral, contable y jurídica integral, incluidos cierres de ejercicio y balances.',
  },
] as const;

/* ── Helpers ─────────────────────────────────────────────────────────────── */

/** Construye un enlace de WhatsApp con mensaje opcional pre-cargado. */
export function waLink(message: string = site.contact.whatsappMessage): string {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Enlace tel: a partir del número en formato E.164. */
export function telLink(): string {
  return `tel:${site.contact.phoneE164}`;
}

/** Dirección completa en una línea (para mostrar y para el mapa). */
export function fullAddress(): string {
  const a = site.address;
  return `${a.street}, ${a.city}, ${a.region} (${a.postalCode}), ${a.countryName}`;
}

/** URL de embed de Google Maps sin necesidad de API key. */
export function mapEmbedUrl(): string {
  const q = encodeURIComponent(`${site.name}, ${fullAddress()}`);
  return `https://www.google.com/maps?q=${q}&z=15&output=embed`;
}

/** URL para abrir la ubicación en Google Maps (botón "cómo llegar"). */
export function mapLink(): string {
  const q = encodeURIComponent(`${site.name}, ${fullAddress()}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
