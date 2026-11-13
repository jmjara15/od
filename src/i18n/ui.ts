import type { Lang } from '../data/site';
import { site } from '../data/site';

export const routes = {
  home: { es: '/', en: '/en/' },
  projects: { es: '/proyectos/', en: '/en/projects/' },
  about: { es: '/nosotros/', en: '/en/about/' },
  services: { es: '/servicios/', en: '/en/services/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
  thanks: { es: '/gracias/', en: '/en/thanks/' },
} as const;

export type PageKey = keyof typeof routes;

export const projectUrl = (lang: Lang, slug: string) => `${routes.projects[lang]}${slug}/`;

export const whatsappUrl = (lang: Lang) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(ui[lang].whatsappMessage)}`;

export const ui = {
  es: {
    nav: { projects: 'Proyectos', about: 'Nosotros', services: 'Servicios', contact: 'Contacto' },
    menu: 'Menú',
    close: 'Cerrar',
    tagline: 'Arquitectura y diseño',
    whatsappMessage: 'Hola, me interesa platicar sobre un proyecto con Obregon Design.',
    whatsappLabel: 'Escríbenos por WhatsApp',
    footerLine: 'Arquitectura y diseño en México y Estados Unidos.',
    rights: 'Todos los derechos reservados.',
    viewProject: 'Ver proyecto',
    allProjects: 'Ver todos los proyectos',
    nextProject: 'Siguiente proyecto',
    talk: 'Hablemos de tu proyecto',
    typology: {
      residencial: 'Residencial',
      comercial: 'Comercial',
      hospitalidad: 'Hospitalidad y eventos',
      interiores: 'Interiores',
      industrial: 'Industrial',
      urbano: 'Urbano',
    },
    country: { mx: 'México', us: 'Estados Unidos' },
    sheet: { location: 'Ubicación', year: 'Año', typology: 'Tipología', scope: 'Alcance' },
    filters: { all: 'Todos', typology: 'Tipología', country: 'País', grid: 'Cuadrícula', list: 'Lista', none: 'No hay proyectos con estos filtros.' },
  },
  en: {
    nav: { projects: 'Projects', about: 'About', services: 'Services', contact: 'Contact' },
    menu: 'Menu',
    close: 'Close',
    tagline: 'Architecture and design',
    whatsappMessage: 'Hello, I would like to talk about a project with Obregon Design.',
    whatsappLabel: 'Message us on WhatsApp',
    footerLine: 'Architecture and design in Mexico and the United States.',
    rights: 'All rights reserved.',
    viewProject: 'View project',
    allProjects: 'View all projects',
    nextProject: 'Next project',
    talk: "Let's talk about your project",
    typology: {
      residencial: 'Residential',
      comercial: 'Commercial',
      hospitalidad: 'Hospitality and events',
      interiores: 'Interiors',
      industrial: 'Industrial',
      urbano: 'Urban',
    },
    country: { mx: 'Mexico', us: 'United States' },
    sheet: { location: 'Location', year: 'Year', typology: 'Typology', scope: 'Scope' },
    filters: { all: 'All', typology: 'Typology', country: 'Country', grid: 'Grid', list: 'List', none: 'No projects match these filters.' },
  },
} as const;
