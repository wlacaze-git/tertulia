/* ═══════════════════════════════════════════════════════════
   TERTULIA · interacciones
   1. Fichas de viaje (diálogo con itinerario)
   2. Filtros por duración
   3. Formulario del café
   4. Nav, reveal y detalles
   ═══════════════════════════════════════════════════════════ */

/* ----------------------------------------------------------
   1 · DATOS DE LOS VIAJES
   Para añadir un viaje: copia un bloque, cambia el id y añade
   la tarjeta en index.html con data-trip="ese-id".
   ---------------------------------------------------------- */
const TRIPS = {
  viena: {
    kicker: "Austria · 3 días",
    title: "Viena y los mercadillos de Adviento",
    lead: "Tres días de ciudad en diciembre: punsch, castañas asadas, Klimt y un palacio con mercado en el patio. El viaje piloto del club, con todo rodado.",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Burgtheater_and_Christmas_Market_%28375862051%29.jpg/1920px-Burgtheater_and_Christmas_Market_%28375862051%29.jpg",
    meta: ["4–6 dic 2026", "10 plazas · quedan 3", "desde 690 €", "vuelos no incluidos", "Café: jueves 19 de noviembre"],
    days: [
      { h: "Día 1 · viernes 4", items: [
        ["11:20", "Llegada a Viena. Traslado al hotel y café de bienvenida en un café de 1900."],
        ["16:30", "Rathausplatz: el mercadillo grande, punsch y la primera ronda de fotos."],
        ["20:30", "Cena en un Beisl de barrio. Nada de trampas para turistas."]
      ]},
      { h: "Día 2 · sábado 5", items: [
        ["09:30", "Schönbrunn: palacio y mercado de Adviento en el patio."],
        ["13:30", "Naschmarkt y comida libre por el centro."],
        ["17:00", "Belvedere (Klimt) o compras en Kärntner Straße."],
        ["20:00", "Concierto de cámara en el Musikverein (opcional, +29 €)."]
      ]},
      { h: "Día 3 · domingo 6", items: [
        ["10:00", "Mercadillos de Karlsplatz y Stephansplatz."],
        ["12:00", "Brunch largo y último paseo por el centro."],
        ["16:00", "Traslado al aeropuerto y vuelo de vuelta."]
      ]}
    ],
    inc: ["2 noches de hotel 4* céntrico con desayuno", "Traslados aeropuerto ↔ hotel", "Entradas a Schönbrunn y Belvedere", "Dos cenas de grupo", "Guía local el sábado", "Seguro de asistencia", "Coordinadora del club"],
    exc: ["Vuelos (desde ~120 € desde Madrid)", "Comidas libres", "Concierto opcional", "Bebidas y extras"],
    fine: "Precio por persona en habitación doble compartida. Individual con suplemento de 180 €. Si no llegamos a 8 personas, se cancela y se devuelve todo.",
    formOption: "Viena · diciembre 2026"
  },

  ronda: {
    kicker: "Andalucía · 2 días",
    title: "Ronda y los pueblos blancos",
    lead: "El formato corto del club: sales un sábado por la mañana y duermes en tu cama el domingo. Un desfiladero, una bodega y un pueblo metido dentro de la roca.",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/View_of_Puente_Nuevo_bridge_in_Ronda_Spain.jpg/1920px-View_of_Puente_Nuevo_bridge_in_Ronda_Spain.jpg",
    meta: ["6–7 feb 2027", "12 plazas · quedan 9", "desde 320 €", "tren incluido", "Café: jueves 14 de enero"],
    days: [
      { h: "Día 1 · sábado 6", items: [
        ["09:00", "AVE Madrid–Antequera y traslado a Ronda."],
        ["12:30", "Puente Nuevo, barrio de la Ciudad y mirador del Tajo."],
        ["15:00", "Comida en una bodega con vinos de la Serranía."],
        ["19:00", "Atardecer en el mirador y cena de tapas."]
      ]},
      { h: "Día 2 · domingo 7", items: [
        ["09:30", "Setenil de las Bodegas: el pueblo construido bajo la roca."],
        ["12:30", "Zahara de la Sierra y mirador del embalse."],
        ["16:00", "Vuelta a Antequera y AVE a Madrid."]
      ]}
    ],
    inc: ["AVE Madrid–Antequera ida y vuelta", "1 noche en hotel boutique con desayuno", "Minibús y traslados", "Comida en bodega y cena de tapas", "Seguro de asistencia", "Coordinadora del club"],
    exc: ["Desayuno del domingo (a propósito, para ir de bares)", "Bebidas fuera de las comidas", "Extras"],
    fine: "Precio por persona en habitación doble compartida. Individual con suplemento de 65 €. Es el viaje más barato del año a propósito: sirve para probar el club.",
    formOption: "Ronda · febrero 2027"
  },

  marruecos: {
    kicker: "Marruecos · 4 días",
    title: "Tánger y la ciudad azul",
    lead: "Té con vistas al Estrecho, tres horas de carretera por el Rif y Chefchaouen entera. El viaje que todo el mundo repite al año siguiente.",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Chefchaouen-blue-city-during-thesunset.jpg/1920px-Chefchaouen-blue-city-during-thesunset.jpg",
    meta: ["11–14 mar 2027", "12 plazas · quedan 8", "desde 780 €", "vuelos no incluidos", "Café: jueves 18 de febrero"],
    days: [
      { h: "Día 1 · jueves 11", items: [
        ["10:00", "Vuelo a Tánger y check-in en la medina."],
        ["13:00", "Café Hafa: té con vistas al Estrecho."],
        ["20:00", "Cena en el Gran Socco."]
      ]},
      { h: "Día 2 · viernes 12", items: [
        ["08:30", "Ruta al Rif por las montañas."],
        ["13:00", "Llegada a Chefchaouen y comida en la plaza."],
        ["16:00", "Kasbah y medina azul sin prisa."],
        ["19:30", "Atardecer desde la mezquita española."]
      ]},
      { h: "Día 3 · sábado 13", items: [
        ["09:00", "Cascadas de Akchour: paseo suave de dos horas."],
        ["15:00", "Taller de cerámica con una artesana del barrio."],
        ["20:00", "Cena en Uta el-Hammam."]
      ]},
      { h: "Día 4 · domingo 14", items: [
        ["09:00", "Vuelta a Tánger por la costa."],
        ["13:00", "Zoco y último té."],
        ["17:00", "Vuelo de vuelta."]
      ]}
    ],
    inc: ["3 noches (1 en Tánger, 2 en Chefchaouen)", "Minibús y conductor privado", "Desayunos y dos cenas", "Taller de cerámica", "Guía local en Chefchaouen", "Seguro de asistencia", "Coordinadora del club"],
    exc: ["Vuelos (desde ~90 €)", "Comidas libres", "Propinas", "Entradas opcionales"],
    fine: "Precio por persona en habitación doble compartida. Se anda bastante y hay curvas: no es un viaje para quien no quiera caminar. Lleva calzado cerrado.",
    formOption: "Marruecos · marzo 2027"
  },

  cotswolds: {
    kicker: "Inglaterra · 4 días",
    title: "Cotswolds, piedra y chimenea",
    lead: "Cuatro días de pueblos color miel, pubs con chimenea y campos verdes. El viaje más lento del calendario: se camina, se come y se duerme bien.",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/River_and_cottages_Bibury_Cotswolds.jpg/1920px-River_and_cottages_Bibury_Cotswolds.jpg",
    meta: ["22–25 abr 2027", "10 plazas", "desde 1.150 €", "vuelos no incluidos", "Café: jueves 25 de marzo"],
    days: [
      { h: "Día 1 · jueves 22", items: [
        ["10:00", "Vuelo a Bristol y minibús a Cirencester."],
        ["16:00", "Paseo por el pueblo y pub con chimenea."],
        ["20:00", "Cena en el hotel."]
      ]},
      { h: "Día 2 · viernes 23", items: [
        ["09:30", "Bibury y Arlington Row, la calle más pintada de Inglaterra."],
        ["12:00", "Bourton-on-the-Water y comida en un pub del siglo XVII."],
        ["16:00", "Stow-on-the-Wold y tiendas de antigüedades."]
      ]},
      { h: "Día 3 · sábado 24", items: [
        ["10:00", "Castle Combe, el pueblo más fotografiado del país."],
        ["13:00", "Lacock y té con scones."],
        ["16:30", "Jardines de Hidcote."]
      ]},
      { h: "Día 4 · domingo 25", items: [
        ["09:30", "Oxford de camino al aeropuerto: Bodleian y Covered Market."],
        ["15:00", "Vuelo de vuelta."]
      ]}
    ],
    inc: ["3 noches en hotel con desayuno", "Minibús privado con conductor", "Entradas a Hidcote", "Dos cenas", "Seguro de asistencia", "Coordinadora del club"],
    exc: ["Vuelos a Bristol (desde ~110 €)", "Comidas libres", "Propinas"],
    fine: "Precio por persona en habitación doble compartida. Mucho camino de campo: lleva calzado que aguante barro. En abril llueve, y se dice en la ficha, no en el avión.",
    formOption: "Cotswolds · abril 2027"
  },

  loira: {
    kicker: "Francia · 4 días",
    title: "El Loira y la ruta de los castillos",
    lead: "Chambord, Chenonceau y Villandry con base en Amboise. Cuatro castillos, una cata, una barca por el Cher y ninguna prisa.",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Ch%C3%A2teau_de_Chambord_at_dawn.jpg/1920px-Ch%C3%A2teau_de_Chambord_at_dawn.jpg",
    meta: ["13–16 may 2027", "12 plazas", "desde 1.040 €", "vuelos no incluidos", "Café: jueves 15 de abril"],
    days: [
      { h: "Día 1 · jueves 13", items: [
        ["11:00", "Vuelo a París y TGV a Tours."],
        ["15:00", "Traslado a Amboise y paseo junto al río."],
        ["20:00", "Cena con vistas al castillo."]
      ]},
      { h: "Día 2 · viernes 14", items: [
        ["09:30", "Chambord y la escalera de Leonardo."],
        ["14:00", "Comida en el pueblo."],
        ["16:30", "Cheverny y cata en una bodega de la zona."]
      ]},
      { h: "Día 3 · sábado 15", items: [
        ["09:30", "Chenonceau, el castillo sobre el Cher."],
        ["14:00", "Jardines de Villandry."],
        ["17:30", "Paseo en barca por el Cher (12 €, opcional)."]
      ]},
      { h: "Día 4 · domingo 16", items: [
        ["10:00", "Clos Lucé, la casa de Leonardo."],
        ["12:30", "Mercado de Amboise y última comida."],
        ["16:00", "TGV a París y vuelo de vuelta."]
      ]}
    ],
    inc: ["3 noches con desayuno", "TGV París–Tours ida y vuelta", "Minibús privado", "Entradas a Chambord, Cheverny, Chenonceau, Villandry y Clos Lucé", "Cata en bodega", "Tres cenas", "Seguro de asistencia", "Coordinadora del club"],
    exc: ["Vuelos a París (desde ~130 €)", "Comidas libres", "Paseo en barca (12 €)"],
    fine: "Precio por persona en habitación doble compartida. Mayo es temporada alta en el Loira: las entradas se compran con antelación y no se reembolsan.",
    formOption: "Loira · mayo 2027"
  }
};

