# NABLA como aplicación instalable (PWA)

_NABLA fue creado por **Esteban Casallas**, docente de la Universidad Industrial de Santander (UIS). Los créditos aparecen en la pantalla de inicio, en el menú lateral, en Ajustes, en la Guía y en los diplomas._

> **Versión con estilo de plataformas retro (8 bits).** Día = cielo azul, Noche = nivel subterráneo; mascota original Δ, camino de niveles en el mapa y sonidos de 8 bits. Si ya tenías NABLA publicada, vuelve a subir **los 5 archivos** (reemplazan a los anteriores) para que todos reciban esta versión.
>
> **Nuevo: Vestuario.** Los estudiantes personalizan su mascota (18 skins, accesorios, tono de piel y color del emblema). Cada skin se desbloquea con una meta de juego. Para el docente: la skin secreta «Profe» se abre con el código **UIS-NABLA-2026** (escribirlo en Vestuario → Código secreto); puedes dárselo a tu clase como premio.


Esta carpeta trae 5 archivos sueltos —a propósito, sin subcarpetas— para que
publicarla sea tan simple como arrastrarlos todos juntos:

- `index.html`
- `manifest.webmanifest`
- `sw.js`
- `icon-192.png`
- `icon-512.png`

Con esto, los estudiantes pueden "instalar" NABLA en su celular o
computador (ícono propio, ventana propia sin barra del navegador) y
usarla sin conexión después de la primera visita.

**Importante:** esto sólo funciona si `index.html` se sirve por HTTPS (o
`localhost`) desde un servidor real. Abrir el archivo con doble clic
(`file://…`) sigue funcionando como juego —no se pierde nada—, pero el
navegador no permite instalar ni cachear una PWA abierta así.

## Publicarla gratis con GitHub Pages (paso a paso)

1. Entra a **github.com** y crea una cuenta si no tienes una (botón "Sign
   up", arriba a la derecha).
2. Arriba a la derecha, haz clic en el **+** y elige **"New repository"**.
3. Ponle un nombre (por ejemplo `nabla-juego`), déjalo como **Public**
   (con cuenta gratuita, Pages sólo funciona en repositorios públicos), y
   haz clic en **"Create repository"**.
4. En la página del repositorio, haz clic en **"Add file" → "Upload
   files"**.
5. Selecciona **los 5 archivos de esta carpeta a la vez** (`index.html`,
   `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`) y
   arrástralos todos juntos al recuadro de la página (o usa "choose your
   files"). Como no hay subcarpetas, no importa el orden ni el método:
   simplemente tienen que quedar en la raíz del repositorio.
6. Baja y haz clic en **"Commit changes"**.
7. Ve a la pestaña **"Settings"** del repositorio → en el menú de la
   izquierda, **"Pages"**.
8. En **"Build and deployment" → "Source"**, elige **"Deploy from a
   branch"**, la rama **`main`** y la carpeta **`/ (root)`**. Haz clic en
   **"Save"**.
9. Espera uno o dos minutos. GitHub te muestra la URL de tu sitio, algo
   como `https://tu-usuario.github.io/nabla-juego/`. Esa es la app.

## Instalarla en el celular

- **Android (Chrome)**: abre esa URL, toca el menú de tres puntos y
  elige "Agregar a pantalla de inicio" o "Instalar aplicación".
- **iPhone (Safari)**: abre la URL, toca el ícono de compartir (el
  cuadrito con la flecha hacia arriba) y elige "Agregar a pantalla de
  inicio". Tiene que ser Safari — otros navegadores en iPhone no ofrecen
  esa opción.

## Otras formas de hospedarla

Cualquier hosting estático sirve igual: Netlify, Vercel, Cloudflare
Pages, o un servidor propio — basta con copiar estos mismos 5 archivos a
la raíz del sitio (por HTTPS). Sigue siendo 100 % del lado del
navegador: no necesita backend ni base de datos.

## Actualizar la app más adelante

Si más adelante hay una versión nueva de NABLA, basta con volver a subir
estos mismos 5 archivos (reemplazando los anteriores) al mismo
repositorio. El `sw.js` lleva un número de versión que cambia con cada
build, así que los navegadores de los estudiantes descargan la
actualización solos la próxima vez que abran la app con internet — no
hace falta que desinstalen nada.


## Si ya la tenías publicada

Para actualizar a esta versión (fases 2 a 4), sube de nuevo **los 5 archivos** al repositorio con "Add file → Upload files" y confirma los cambios. Los estudiantes verán la versión nueva la próxima vez que abran la aplicación con conexión (su progreso guardado se conserva).
