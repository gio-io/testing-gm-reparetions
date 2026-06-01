/**
 * G&M REPARACIONES — Site Constants
 *
 * PLACEHOLDERS: Replace every value marked [PLACEHOLDER] before going live.
 * These values appear throughout the site (header, footer, JSON-LD, legal pages, contact form).
 * Centralising here means a single-file find-and-replace is sufficient.
 */

export const SITE = {
  name: "G&M Reparaciones",
  tagline: "Técnicos cualificados en Valladolid y provincia",
  url: "https://gmreparaciones.es", // [PLACEHOLDER] — replace with real domain

  // ---- CONTACT PLACEHOLDERS ----
  phone: "+34 600 000 000",           // [PLACEHOLDER] — replace with real phone
  phoneDial: "+34600000000",          // [PLACEHOLDER] — same number, no spaces (for tel: links)
  whatsapp: "+34 600 000 000",        // [PLACEHOLDER] — replace with real WhatsApp number
  whatsappDial: "+34600000000",       // [PLACEHOLDER] — same number, no spaces (for wa.me links)
  whatsappMessage: encodeURIComponent("Hola, me gustaría solicitar información sobre una reparación."),
  email: "info@gmreparaciones.es",    // [PLACEHOLDER] — replace with real email

  // ---- LEGAL PLACEHOLDERS ----
  nif: "B00000000",                   // [PLACEHOLDER] — NIF/CIF de la empresa
  razonSocial: "G&M Reparaciones S.L.", // [PLACEHOLDER] — razón social completa
  direccion: "Calle Ejemplo, 1",      // [PLACEHOLDER] — dirección fiscal completa
  codigoPostal: "47001",              // [PLACEHOLDER] — código postal
  localidad: "Valladolid",
  provincia: "Valladolid",
  pais: "España",
  registroMercantil: "[PLACEHOLDER] Inscrita en el Registro Mercantil de Valladolid",

  // ---- BUSINESS HOURS ----
  // HOURS: update if Saturday service added
  horaApertura: "09:00",
  horaCierre: "19:00",
  diasSemana: "Lunes a Viernes",

  // ---- SEO ----
  metaTitle: "G&M Reparaciones | Reparación Electrodomésticos Valladolid",
  metaDescription:
    "Reparación de electrodomésticos en Valladolid y provincia. Lavadoras, frigoríficos, hornos, lavavajillas, aires acondicionados y más. Presupuesto sin compromiso. Técnicos cualificados.",
  ogImage: "/og-image.jpg", // [PLACEHOLDER] — create a 1200x630px OG image

  // ---- SOCIAL ----
  // [PLACEHOLDER] — Google Business Profile review link.
  // Once you have your Google Business Profile, replace this URL and update
  // TestimoniosSection.tsx: swap the <span aria-disabled> back to a real <a> tag.
  // Example: "https://g.page/r/CdXXXXXXXXXXXXXX/review"
  googleReviewsUrl: "https://g.page/r/[PLACEHOLDER]/review",
  facebookUrl: "", // [PLACEHOLDER] — optional

  // ---- ANALYTICS ----
  // gtmId: "GTM-XXXXXXX", // [PLACEHOLDER] — Google Tag Manager ID (add only after cookie consent)
};

export const MUNICIPIOS = [
  "Valladolid",
  "Laguna de Duero",
  "Arroyo de la Encomienda",
  "Medina del Campo",
  "Tudela de Duero",
  "Simancas",
  "Cigales",
  "Tordesillas",
  "Olmedo",
  "Peñafiel",
  "Iscar",
  "Mojados",
  "Portillo",
  "Boecillo",
  "Aldeamayor de San Martín",
];