/* ----------------------------------------------------------
   utilidades
   ---------------------------------------------------------- */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const store = {
  get(key, fallback) {
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
    catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* modo privado */ }
  }
};

/* ----------------------------------------------------------
   2 · NAV
   ---------------------------------------------------------- */
(function nav() {
  const header = $("#nav");
  const toggle = $("#navToggle");
  const panel  = $("#navPanel");

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const close = () => {
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
    document.body.classList.remove("nav-open");
  };

  toggle.addEventListener("click", () => {
    const open = !header.classList.contains("is-open");
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.classList.toggle("nav-open", open);
  });

  $$("a", panel).forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  window.addEventListener("resize", () => { if (window.innerWidth > 860) close(); });
})();

/* ----------------------------------------------------------
   3 · REVEAL AL HACER SCROLL
   ---------------------------------------------------------- */
(function reveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach(el => el.classList.add("is-in"));
    return;
  }

  // pequeño escalonado entre hermanos
  items.forEach(el => {
    const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains("reveal"));
    el.style.transitionDelay = (siblings.indexOf(el) % 5) * 70 + "ms";
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

  items.forEach(el => io.observe(el));
})();

/* ----------------------------------------------------------
   4 · FILTROS POR DURACIÓN
   ---------------------------------------------------------- */
