# TERTULIA · web del club

**Publicada en:** https://wlacaze-git.github.io/tertulia/ · repo: https://github.com/wlacaze-git/tertulia

Página de una sola vista para presentar el concepto y los próximos viajes.
Sin frameworks, sin build, sin dependencias: se abre y funciona.

## Cómo verla

Doble clic en `index.html`. Nada más.

Para que las fotos y las fuentes carguen hace falta conexión a internet (las imágenes están enlazadas desde Wikimedia Commons y las tipografías desde Google Fonts). Si no hay red, la web sigue funcionando con sus colores y tipografías de reserva.

## Estructura

```
index.html          la página entera (textos incluidos)
css/styles.css      todo el diseño
js/main.js          fichas de viaje, filtros, formulario, menú
IDEAS.md            el documento de negocio: concepto, números, legal, plan
```

## El flujo que cuenta la web

1. El viaje ya está diseñado y publicado (fechas, itinerario, precio cerrado).
2. Quien se interesa se apunta a un café.
3. En el café se ve el itinerario en detalle y se conoce al grupo. Nadie decide esa noche.
4. Después, quien quiere confirma y paga la señal.

Si cambia el modelo (por ejemplo, si se vota el destino o si hay selección de grupo), hay que tocar las secciones **02 El método** y **03 La regla de la casa**, que son las que explican el mecanismo.

## Cómo cambiar los viajes

Cada viaje vive en **dos sitios** (a propósito: la tarjeta es HTML estático y la ficha detallada es JS).

1. **La tarjeta** — busca `<!-- ══════════ 04 VIAJES ══════════ -->` en `index.html`.
   Copia un `<article class="trip">` completo, cambia el texto, la imagen y `data-duration="2|3|4"`.
   El botón lleva `data-trip="identificador"` y debajo va la línea `<p class="trip__cafe">Café: …</p>`.

2. **El itinerario** — en `js/main.js`, dentro de `const TRIPS = { ... }`, añade un bloque con ese mismo identificador:

```js
micheli: {
  kicker: "Italia · 4 días",
  title: "Puglia, piedra y aceite",
  lead: "Una frase que venda el viaje.",
  img: "https://…",
  meta: ["12–15 may 2027", "12 plazas", "desde 890 €", "vuelos no incluidos", "Café: jueves 6 de mayo"],
  days: [ { h: "Día 1 · jueves 13", items: [["10:00", "Qué pasa a esa hora."]] } ],
  inc: ["Lo que entra"],
  exc: ["Lo que no entra"],
  fine: "Letra pequeña del precio.",
  formOption: "Puglia · mayo 2027"   // debe coincidir con una <option> del formulario
}
```

También hay que añadir esa opción en el `<select id="trip">` del formulario.

Los filtros por duración se actualizan solos con `data-duration`.

## El formulario

Valida en el navegador y guarda el alta en `localStorage` (`tertulia.leads`). **No envía nada a ningún sitio.**
Antes de publicar, conéctalo a lo que uses: Formspree, Mailchimp, Brevo, Google Forms o un endpoint propio.
Se toca en `js/main.js`, bloque `form`, justo después de `const leads = …`.

## Qué es de mentira (y hay que sustituir antes de publicar)

- Fechas, precios, plazas y horarios de todos los viajes.
- Las fechas de los cafés (todos los jueves), la dirección («Malasaña») y el correo `hola@tertulia.club`.
- Los enlaces legales (aviso, privacidad, cookies, condiciones): están vacíos a propósito.
- **Las fotos**: son de Wikimedia Commons y sirven solo para el prototipo. Antes de publicar, usar fotos propias de sus viajes (mejor marca y sin líos de licencia). Cada foto está acreditada al pie de la página.
- El nombre «Tertulia»: comprobar marca en la OEPM y dominio antes de imprimir nada.

## Publicar

Es estático: se puede arrastrar la carpeta a Netlify Drop o Vercel, o subir a GitHub Pages. No hace falta servidor.
Si se publica en un dominio propio, actualizar las etiquetas `og:` del `<head>` para que se vea bien al compartir.

## Detalles técnicos

- Responsive hasta 360 px. Menú móvil, filtros, ficha de viaje en `<dialog>` nativo, acordeón con `<details>`.
- Respeta `prefers-reduced-motion`.
- Navegación por teclado y foco visible; textos alternativos en todas las imágenes.
- Sin analítica, sin cookies, sin peticiones a terceros más allá de fuentes e imágenes.
