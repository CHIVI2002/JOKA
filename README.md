# JOKA — Sitio web informativo de calzado deportivo
**Eslogan:** _Step into greatness_  
**Autor:** (Edvin Chivichon)

Proyecto académico: desarrollo de una **página web informativa** para la marca ficticia **JOKA**, que ofrece **zapatillas deportivas**. El sitio está compuesto por varias páginas enlazadas, un **único archivo de estilos** compartido y componentes interactivos en JavaScript (menú, slider y acordeón).

---

## ✅ Cumplimiento de las instrucciones
- **Menú y links a diferentes páginas**: navegación entre `index.html`, `productos.html`, `sobre.html`, `contacto.html`.
- **Un solo estilo común**: todas las páginas enlazan `css/estilo.css`.
- **Selectores CSS utilizados**  
  - **Por tipo**: `body`, `h1`, `p`, `label`, `input[type="text"]`, `textarea`, etc.  
  - **Por clase**: `.btn`, `.card`, `.grid-prod`, `.motivacional`, `.panel`, `.brand`, etc.  
  - **Por identificación (id)**: `#hero`, `#productos`, `#motivacion`, `#faq`.


---

## 🧭 Páginas
- **Inicio** (`index.html`): hero con **slider**, productos destacados, bloque motivacional y **FAQ** (acordeón).  
- **Productos** (`productos.html`): catálogo con tarjetas e imágenes; sección de **materiales**.  
- **Sobre nosotros** (`sobre.html`): historia de la marca (panel destacado) e identidad visual (tarjetas).  
- **Contacto** (`contacto.html`): hero claro y **formulario** conectado a Formspree.

---

## 🗂️ Estructura del proyecto
JOKA/
├─ index.html
├─ productos.html
├─ sobre.html
├─ contacto.html
├─ css/
│ └─ estilo.css
├─ js/
│ ├─ menu.js # Menú hamburguesa
│ ├─ slider.js # Slider del hero
│ └─ questions.js # Acordeón de preguntas frecuentes
└─ img/ # Imágenes y favicon
├─ branding-neon-hero.jpg
├─ slogan-runner-vertical.jpg
├─ branding-frosted-glass.jpg
├─ bolt-glow-bg.jpg
├─ producto-running-track.jpg
├─ runner-logo-pista.jpg
├─ producto-negro-verde.jpg
├─ producto-negro-par.png
├─ producto-azul.png
├─ detalle-azul-closeup.jpg
├─ runner-urbano.jpg
├─ producto-neon-display.jpg
├─ logo-white-bg.png
├─ bg-degradado-lima-azul.jpg
├─ favicon.ico
├─ favicon-128.png
├─ favicon-64.png
├─ favicon-48.png
├─ favicon-32.png
└─ favicon-16.png


> **Nota:** En el HTML se incluyeron *fallbacks* PNG→JPG con `onerror` para prevenir fallos si cambia la extensión de alguna imagen.

---

## ▶️ Cómo ejecutar localmente
1. Abrir la carpeta `joka/` en el editor.  
2. Ejecutar con un servidor local (por ejemplo **Live Server** de VS Code) **o** abrir `index.html` directamente en el navegador.



## ✉️ Formulario (Formspree)
- En `contacto.html`, el atributo `action` apunta a un endpoint de Formspree.  


---

## 🎨 Guía visual 
- Paleta: **negro/azul oscuro** (fondos), **verde lima** y **azul eléctrico** (acentos).  
- Tipografía del sistema (rendimiento).  
- Componentes con esquinas redondeadas, sombras suaves y *overlays* para legibilidad.

---

## 📦 Tecnologías
- **HTML5**, **CSS3**, **JavaScript** (vanilla, sin frameworks).  
- Compatibilidad moderna (Chrome/Edge/Firefox).