(function filters() {
  const chips = $$(".chip");
  const cards = $$(".trip");
  if (!chips.length) return;

  chips.forEach(chip => {
    chip.setAttribute("aria-pressed", chip.classList.contains("is-active") ? "true" : "false");
    chip.addEventListener("click", () => {
      chips.forEach(c => { c.classList.remove("is-active"); c.setAttribute("aria-pressed", "false"); });
      chip.classList.add("is-active");
      chip.setAttribute("aria-pressed", "true");

      const filter = chip.dataset.filter;
      let visible = 0;
      cards.forEach(card => {
        const show = filter === "all" || card.dataset.duration === filter;
        card.style.display = show ? "" : "none";
        if (show) { card.classList.add("is-in"); visible++; }
      });

      const note = $(".trips__note");
      if (note) {
        note.textContent = filter === "all"
          ? "¿Ninguno te cuadra? Dímelo y te aviso cuando publique el siguiente. El calendario sale dos veces al año, y quien ya ha venido a un café elige antes."
          : `${visible} ${visible === 1 ? "viaje" : "viajes"} de ${filter} días. Los que no encajan en tu calendario siguen ahí cuando vuelvas a mirar.`;
      }
    });
  });
})();

/* ----------------------------------------------------------
   5 · DIÁLOGO DE VIAJE
   ---------------------------------------------------------- */
