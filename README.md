# Obregon Design: sitio web

Sitio web de Obregon Design (arquitectura y diseño, Hermosillo y McAllen). Español en `/` e inglés en `/en/`.

Hecho con [Astro](https://astro.build) como sitio estático, pensado para publicarse en Netlify.

## Dónde está cada cosa

- `src/data/site.ts`: correo, WhatsApp y oficinas. **El WhatsApp y el correo son datos de ejemplo por confirmar.**
- `src/data/projects.ts`: ficha y textos de cada proyecto (español e inglés).
- `src/assets/projects/<proyecto>/`: imágenes de cada proyecto (`01.jpg` es la principal).
- `src/assets/logo/`: logo vectorizado (símbolo y nombre).
- `src/views/`: las páginas (Inicio, Proyectos, Proyecto, Nosotros, Servicios, Contacto).
- `src/i18n/ui.ts`: textos comunes y rutas en ambos idiomas.
- `docs/plan.md`: plan original del sitio.

## Comandos

```
npm install
npm run dev      # vista local
npm run build    # genera el sitio en dist/
```

## Publicación

Netlify lee `netlify.toml` (comando `npm run build`, carpeta `dist`). El formulario de contacto usa Netlify Forms.
