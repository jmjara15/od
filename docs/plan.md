# Plan: página web de Obregon Design (borrador v1, 13 nov 2026)

Estado: investigación y plan. No se ha construido nada. La construcción se hará con Fable.
Regla: las carpetas de OneDrive se leyeron en modo solo lectura; no se tocó ningún archivo.

## 1. Webs de referencia y qué tomar de cada una

| Estudio | Qué hacen bien | Qué copiamos |
|---|---|---|
| Foster + Partners | Imágenes a pantalla completa, proyectos filtrables por tipo y lugar | Filtros por tipología y país (México / EE. UU.) |
| David Chipperfield | Silencio visual: blanco, tipografía pequeña, índice de proyectos en texto | Vista "índice" en lista con miniatura al pasar el mouse |
| Tadao Ando (filosofía, no su web) | Luz, material, vacío | Mucho aire, una imagen a la vez, sin adornos |
| BIG | Portafolio como juego: cuadrícula densa, ordenar y filtrar | Alternar vista cuadrícula / lista |
| Snøhetta | Proyectos contados como historia, fotos grandes y texto corto | Páginas de proyecto narrativas: imagen, idea, galería |
| MVRDV | Ficha técnica clara en cada proyecto | Ficha: ubicación, año, tipología, m², estado |
| Sordo Madaleno (referente mexicano) | Portada con secuencia de fotos a pantalla completa, bilingüe | Hero con 3 a 5 renders que cambian lento |

## 2. Inventario de la empresa

- ~110 proyectos en OD - PROYECTOS: ~45 en México y ~65 en EE. UU. (residencial, comercial, restaurantes, salones de eventos, oficinas, industrial y urbano).
- Logo encontrado: hexágono con techo + "OBREGON DESIGN" en sans condensada (en OBREGON DESIGN OFICINA\LOGO). El oficial está en otra carpeta [POR CONFIRMAR].
- Colores del logo: taupe #AFAB9E, hueso #F1F1F2, grafito #231F20.
- Material visual: renders (Lumion/Enscape/D5). No encontré fotos de obra terminada.
- Muchas carpetas "4. RENDER\JPG" están vacías.

### Selección propuesta (12 proyectos)

Destacados para portada:
1. Garay Eventos (MX, salón de eventos): EVENTONOCHE, EXT1, INT1. Los mejores renders del archivo, pero solo 1569 px.
2. La Coruña (MX, terraza/cocina exterior): JPG 17-09-26\EXTERIOR.jpg, 2752 px.
3. Majestic Venue (US, salón de eventos): Temp Renders\Majestic_Photo - 1.jpg, 4K.
4. Orfanos (US, residencia): RENDER\01_1, 01_3, 01_13.
5. 225 E Cano St (US, food hall/comercial): renders\1, 5, 11.

Portafolio:
6. Casa Garza (US, residencia): Nueva carpeta\v2_1, v2_5, v2_13
7. Piñero Project (US, interiores): Renders\RENDER (2), (4), (10 isométrico), 4K
8. Treviño Kids (US, cocina/interiores): 1.jpg, KITCHEN.jpg
9. Casa Salinas (MX, terraza/bar): RENDERS\1, 5, 8
10. Casa Olé (MX, interiores con vista al mar): Nueva carpeta\CO_001, CO_003. Tienen la marca de agua "O.D. Mexico", hay que sacarlas limpias de los PSD.
11. Bodega FDC (MX, industrial): RENDERS\A_1, A_4, 4K
12. Santa Clara 3 (MX, urbano/espacio público): renders\Enscape...29-06, k.png

Reserva: Guerra Kitchen (4K), Gabriella Balli (baño), José de León y Lidza Treviño (solo 1280 px, no sirven para pantalla grande), IC Energy (ya hay imágenes webp en CLAUDE\presentaciones), Casa Solar.
Sin imágenes encontradas: Torre de Oficinas Obregón (solo Revit), Huachichil, Goldsmith345, Quinta Paloma, Palominos.

## 3. Sitio, identidad y stack