(function tripDialog() {
  const dlg = $("#tripDialog");
  if (!dlg || typeof dlg.showModal !== "function") return;

  const el = {
    img: $("#dlgImg"), kick: $("#dlgKick"), title: $("#dlgTitle"), lead: $("#dlgLead"),
    meta: $("#dlgMeta"), days: $("#dlgDays"), inc: $("#dlgInc"), exc: $("#dlgExc"),
    fine: $("#dlgFine"), cta: $("#dlgCta"), close: $("#dlgClose")
  };

  let current = null;

  function open(id) {
    const trip = TRIPS[id];
    if (!trip) return;
    current = trip;

    el.img.src = trip.img;
    el.img.alt = trip.title;
    el.kick.textContent = trip.kicker;
    el.title.textContent = trip.title;
    el.lead.textContent = trip.lead;

    el.meta.innerHTML = trip.meta.map(m => `<li>${m}</li>`).join("");

    el.days.innerHTML = trip.days.map(day => `
      <div class="day">
        <p class="day__h">${day.h}</p>
        <ul>${day.items.map(([time, text]) => `<li><b>${time}</b><span>${text}</span></li>`).join("")}</ul>
      </div>`).join("");

    el.inc.innerHTML = trip.inc.map(i => `<li>${i}</li>`).join("");
    el.exc.innerHTML = trip.exc.map(i => `<li>${i}</li>`).join("");
    el.fine.textContent = trip.fine;

    dlg.showModal();
    document.documentElement.style.overflow = "hidden";
    dlg.scrollTop = 0;
    el.close.focus({ preventScroll: true });
  }

  function close() {
    if (dlg.open) dlg.close();
    document.documentElement.style.overflow = "";
  }

  $$("[data-trip]").forEach(btn => {
    btn.addEventListener("click", () => open(btn.dataset.trip));
  });

  el.close.addEventListener("click", close);
  dlg.addEventListener("click", e => { if (e.target === dlg) close(); });
  dlg.addEventListener("close", () => { document.documentElement.style.overflow = ""; });

  el.cta.addEventListener("click", () => {
    const option = current ? current.formOption : "";
    close();
    const select = $("#trip");
    if (select && option) select.value = option;
    const target = $("#apuntate");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => { const name = $("#name"); if (name) name.focus({ preventScroll: true }); }, 650);
  });
})();