export const SERVICIOS = [
  {
    id: "lavadoras",
    nombre: "Lavadoras",
    temperatura: "neutral" as const,
    icon: "WashingMachine",
    problemas: ["No centrifuga", "Hace ruido excesivo", "No calienta agua", "No desagua", "Puerta bloqueada"],
    descripcion: "Reparamos todo tipo de averías en lavadoras de cualquier marca. Diagnóstico en domicilio y presupuesto sin compromiso.",
    keywords: "reparación lavadoras Valladolid",
  },
  {
    id: "frigorifico",
    nombre: "Frigoríficos",
    temperatura: "frio" as const,
    icon: "Thermometer",
    problemas: ["No enfría", "Hace hielo en exceso", "Ruido del compresor", "Pierde agua", "No arranca"],
    descripcion: "Técnicos especializados en frigoríficos y congeladores. Diagnóstico rápido y reparación el mismo día cuando es posible.",
    keywords: "reparación frigorífico Valladolid",
  },
  {
    id: "hornos",
    nombre: "Hornos",
    temperatura: "calor" as const,
    icon: "Fire",
    problemas: ["No calienta", "Temperatura incorrecta", "Ventilador averiado", "Resistencia quemada", "Display no funciona"],
    descripcion: "Reparación de hornos eléctricos y de gas de todas las marcas. Presupuesto sin coste de desplazamiento en Valladolid.",
    keywords: "reparación horno Valladolid",
  },
  {
    id: "lavavajillas",
    nombre: "Lavavajillas",
    temperatura: "neutral" as const,
    icon: "Drop",
    problemas: ["No lava bien", "Pierde agua", "No desagua", "Hace ruido", "No calienta el agua"],
    descripcion: "Servicio técnico de lavavajillas en Valladolid. Reparamos en domicilio con piezas de recambio originales.",
    keywords: "reparación lavavajillas Valladolid",
  },
  {
    id: "vitroceramica",
    nombre: "Vitrocerámica e Inducción",
    temperatura: "calor" as const,
    icon: "Lightning",
    problemas: ["No enciende", "No calienta zonas", "Error en pantalla", "Cristal roto", "Quemadores sin respuesta"],
    descripcion: "Reparación de vitrocerámicas y placas de inducción de todas las marcas. Técnicos con formación específica.",
    keywords: "reparación vitrocerámica Valladolid",
  },
  {
    id: "campanas",
    nombre: "Campanas Extractoras",
    temperatura: "calor" as const,
    icon: "Wind",
    problemas: ["Motor averiado", "No extrae", "Luz no funciona", "Ruido excesivo", "Filtros obstruidos"],
    descripcion: "Revisión y reparación de campanas extractoras. Limpieza, sustitución de motores y componentes eléctricos.",
    keywords: "reparación campana extractora Valladolid",
  },
  {
    id: "calentadores",
    nombre: "Calentadores y Termos",
    temperatura: "calor" as const,
    icon: "Flame",
    problemas: ["Agua fría", "No enciende el piloto", "Pérdida de agua", "Termopar defectuoso", "Calentamiento lento"],
    descripcion: "Reparación de calentadores de gas y termos eléctricos. Servicio urgente disponible para averías sin agua caliente.",
    keywords: "reparación calentador Valladolid",
  },
  {
    id: "aires",
    nombre: "Aires Acondicionados",
    temperatura: "frio" as const,
    icon: "Snowflake",
    problemas: ["No enfría / no calienta", "Pierde agua", "No arranca", "Mal olor", "Mando a distancia sin respuesta"],
    descripcion: "Mantenimiento y reparación de equipos de climatización. Instalación de recambios originales con garantía.",
    keywords: "reparación aire acondicionado Valladolid",
  },
];

export const PASOS_PROCESO = [
  {
    numero: 1,
    titulo: "Llámanos o escríbenos",
    descripcion: "Contacta por teléfono o WhatsApp. Te atendemos en horario de oficina y acordamos la visita en el momento que mejor te venga.",
    temperatura: "frio" as const,
  },
  {
    numero: 2,
    titulo: "Acudimos a tu domicilio",
    descripcion: "Nuestro técnico se desplaza a tu hogar en Valladolid o provincia. Sin costes ocultos de desplazamiento dentro de la zona.",
    temperatura: "calor" as const,
  },
  {
    numero: 3,
    titulo: "Diagnóstico y presupuesto",
    descripcion: "El técnico diagnostica la avería y te ofrece un presupuesto claro sin compromiso. Tú decides si continuar.",
    temperatura: "frio" as const,
  },
  {
    numero: 4,
    titulo: "Reparación con garantía",
    descripcion: "Si aceptas el presupuesto, reparamos en el acto siempre que sea posible. Todos los trabajos incluyen garantía por escrito.",
    temperatura: "calor" as const,
  },
];

