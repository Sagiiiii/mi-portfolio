export interface GithubUrl {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  shortDesc: string;
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
    technologies: ["MEAN Stack", "MongoDB", "SQLAlchemy", "REST API", "NodeJS"],
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
    technologies: ["Python", "Pandas", "Scikit-learn", "ARIMA", "Random Forest", "Matplotlib", "Plotly", "MongoDB"],
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
    technologies: ["Flutter", "Dart", "Android", "iOS", "C++", "CMake"],
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
    technologies: ["Python", "Flask", "Bootstrap 5", "Jinja2", "CSS", "JavaScript"],
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
    technologies: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "Chart.js", "JavaScript"],
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
    technologies: ["Astro", "TypeScript", "Tailwind CSS"],
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
    shortDesc: "Portfolio personal rediseñado y migrado a Astro con Tailwind CSS v4. Tema oscuro fox, single-page, deploy automático en Vercel.",
    technologies: ["Astro", "Tailwind CSS", "TypeScript", "React", "Vercel"],
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