/* ----------------------------------------------------------
   5 · «APÚNTATE AL CAFÉ» DESDE LAS TARJETAS
   Preselecciona el viaje en el formulario al saltar al café.
   ---------------------------------------------------------- */
(function cafeLinks() {
  $$("[data-cafe]").forEach(link => {
    link.addEventListener("click", () => {
      const trip = TRIPS[link.dataset.cafe];
      const select = $("#trip");
      if (trip && select) select.value = trip.formOption;
    });
  });
})();

/* ----------------------------------------------------------
   6 · FORMULARIO DEL CAFÉ
   ---------------------------------------------------------- */
(function form() {
  const form = $("#signupForm");
  const done = $("#formDone");
  if (!form) return;

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function setError(name, hasError) {
    const input = form.querySelector(`[name="${name}"]`);
    const field = input ? input.closest(".field") : null;
    if (field) field.classList.toggle("has-error", hasError);
    if (name === "privacy") {
      const err = form.querySelector('[data-error-for="privacy"]');
      if (err) err.classList.toggle("show", hasError);
    }
  }

  function validate() {
    const data = {
      name: $("#name").value.trim(),
      email: $("#email").value.trim(),
      instagram: $("#instagram").value.trim(),
      city: $("#city").value.trim(),
      trip: $("#trip").value,
      note: $("#note").value.trim()
    };
    const privacy = $("#privacy").checked;

    const errors = {
      name: data.name.length < 2,
      email: !emailRx.test(data.email),
      city: data.city.length < 2,
      privacy: !privacy
    };

    Object.entries(errors).forEach(([k, v]) => setError(k, v));
    const firstBad = Object.keys(errors).find(k => errors[k]);
    if (firstBad) {
      const input = form.querySelector(`[name="${firstBad}"], #${firstBad}`);
      if (input) input.focus({ preventScroll: false });
      return null;
    }
    return { ...data, privacy, date: new Date().toISOString() };
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = validate();
    if (!data) return;

    const leads = store.get("tertulia.leads", []);
    leads.push(data);
    store.set("tertulia.leads", leads);

    const text = data.trip && data.trip !== "Aún no lo sé, cuéntame en el café"
      ? `Te escribo yo misma antes del 17 de noviembre con la dirección y la hora. Me has dicho que te interesa <strong>${data.trip}</strong>, así que te llevo el itinerario impreso. Si al final no puedes venir, avísame y le paso el sitio a otra persona.`
      : "Te escribo yo misma antes del 17 de noviembre con la dirección y la hora. Si al final no puedes venir, avísame y le paso el sitio a otra persona.";

    $("#formDoneText").innerHTML = text;
    form.hidden = true;
    done.hidden = false;
    done.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // limpiar error al escribir
  $$("input, select, textarea", form).forEach(input => {
    input.addEventListener("input", () => {
      if (input.closest(".field")) input.closest(".field").classList.remove("has-error");
      if (input.type === "checkbox") {
        const err = form.querySelector('[data-error-for="privacy"]');
        if (err) err.classList.remove("show");
      }
    });
  });

  const reset = $("#formReset");
  if (reset) reset.addEventListener("click", () => {
    form.reset();
    done.hidden = true;
    form.hidden = false;
    const first = $("#name");
    if (first) first.focus();
  });
})();

/* ----------------------------------------------------------
   7 · DETALLES
   ---------------------------------------------------------- */
(function details() {
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Cierra el resto de acordeones al abrir uno (en escritorio)
  $$("details").forEach(d => {
    d.addEventListener("toggle", () => {
      if (!d.open || window.innerWidth < 861) return;
      $$("details").forEach(other => { if (other !== d) other.open = false; });
    });
  });
})();