export const TESTIMONIOS = [
  {
    nombre: "Carmen Rodríguez",
    localidad: "Valladolid",
    texto: "Mi lavadora dejó de centrifugar un viernes. Me llamaron al poco de contactar y vinieron el lunes por la mañana. En dos horas estaba reparada. Muy profesionales y el precio muy razonable.",
    valoracion: 5,
    servicio: "Lavadora",
  },
  {
    nombre: "Miguel Fernández",
    localidad: "Laguna de Duero",
    texto: "El frigorífico no enfriaba bien desde hacía semanas. Vinieron a casa, diagnosticaron el problema y me dieron presupuesto antes de empezar. Sin sorpresas en la factura final. Lo recomiendo.",
    valoracion: 5,
    servicio: "Frigorífico",
  },
  {
    nombre: "Ana García",
    localidad: "Arroyo de la Encomienda",
    texto: "Llamé porque el calentador no encendía y quedamos para el día siguiente. Rapidez, amabilidad y explicaron todo lo que hacían. Desde entonces lo recomiendo a familia y vecinos.",
    valoracion: 5,
    servicio: "Calentador",
  },
  {
    nombre: "Roberto Martínez",
    localidad: "Valladolid",
    texto: "El lavavajillas perdía agua. El técnico llegó puntual, encontró el problema enseguida y lo solucionó con recambio original. Lleva meses funcionando perfecto. Muy satisfecho.",
    valoracion: 5,
    servicio: "Lavavajillas",
  },
];

export const FAQ_ITEMS = [
  {
    pregunta: "¿Cuánto cuesta la visita del técnico?",
    respuesta: "El desplazamiento dentro de Valladolid capital es gratuito. Para municipios de la provincia se aplica una tarifa mínima según la distancia. Consulta sin compromiso.",
  },
  {
    pregunta: "¿Cuánto tiempo tarda la reparación?",
    respuesta: "La mayoría de las reparaciones se realizan en la misma visita, en 1-2 horas. Si se necesita un recambio específico, solemos tenerlo disponible en 24-48 horas.",
  },
  {
    pregunta: "¿Ofrecen garantía en las reparaciones?",
    respuesta: "Sí. Todas las reparaciones incluyen garantía por escrito sobre la mano de obra y las piezas sustituidas. Consulta el plazo exacto según el tipo de avería.",
  },
  {
    pregunta: "¿Reparan todas las marcas de electrodomésticos?",
    respuesta: "Reparamos electrodomésticos multimarca: Bosch, Balay, Siemens, Whirlpool, Samsung, LG, AEG, Zanussi, Electrolux, Beko, Indesit, Fagor y muchas más.",
  },
  {
    pregunta: "¿Trabajan en sábados o festivos?",
    respuesta: "Nuestro horario habitual es de lunes a viernes de 09:00 a 19:00. Para situaciones urgentes fuera de horario, puedes escribirnos por WhatsApp y valoramos la disponibilidad.",
  },
  {
    pregunta: "¿A qué municipios de la provincia dan servicio?",
    respuesta: "Cubrimos Valladolid capital y toda la provincia: Laguna de Duero, Arroyo de la Encomienda, Medina del Campo, Tudela de Duero, Simancas, Cigales, Tordesillas, Olmedo, Peñafiel y más. Consulta si tu localidad está incluida.",
  },
  {
    pregunta: "¿Puedo obtener un presupuesto por teléfono o WhatsApp?",
    respuesta: "Para muchas averías podemos orientar el coste aproximado antes de la visita. En la visita domiciliaria el técnico realiza el diagnóstico y confirma el presupuesto definitivo, siempre sin compromiso.",
  },
  {
    pregunta: "¿Qué ocurre si mi electrodoméstico no tiene reparación?",
    respuesta: "Si el diagnóstico determina que la reparación no es viable o el coste supera el valor del aparato, te lo comunicamos con transparencia. Solo se cobra el desplazamiento si así se acordó en la consulta inicial.",
  },
];
