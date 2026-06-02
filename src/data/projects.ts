export interface GithubUrl {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  technologies: string[];
  githubUrls: GithubUrl[];
  liveUrl: string;
  imageUrl: string;
  categories: string[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-commerce Soreus Motors — Frontend & Admin",
    shortDesc: "Interfaz de tienda online y panel administrativo para gestión de productos, pedidos y clientes de una distribuidora automotriz.",
    description: `Desarrollo del frontend y módulo administrativo del sistema e-commerce de Soreus Motors E.I.R.L. La tienda presenta un catálogo visual de productos con filtros por categoría, carrito de compras interactivo y flujo de checkout. El panel admin permite gestionar el inventario, revisar pedidos entrantes, actualizar estados de entrega y administrar la base de clientes mediante un módulo CRM integrado.

Diseño responsive con Bootstrap orientado a una experiencia de usuario fluida tanto en desktop como en móvil. El sistema maneja sesiones de usuario, roles de administrador y notificaciones en tiempo real.

Funcionalidades principales:
• Catálogo con filtros dinámicos por categoría y precio
• Carrito de compras persistente
• Panel administrativo con dashboard de métricas
• Gestión de inventario en tiempo real
• Módulo CRM para seguimiento de clientes
• Reportes de ventas exportables`,
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "NodeJS", "MEAN Stack"],
    githubUrls: [
      { label: "Tienda", url: "https://github.com/Sagiiiii/ecommerce_tienda" },
      { label: "Admin", url: "https://github.com/Sagiiiii/ecommerce_admin" },
    ],
    liveUrl: "https://ecommercesoreustienda.netlify.app",
    imageUrl: "/img/soreus.jpeg",
    categories: ["frontend", "web"],
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Soreus Motors — Backend & API",
    shortDesc: "Motor del servidor, API REST y base de datos del sistema e-commerce para distribuidora automotriz, construido con Python y Flask.",
    description: `Desarrollo del backend completo del sistema e-commerce de Soreus Motors E.I.R.L. Incluye una API REST construida con Node.js y Express que expone endpoints para productos, pedidos, usuarios y reportes.

La capa de datos usa MongoDB con modelos optimizados para consultas de inventario y trazabilidad de pedidos. Implementa autenticación con JWT, validación de datos en servidor, control de stock en tiempo real y generación de reportes exportables.

Arquitectura modular con separación clara de responsabilidades para facilitar el mantenimiento y escalabilidad del sistema.

Características técnicas:
• API REST con autenticación JWT
• Base de datos MongoDB con índices optimizados
• Control de stock con transacciones atómicas
• Middleware de validación y manejo de errores
• Generación de reportes en PDF/Excel
• Logs de auditoría para todas las operaciones críticas`,
    technologies: ["MEAN Stack", "MongoDB", "Express", "REST API", "NodeJS", "JWT"],
    githubUrls: [
      { label: "Backend", url: "https://github.com/Sagiiiii/eccommerce_back" },
    ],
    liveUrl: "https://ecommercesoreusadmin.netlify.app",
    imageUrl: "/img/soreus_back.jpg",
    categories: ["backend", "web"],
    featured: false,
  },
  {
    id: 3,
    title: "Análisis Predictivo — Soreus Motors Capstone",
    shortDesc: "Modelo de ciencia de datos con ARIMA, Regresión Lineal y Random Forest para optimizar inventario y predecir ventas en una distribuidora automotriz.",
    description: `Proyecto Capstone de Data Science desarrollado para SOREUS MOTORS E.I.R.L., empresa del sector automotriz en Huancayo, Perú. El objetivo fue transformar los datos generados por su sistema e-commerce MEAN (2024) en conocimiento estratégico para optimizar decisiones comerciales.

Se aplicó la metodología CRISP-DM con tres modelos predictivos:

• ARIMA (2,1,1): Series temporales para pronóstico de sobrestock mensual. Proyectó ~6,500 unidades de sobrestock promedio para 2025, con pico en marzo.

• Regresión Lineal Múltiple (RLM): R² = 0.75, identificó el inventario como variable principal. Reducción proyectada del 40% en costos de sobrestock (de S/ 15.3M a S/ 9.1M).

• Random Forest (RF): Mejor modelo con R² = 0.9995, MAE = 0.01. Reducción del 70% en sobrestock (ahorro potencial de S/ 10M+ anuales).

El análisis identificó que las categorías 'Otros', 'Repuestos Técnicos' y 'Equipamiento Personal' concentran el mayor sobrestock en días pico. Se generaron dashboards interactivos con Matplotlib, Seaborn y Plotly para facilitar la toma de decisiones gerenciales.`,
    technologies: ["Python", "Pandas", "Scikit-learn", "ARIMA", "Random Forest", "Matplotlib", "Seaborn", "Plotly", "MongoDB", "Jupyter Notebook"],
    githubUrls: [
      { label: "Repositorio", url: "https://github.com/Sagiiiii/Analsis-Soreus-Motors-CAPSTOM-PROJECT" },
    ],
    liveUrl: "",
    imageUrl: "/img/datascience.jpg",
    categories: ["data"],
    featured: true,
  },
  {
    id: 4,
    title: "Flutter Components — App Multiplataforma",
    shortDesc: "Colección de componentes reutilizables desarrollados en Flutter para aplicaciones multiplataforma: Android, iOS, Web, Windows, Linux y macOS.",
    description: `Proyecto de desarrollo multiplataforma construido con Flutter y Dart, orientado a la creación y documentación de componentes reutilizables para aplicaciones modernas. El repositorio incluye soporte nativo para 6 plataformas simultáneas desde una sola base de código.

Plataformas soportadas:
• Android — aplicación nativa compilada con Flutter
• iOS — compatible con dispositivos Apple
• Web — exportable como aplicación web progresiva (PWA)
• Windows — aplicación de escritorio nativa
• Linux — soporte para entornos de escritorio Linux
• macOS — compatible con el ecosistema Apple Desktop

Stack tecnológico del repositorio:
• Dart 63.1% — lenguaje principal de Flutter
• C++ 30.7% — capas nativas de escritorio
• CMake 13.5% — sistema de compilación multiplataforma
• HTML / Swift / C — capas de integración nativa por plataforma

El proyecto sirve como base de arranque (starter kit) para nuevos proyectos Flutter, incluyendo estructura de carpetas estándar, configuración de assets, análisis estático con analysis_options.yaml y gestión de dependencias con pubspec.`,
    technologies: ["Flutter", "Dart", "Android", "iOS", "Web", "Windows", "C++", "CMake"],
    githubUrls: [
      { label: "Repositorio", url: "https://github.com/Sagiiiii/flutter-components" },
    ],
    liveUrl: "",
    imageUrl: "/img/mobile_flutter.jpg",
    categories: ["mobile"],
    featured: false,
  },
  {
    id: 5,
    title: "Sagiii.dev — Portfolio Python/Flask",
    shortDesc: "Portfolio personal desarrollado con Python + Flask, tema oscuro naranja fox. Muestra proyectos, CV y formulario de contacto.",
    description: `Portfolio personal diseñado y desarrollado desde cero con Python y Flask, implementando un tema oscuro con paleta de colores fox/naranja personalizada.

Este sitio fue construido con:
• Arquitectura Flask con Blueprints para separación de responsabilidades
• Bootstrap 5 con Dark Mode nativo + CSS personalizado (variables fox)
• Templates Jinja2 con herencia de plantillas (base.html)
• Proyectos gestionados desde archivo Python sin base de datos
• Formulario de contacto con Flask-Mail + Gmail SMTP
• Preloader animado con sessionStorage para primera visita
• Diseño responsive adaptado a móvil, tablet y desktop
• Imagen de perfil circular con efecto glow pulsante naranja
• Filtros de proyectos por categoría: Web, Frontend, Backend, Mobile, Data Science

Páginas incluidas:
• Inicio — Hero con foto, badges de tecnologías y proyectos destacados
• Proyectos — Galería con filtros y detalle de cada proyecto
• Sobre mí — CV completo, experiencia profesional y formación académica
• Contacto — Formulario funcional con envío directo a Gmail
• Próximamente — Página para proyectos en desarrollo`,
    technologies: ["Python", "Flask", "Bootstrap 5", "Jinja2", "CSS", "JavaScript", "Flask-Mail", "Git"],
    githubUrls: [
      { label: "Repositorio", url: "https://github.com/Sagiiiii/sagiiiii-portfolio" },
    ],
    liveUrl: "https://sagiiiii-portfolio.onrender.com",
    imageUrl: "/img/FOX2.jpg",
    categories: ["web", "frontend"],
    featured: true,
  },
  {
    id: 6,
    title: "Dashboard de Análisis de Datos",
    shortDesc: "Web app que analiza CSV/Excel automáticamente: gráficos, estadísticas descriptivas y predicciones con regresión lineal.",
    description: `Aplicación web de ciencia de datos desarrollada con Python y Flask que permite analizar cualquier archivo CSV o Excel sin escribir código, generando resultados en segundos.

Desarrollado con:
• Backend Flask con Blueprint y arquitectura modular
• Pandas + NumPy para carga, limpieza y análisis estadístico de datos
• Scikit-learn (LinearRegression) para predicción de tendencias con R²
• Chart.js 4 para gráficos de líneas interactivos y responsivos
• Detección automática de columnas de fecha para eje temporal real
• Drag & Drop de archivos con feedback visual en tiempo real
• API REST interna (Flask JSON) que separa análisis del frontend
• Deploy en Render con Gunicorn como servidor WSGI de producción

Funcionalidades principales:
• Subida de CSV o Excel (hasta 16 MB) por clic o arrastre
• Gráficos automáticos de todas las columnas numéricas (hasta 5 series)
• Estadísticas: media, mediana, varianza, desviación estándar, mín/máx
• Predicción de próximos 5 valores con indicador de tendencia
• Coeficiente R² para evaluar la confiabilidad de la predicción
• Compatible con datos de ventas, salud, educación, clima y más`,
    technologies: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "Chart.js", "JavaScript", "HTML", "CSS", "Render"],
    githubUrls: [
      { label: "Repositorio", url: "https://github.com/Sagiiiii/dashboard-analisis-datos" },
    ],
    liveUrl: "https://dashboard-analisis-datos.onrender.com/",
    imageUrl: "/img/dashboard.jpg",
    categories: ["web", "backend", "data"],
    featured: true,
  },
  {
    id: 7,
    title: "astrobuild.tips",
    shortDesc: "Blog y plataforma de tips, recursos y mejores prácticas sobre el framework Astro para desarrolladores web.",
    description: `Plataforma de contenido técnico dedicada al ecosistema de Astro. Reúne tips, tutoriales, snippets y recursos para desarrolladores que trabajan con el framework Astro.

El sitio funciona como referencia rápida para patrones comunes en Astro: rutas dinámicas, colecciones de contenido, integraciones, optimización de imágenes, SSR vs SSG y mejores prácticas de performance.

Contenido cubierto:
• Configuración y setup de proyectos Astro
• Integración con frameworks UI (React, Vue, Svelte)
• Optimización de Core Web Vitals con Astro
• Despliegue en Vercel, Netlify y otros providers
• Uso de Tailwind CSS y otros sistemas de estilos
• Colecciones de contenido en Markdown/MDX`,
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Markdown"],
    githubUrls: [
      { label: "Repositorio", url: "https://github.com/Sagiiiii/astrobuild.tips" },
    ],
    liveUrl: "",
    imageUrl: "",
    categories: ["web", "frontend"],
    featured: false,
  },
  {
    id: 8,
    title: "EcommerceMonteroStore",
    shortDesc: "Tienda e-commerce B2C desarrollada en JavaScript con catálogo de productos, carrito de compras y flujo de checkout.",
    description: `Tienda e-commerce B2C desarrollada en JavaScript vanilla para Montero Store. Implementa un flujo completo de compra desde el catálogo hasta el checkout, sin dependencias de frameworks externos.

Características del proyecto:
• Catálogo de productos con filtros por categoría
• Carrito de compras con persistencia en localStorage
• Cálculo dinámico de totales y descuentos
• Flujo de checkout con validación de formularios
• Diseño responsive mobile-first
• Animaciones CSS para mejorar la experiencia de usuario

El proyecto demuestra dominio de JavaScript puro para manipulación del DOM, gestión de estado local y patrones de diseño sin frameworks.`,
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrls: [
      { label: "Repositorio", url: "https://github.com/Sagiiiii/EcommerceMonteroStore" },
    ],
    liveUrl: "",
    imageUrl: "/img/ecommerce.png",
    categories: ["web", "frontend"],
    featured: false,
  },
  {
    id: 9,
    title: "Helpdesk Laravel",
    shortDesc: "Sistema de tickets de soporte TI con Laravel. Gestión de incidencias, asignación de agentes y seguimiento de resolución.",
    description: `Sistema de helpdesk desarrollado con Laravel para gestión de tickets de soporte técnico. Permite a los usuarios reportar incidencias y a los agentes gestionarlas hasta su resolución.

Funcionalidades del sistema:
• Creación y seguimiento de tickets de soporte
• Clasificación por prioridad (baja, media, alta, crítica)
• Asignación de tickets a agentes específicos
• Historial completo de interacciones por ticket
• Notificaciones por email en cambios de estado
• Dashboard con métricas de tiempo de respuesta
• Panel de administración para gestión de usuarios y roles
• Reportes de rendimiento del equipo de soporte

Tecnologías utilizadas:
• Laravel con arquitectura MVC
• Blade templates para las vistas
• MySQL para la base de datos relacional
• Bootstrap para el diseño responsive
• Laravel Mail para notificaciones`,
    technologies: ["Laravel", "PHP", "Blade", "MySQL", "Bootstrap"],
    githubUrls: [
      { label: "Repositorio", url: "https://github.com/Sagiiiii/helpdesk-laravel" },
    ],
    liveUrl: "",
    imageUrl: "",
    categories: ["web", "backend"],
    featured: false,
  },
  {
    id: 10,
    title: "AuthFlow Privacy",
    shortDesc: "Página de política de privacidad para flujos de autenticación. Diseño limpio y estructura legal clara.",
    description: `Página de política de privacidad diseñada para acompañar flujos de autenticación de aplicaciones web y móviles. Provee la estructura legal necesaria para el manejo de datos de usuario conforme a regulaciones de privacidad.

El documento cubre:
• Recopilación y uso de datos personales
• Política de cookies y almacenamiento local
• Derechos del usuario sobre sus datos
• Procedimientos de eliminación de cuenta
• Contacto para solicitudes de privacidad
• Actualizaciones y vigencia de la política

Diseño limpio, tipografía legible y estructura semántica HTML para máxima accesibilidad y compatibilidad con lectores de pantalla.`,
    technologies: ["HTML", "CSS"],
    githubUrls: [
      { label: "Repositorio", url: "https://github.com/Sagiiiii/authflow-privacy" },
    ],
    liveUrl: "",
    imageUrl: "",
    categories: ["web", "frontend"],
    featured: false,
  },
  {
    id: 11,
    title: "Sagiii.dev — Portfolio Astro",
    shortDesc: "Portfolio personal rediseñado y migrado a Astro con Tailwind CSS v4. Tema oscuro fox, multi-página con rutas, deploy automático en Vercel.",
    description: `Portfolio personal completamente rediseñado y migrado desde Python/Flask a Astro con Tailwind CSS v4. Este mismo sitio que estás viendo fue construido con tecnologías modernas de frontend.

Stack tecnológico:
• Astro v6 con output hybrid (estático + endpoints de servidor)
• Tailwind CSS v4 con @tailwindcss/vite
• TypeScript para los datos y componentes
• React para componentes interactivos
• Vercel para el deploy con CI/CD automático

Características del sitio:
• Multi-página con rutas separadas (/sobre-mi, /proyectos, /contacto)
• Páginas de detalle individuales por proyecto
• Formulario de contacto propio con Nodemailer + Gmail SMTP
• Tema oscuro fox/naranja idéntico al diseño original
• Preloader animado con sessionStorage
• Filtros de proyectos por categoría con JavaScript vanilla
• Timeline de experiencia y formación académica
• Responsive completo: mobile, tablet, desktop
• Deploy automático en Vercel con cada push a main`,
    technologies: ["Astro", "Tailwind CSS v4", "TypeScript", "React", "Nodemailer", "Vercel"],
    githubUrls: [
      { label: "Repositorio", url: "https://github.com/Sagiiiii/mi-portfolio" },
    ],
    liveUrl: "https://mi-portfolio-rho-seven.vercel.app",
    imageUrl: "",
    categories: ["web", "frontend"],
    featured: true,
  },
];

export function getFeatured(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getByCategory(cat: string): Project[] {
  if (!cat) return PROJECTS;
  return PROJECTS.filter((p) => p.categories.includes(cat));
}
