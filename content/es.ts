import type { Content } from "./types";


export const es: Content = {
  htmlLang: "es",
  meta: {
    title: "Russell Nunez | Ingeniero de Software Full Stack Senior",
    description:
      "Ingeniero de software full stack senior con Node.js, TypeScript, React, React Native y Python. Aplicaciones de alta disponibilidad, microservicios y soluciones con IA para CVC, Ambev y TOTVS.",
    ogTitle: "Russell Antonio Nunez Godoy",
    ogSubtitle: "Ingeniero de Software Full Stack Senior",
  },
  nav: {
    about: "Sobre mí",
    impact: "Impacto",
    projects: "Proyectos",
    experience: "Experiencia",
    stack: "Tecnologías",
    contact: "Contacto",
    menu: "Navegación principal",
    skip: "Ir al contenido",
  },
  ui: {
    theme: "Cambiar tema",
    language: "Idioma",
    back: "Volver a proyectos",
    next: "Siguiente proyecto",
    demo: "Ver demo",
    tryIt: "Pruébalo",
    tour: "Tour en video",
    gallery: "Imágenes",
    code: "Ver código",
    caseStudy: "Caso de estudio",
    problem: "Problema",
    solution: "Solución",
    impact: "Impacto",
    stack: "Stack",
  },
  hero: {
    title: "Ingeniero de Software Full Stack Senior",
    tagline: "Aplicaciones de alta disponibilidad y soluciones con IA, con resultados que se miden en números.",
    location: "Araraquara, SP, Brasil · Disponible para remoto e híbrido",
    resume: "Descargar currículum",
    contact: "Ponte en contacto",
  },
  about: {
    heading: "Sobre mí",
    paragraphs: [
      "Soy ingeniero de software full stack senior. Construyo aplicaciones de alta disponibilidad, APIs, microservicios e integraciones complejas con Node.js, TypeScript, React, React Native y Python.",
      "En los últimos años llevé soluciones con IA a producción: un chatbot de soporte que redujo 40% de los tickets, agentes de IA en un ERP que recortaron 60% del costo de soporte y una red neuronal que aumentó 20% la productividad de una operación minera.",
      "Trabajé en proyectos para CVC, Ambev y TOTVS y ejercí el liderazgo técnico. Me gustan las entregas que se miden en números y el código que el próximo desarrollador puede mantener.",
    ],
  },
  companies: {
    label: "He entregado para",
    names: ["CVC", "Ambev", "TOTVS", "Capgemini"],
  },
  impact: {
    heading: "Impacto",
    items: [
      { value: "+20%", label: "de productividad en una operación minera, con una red neuronal para asignar la flota" },
      { value: "-40%", label: "de tickets de soporte con un chatbot de IA" },
      { value: "-60%", label: "de costo de soporte con agentes de IA en un ERP" },
      { value: "-25%", label: "de costo de cloud tras reestructurar la base de datos" },
      { value: "30 → 10 min", label: "en el ciclo de validación y liberación del CI/CD" },
      { value: "-50%", label: "de tiempo de mantenimiento en puntos de venta, con limpieza de caché automatizada" },
      { value: "+15%", label: "de facturación en el piloto de IA de precios" },
    ],
  },
  projects: {
    heading: "Proyectos",
    viewCase: "Leer caso de estudio",
    items: {
      "casa-aurora": {
        title: "Casa Aurora: plano 3D interactivo",
        summary: "Casa de dos plantas con piscina y área gourmet, explorable en 3D directamente en el navegador.",
        metric: { value: "3D", label: "interactivo en el navegador" },
        problem: "Los planos en 2D dificultan ver proporciones, circulación y cómo se comporta la casa de día y de noche.",
        solution:
          "Una escena 3D en tiempo real con plantas removibles, cámaras por habitación, ciclo día/noche, luces, puertas y un tour guiado. Hecha con React, Three.js y React Three Fiber.",
        impact: ["Tour guiado por las habitaciones", "Alternancia de día y noche, plantas y fachada", "Funciona en el navegador, sin instalar"],
      },
      gfitpro: {
        title: "GFitPro: app de gimnasio para alumno y profesor",
        summary: "App móvil y web con entrenamientos, ranking, evaluaciones físicas, nutrición y facturas, con dos perfiles.",
        metric: { value: "2 perfiles", label: "alumno y profesor" },
        problem: "Los gimnasios suelen repartir entrenamiento, evaluación física, cobro y comunicación en herramientas distintas, y el alumno pierde el hilo de su progreso.",
        solution: "App en React Native con Expo que corre en iOS, Android y web. El alumno sigue entrenamientos, XP y ranking, evaluaciones con comparación entre fechas, nutrición, facturas y archivos. El profesor gestiona alumnos y registra evaluaciones. La autenticación es una API NestJS con Prisma y SQLite. La interfaz sigue un sistema de diseño propio, con tokens, tipografía condensada y componentes animados.",
        impact: ["Flujos completos de alumno y profesor, incluida nueva evaluación y comparación", "Sistema de diseño propio aplicado a todas las pantallas", "Login real contra API NestJS; el resto de los datos aún es simulado"],
        modules: [{ title: "Inicio", body: "Resumen del día con rango, racha y atajos a lo importante." }, { title: "Entrenamiento", body: "Ejercicios con series, carga, tiempo estimado y XP por sesión." }, { title: "Ranking y XP", body: "Niveles, logros y posición entre alumnos para mantener la motivación." }, { title: "Nutrición", body: "Calorías, macros, hidratación y comidas registradas, con meta diaria." }, { title: "Evaluación física", body: "Composición corporal, medidas y salud, explicadas en lenguaje simple." }, { title: "Comparar evaluaciones", body: "Elige dos fechas y mira la evolución de peso, grasa y músculo." }, { title: "Facturas", body: "Plan, vencimiento e historial de pagos con filtros por estado." }, { title: "Archivos", body: "Planes, exámenes y fotos de progreso organizados por categoría." }, { title: "Profesor: alumnos", body: "Lista de alumnos con búsqueda, filtros y alerta de reevaluación." }, { title: "Profesor: alumno", body: "Perfil del alumno, última evaluación y atajo para registrar una nueva." }],
      },
      "edit-ai": {
        title: "Edit AI: estudio de video con IA",
        summary: "Subtítulos, cortes, edición, portadas, traducción y limpieza de audio en un solo lugar, en tu PC.",
        metric: { value: "7", label: "herramientas de video" },
        problem: "Subtitular y editar videos para redes sociales exige varias herramientas, suscripciones y tiempo repitiendo los mismos pasos.",
        solution: "Un pipeline local con faster-whisper y FFmpeg, expuesto por una API FastAPI con jobs asíncronos e historial. El modo express usa Gemini para transcribir, corregir, traducir, sugerir cortes y generar portadas, con caché en Redis para no reprocesar ni gastar créditos. El subtítulo se quema en el MP4 con estilos listos. Front-end en React, Vite y Tailwind, y todo arranca con Docker Compose.",
        impact: ["Subtítulos quemados con estilos de caja, contorno, sombra y neón", "Edición automática que corta silencios y relleno, con transiciones", "Procesamiento local, con IA en la nube opcional"],
        modules: [{ title: "Subtitular", body: "Estilos listos de caja, contorno, sombra y neón, con vista previa vertical." }, { title: "Editar", body: "Corte inteligente de silencios y relleno, con agresividad y transiciones a elegir." }, { title: "Crear portada", body: "Portada 16:9 generada desde una escena del video, con frase y variaciones." }, { title: "Limpiar audio", body: "Quita ruido y normaliza el volumen en tu PC, con intensidad ajustable." }, { title: "Traducir subtítulos", body: "Traduce SRT línea a línea, manteniendo el tiempo de cada diálogo." }],
      },
      "fleet-optimization": {
        title: "Red Neuronal para Optimización de Flota",
        summary: "Asignación de camiones y equipos en una operación minera con una red neuronal.",
        metric: { value: "+20%", label: "de productividad" },
        problem:
          "En las operaciones mineras, combinar camiones y equipos de forma eficiente impacta directamente la productividad y el consumo de combustible.",
        solution:
          "Una red neuronal que combina camiones y equipos, apoyada en pipelines de datos en Docker y ejecutada en AWS y Azure. Forma parte de la plataforma de monitoreo operacional de HOP AI.",
        impact: ["+20% de productividad", "-15% de consumo de combustible"],
      },
      "support-chatbot": {
        title: "Chatbot de Soporte con IA",
        summary: "Soporte automatizado con un LLM, integrado a las APIs de la plataforma.",
        metric: { value: "-40%", label: "de tickets" },
        problem: "El volumen de tickets de soporte presionaba al equipo y al costo de atención.",
        solution:
          "Un chatbot de soporte basado en un LLM, con APIs en Node.js y TypeScript y datos en PostgreSQL. Desarrollado en Cortex IA.",
        impact: ["-40% de tickets de soporte"],
      },
      "erp-ai-agents": {
        title: "ERP con Agentes de IA",
        summary: "Agentes de IA para finanzas, RR. HH. y contabilidad en un ERP para pequeñas empresas.",
        metric: { value: "-60%", label: "de costo de soporte" },
        problem: "Las pequeñas empresas dependen de soporte humano para rutinas de finanzas, RR. HH. y contabilidad.",
        solution:
          "Agentes de IA integrados al ERP, que atienden las áreas de finanzas, RR. HH. y contabilidad. Desarrollado en Cortex IA.",
        impact: ["-60% de costo de soporte en finanzas, RR. HH. y contabilidad"],
      },
      "dynamic-pricing": {
        title: "IA de Precios Dinámicos",
        summary: "Precios ajustados por estacionalidad, clima y mercado.",
        metric: { value: "+15%", label: "de facturación en el piloto" },
        problem: "Definir precios que acompañen la estacionalidad, el clima y los movimientos del mercado.",
        solution:
          "Un modelo de IA de precios que considera estacionalidad, clima y mercado. Desarrollado en Cortex IA.",
        impact: ["+15% de facturación en el piloto"],
      },
      "fgts-automation": {
        title: "Automatización de Documentos y FGTS a Gran Escala",
        summary: "Automatización en Python para un caso con unos 16 mil colaboradores.",
        metric: { value: "~1 semana", label: "para estructurar las evidencias" },
        problem:
          "Un caso con unos 16 mil colaboradores y R$ 10 millones de exposición exigía procesar documentos y consultar el FGTS (fondo de indemnización brasileño) de cada persona en poco tiempo.",
        solution:
          "Automatización en Python para el procesamiento de documentos y la consulta de FGTS en Caixa, desarrollada en Grupo Provac.",
        impact: ["Evidencias estructuradas en alrededor de 1 semana", "Alcance de ~16 mil colaboradores y R$ 10 millones de exposición"],
      },
      "cicd-optimization": {
        title: "Optimización de Pipeline CI/CD",
        summary: "Pipeline de validación y liberación tres veces más corto.",
        metric: { value: "30 → 10 min", label: "por entrega" },
        problem: "El ciclo de validación y liberación tomaba cerca de 30 minutos y frenaba al equipo.",
        solution: "Reestructuración del pipeline de CI/CD, con Azure y Docker, realizada en Clarifiquei.",
        impact: ["Validación y liberación de 30 a 10 minutos"],
      },
    },
  },
  experience: {
    heading: "Experiencia",
    items: [
      {
        company: "OPAH IT",
        client: "cliente CVC",
        role: "Desarrollador Front-End Semi Senior",
        period: "Ago 2025 - Sep 2026",
        bullets: [
          "React y React Native en una plataforma de turismo de alto volumen.",
          "Búsqueda, reserva, pago y checkout, con foco en rendimiento y accesibilidad.",
          "Evolución del CI/CD del equipo.",
        ],
      },
      {
        company: "HOP AI",
        role: "Desarrollador Full Stack Senior",
        period: "Oct 2025 - May 2026",
        bullets: [
          "Monitoreo operacional para minería, con APIs y microservicios en Node.js, Python y SQL.",
          "Pipelines de datos en Docker, con AWS y Azure.",
          "Red neuronal para combinar camiones y equipos: +20% de productividad y -15% de combustible.",
        ],
      },
      {
        company: "Cortex IA",
        role: "Desarrollador Full Stack Senior",
        period: "Mar 2024 - May 2026",
        bullets: [
          "Chatbot de soporte con IA: -40% de tickets.",
          "ERP con agentes de IA: -60% de costo de soporte.",
          "IA de precios: +15% de facturación en el piloto. APIs en Node.js y TypeScript, PostgreSQL, MongoDB y AWS.",
        ],
      },
      {
        company: "Clarifiquei",
        role: "Ingeniero de Software II",
        period: "May 2025 - Dic 2025",
        bullets: [
          "Web y mobile con React, React Native y Node.",
          "CI/CD reducido de 30 a 10 minutos, con Azure y Docker.",
        ],
      },
      {
        company: "Rede Industrial",
        client: "cliente Ambev",
        role: "Tech Lead / Desarrollador Full Stack Senior",
        period: "Sep 2024 - Mar 2025",
        bullets: [
          "Liderazgo técnico en proyectos con Node.js, .NET, Python y SQL sobre Azure.",
          "Reestructuración de la base de datos: -25% de costo de cloud.",
        ],
      },
      {
        company: "Grupo Provac",
        role: "Desarrollador Full Stack Semi Senior",
        period: "Mar 2024 - Sep 2024",
        bullets: [
          "Automatización en Python para un caso con unos 16 mil colaboradores y R$ 10 millones de exposición.",
          "Procesamiento de documentos y consulta de FGTS en Caixa, con evidencias estructuradas en alrededor de 1 semana.",
        ],
      },
      {
        company: "TOTVS",
        role: "Analista de Sistemas Junior",
        period: "Ago 2023 - Mar 2024",
        bullets: [
          "SQL y PL/SQL.",
          "Automatización de la limpieza de caché en puntos de venta de 10 a 20 tiendas: -50% en el tiempo de mantenimiento.",
        ],
      },
      {
        company: "Capgemini",
        role: "Desarrollador Full Stack Junior",
        period: "Nov 2020 - Ago 2023",
        bullets: ["Proyectos corporativos de gran escala con .NET, Node.js, React, Python y SQL."],
      },
    ],
  },
  stack: {
    heading: "Tecnologías",
    groups: {
      languages: "Lenguajes",
      frontend: "Frontend",
      backend: "Backend",
      data: "Bases de Datos",
      cloud: "Cloud & DevOps",
      architecture: "Arquitectura y prácticas",
    },
  },
  education: {
    heading: "Formación y Certificaciones",
    degreesLabel: "Formación",
    degrees: [
      { name: "Ingeniería de Software", school: "Estácio", period: "previsto 2028" },
      { name: "Análisis y Desarrollo de Sistemas", school: "UCA", period: "previsto 2026" },
    ],
    certsLabel: "Certificaciones",
    certs: [
      { name: "Computación en la Nube", issuer: "IBM" },
      { name: "Arquitectura de Software y Diseño de Sistemas Modernos" },
      { name: "Gestión Ágil con Scrum, Kanban y Agile Escalado" },
      { name: "HTML5 y CSS3", issuer: "University of Michigan" },
      { name: "HTML, CSS y JavaScript", issuer: "Johns Hopkins University" },
    ],
  },
  languages: {
    heading: "Idiomas",
    items: [
      { name: "Español", level: "nativo" },
      { name: "Portugués", level: "fluido" },
      { name: "Inglés", level: "intermedio" },
    ],
  },
  contact: {
    heading: "¿Hablamos?",
    text: "Estoy abierto a oportunidades como ingeniero full stack senior, en modalidad remota o híbrida.",
    email: "Enviar correo",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    built: "Hecho con Next.js y TypeScript.",
  },
};