### Mapa del sitio (ES en /, EN en /en/)
- **Inicio:** hero a pantalla completa (3 a 5 renders), una frase de posicionamiento, 6 proyectos destacados, servicios en 2 líneas, presencia México + EE. UU., llamada a contacto.
- **Proyectos:** cuadrícula o lista, filtros por tipología (Residencial, Comercial, Hospitalidad y eventos, Interiores, Industrial, Urbano) y por país.
- **Página de proyecto:** imagen principal, ficha técnica, texto corto (idea), galería, siguiente proyecto.
- **Nosotros:** historia, filosofía, fundador/equipo, oficinas.
- **Servicios:** Arquitectura y Diseño (interiores/mobiliario), con proceso en 4 pasos: concepto, proyecto, ejecutivo, acompañamiento de obra.
- **Contacto:** formulario, botón de WhatsApp, correo y ubicación. Botón flotante de WhatsApp en todo el sitio.

### Identidad
- Logo: se conserva el hexágono. Versiones: horizontal (símbolo + nombre) para el menú, símbolo solo para favicon, negativo blanco sobre fotos. Idealmente en SVG.
- Paleta: blanco #FFFFFF (fondo), hueso #F1F1F2 (bloques), taupe #AFAB9E (acento del logo), grafito #231F20 (texto), gris medio #6E6B66 (texto secundario).
- Tipografía: títulos en Barlow Condensed (light/regular, mayúsculas espaciadas; combina con el logo y ya se usó Barlow en la presentación IC Energy) y texto en Inter light/regular. Ambas son gratis (Google Fonts) y se instalan en el propio sitio.

### Stack técnico
- **Astro** (sitio estático, rápido, español/inglés incluido). Cada proyecto es un archivo de texto sencillo con sus datos y fotos, así que pedir cambios a Claude es fácil.
- CSS propio, sin plantillas.
- Imágenes convertidas a WebP/AVIF en varios tamaños automáticamente.
- Código en un repositorio de GitHub.
- Hosting gratuito en **Netlify** (incluye formularios gratis hasta 100 envíos al mes). Vercel o Cloudflare Pages sirven igual.
- WhatsApp con enlace wa.me y mensaje prellenado.
- Dominio: obregondesign.com o .mx (~US$10 a 20 al año) en Cloudflare o Namecheap, conectado a Netlify.
- SEO básico: títulos, descripciones, Open Graph, sitemap y Google Search Console.

## 4. Pasos para construir (con Fable)
1. Responder las preguntas pendientes y conseguir el logo oficial y los textos base.
2. Crear el repositorio en GitHub (lo crea Juan; Claude lo conecta).
3. Copiar las fotos elegidas al repositorio (desde copias; OneDrive no se toca), optimizarlas y quitar marcas de agua.
4. Montar Astro con el sistema de diseño: colores, tipografía, retícula y componentes.
5. Construir las páginas: Inicio, Proyectos, plantilla de proyecto, Nosotros, Servicios, Contacto y la versión en inglés.
6. Cargar los 12 proyectos con su ficha y textos (Claude redacta y Juan revisa).
7. Publicar una vista previa en Netlify y hacer una ronda de revisión.
8. Comprar el dominio, conectarlo y dar de alta en Google.

## Preguntas abiertas
Ninguna. Solo falta que el usuario conecte GitHub para que Claude pueda escribir en jmjara15/od.

## Decisiones del usuario (13 nov 2026)
- Imágenes: solo renders (sin etiqueta de estado, sin fotos de obra).
- Nombres: mixto. Comerciales con nombre real, casas con nombre neutro.
- Dominio: obregondesign.com
- Servicios: completo (arquitectura, interiores, mobiliario y gabinetes, renders, supervisión de obra).
- Código: repositorio nuevo en GitHub (lo crea el usuario), publicado con Netlify.
- Logo oficial: OneDrive\OD\OD - BASE\OD-LOGO (18 PNG de 2363 px, sin vector). Usar Logotipo_Obregondesign_01-10 (negro sobre hueso, con nombre) y 01-6 (símbolo negro, transparente) + versiones blancas -08/-15. Para SVG: convertir una copia de Logo.dwg (OD - MX\O\OBREGON DESIGN OFICINA) o vectorizar el PNG.
- Repo: https://github.com/jmjara15/od
- Oficinas: Hermosillo (MX) y McAllen (US).
- Año de fundación: no se muestra; Nosotros habla de +100 proyectos en dos países.
- WhatsApp y correo: datos de ejemplo; el usuario los cambia antes de publicar.
