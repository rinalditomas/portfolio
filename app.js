// app.js — Tomás Rinaldi landing page (Bold direction).
// Vanilla render of the bilingual page: nav · hero · services · work · CTA band ·
// process · contact (form + WhatsApp + email) · footer. No build step required.

// ─── EDIT THESE: your real contact details ───
const CONFIG = {
  name: "Tomás Rinaldi",
  whatsapp: "34661419404",      // country code + number, digits only
  email: "tomasrinaldi.work@gmail.com",
};

const ACCENT = "#0e9d63";
const LANG_KEY = "tr_lang";

// ─── Bilingual copy (EN / ES) ───
const CONTENT = {
  en: {
    nav: { cta: "Let's talk" },
    hero: {
      availability: "Available for new projects",
      ctaPrimary: "Start a project",
      ctaSecondary: "See selected work",
      chips: ["Web", "Automation", "Internal tools", "Maintenance"],
    },
    heroBold: {
      title: ["Less busywork.", "More business."],
      sub: "Websites that bring in clients, automations that save you time, and tools that finally put everything in one place.",
      kicker: "Fixed quotes · direct contact · support after launch.",
    },
    services: {
      label: "What I do",
      title: "Four ways I help businesses run better.",
      items: [
        { n: "01", title: "Websites & online presence", short: "Websites", desc: "Fast, modern sites that make a small business look credible — landing pages, company sites, booking and contact flows.", tags: ["Landing pages", "Company sites", "SEO basics"] },
        { n: "02", title: "Automation", short: "Automation", desc: "Scripts and integrations that remove repetitive work — connecting your tools, syncing data, and handling tasks while you sleep.", tags: ["Integrations", "Scripts", "Data sync"] },
        { n: "03", title: "Management software", short: "Management software", desc: "Custom internal tools built around how your team actually works — inventory, clients, scheduling, dashboards.", tags: ["Dashboards", "Internal tools", "Databases"] },
        { n: "04", title: "Maintenance & support", short: "Maintenance", desc: "Ongoing care so what we build keeps working — updates, fixes, small improvements, and someone to call.", tags: ["Updates", "Fixes", "On call"] },
      ],
    },
    work: {
      label: "Selected work",
      title: "A recent project.",
      items: [
        { name: "NQN English Institute", kind: "Website + automation + admin", desc: "A multi-audience site with an online placement test. Every submission emails the institute instantly and lands in a private admin panel with the student's suggested level.", result: "Every lead reaches the team in seconds", img: "assets/nqn-home.png", url: "https://nqn-english-institute-4534.netlify.app/" },
      ],
    },
    process: {
      label: "Process",
      title: "Simple, start to finish.",
      steps: [
        { n: "01", title: "Talk", desc: "A short call to understand the problem and what success looks like." },
        { n: "02", title: "Quote", desc: "A clear plan with a fixed price and timeline — no surprises." },
        { n: "03", title: "Build", desc: "I build in the open, sharing progress so you're never in the dark." },
        { n: "04", title: "Launch & support", desc: "We go live, and I stay on to keep it running smoothly." },
      ],
    },
    contact: {
      label: "Contact",
      title: "Have something in mind?",
      bandTitle: "Ready to take work off your plate?",
      sub: "Tell me a little about your business and what you'd like to build. I usually reply within a day.",
      whatsapp: "Message on WhatsApp",
      email: "Send an email",
      form: { name: "Your name", email: "Email", company: "Company (optional)", message: "What do you need?", messagePlaceholder: "A website, an automation, a tool to manage…", send: "Send message" },
    },
    footer: { tagline: "Software for growing businesses." },
  },

  es: {
    nav: { cta: "Hablemos" },
    hero: {
      availability: "Disponible para nuevos proyectos",
      ctaPrimary: "Empezar un proyecto",
      ctaSecondary: "Ver proyectos",
      chips: ["Web", "Automatización", "Herramientas internas", "Mantenimiento"],
    },
    heroBold: {
      title: ["Menos tareas repetitivas.", "Más negocio."],
      sub: "Sitios que traen clientes, automatizaciones que te ahorran tiempo y herramientas que por fin ponen todo en un solo lugar.",
      kicker: "Presupuestos fijos · trato directo · soporte después del lanzamiento.",
    },
    services: {
      label: "Qué hago",
      title: "Cuatro formas de ayudar a tu negocio.",
      items: [
        { n: "01", title: "Sitios web y presencia online", short: "Sitios web", desc: "Sitios rápidos y modernos que dan credibilidad a un negocio — landing pages, sitios de empresa, reservas y contacto.", tags: ["Landing pages", "Sitios de empresa", "SEO básico"] },
        { n: "02", title: "Automatización", short: "Automatización", desc: "Scripts e integraciones que eliminan el trabajo repetitivo — conectan tus herramientas, sincronizan datos y trabajan mientras duermes.", tags: ["Integraciones", "Scripts", "Sincronización"] },
        { n: "03", title: "Software de gestión", short: "Software de gestión", desc: "Herramientas internas a medida, pensadas para la forma en que trabaja tu equipo — inventario, clientes, agenda, tableros.", tags: ["Tableros", "Herramientas internas", "Bases de datos"] },
        { n: "04", title: "Mantenimiento y soporte", short: "Mantenimiento", desc: "Cuidado continuo para que todo siga funcionando — actualizaciones, arreglos, mejoras y alguien a quien llamar.", tags: ["Actualizaciones", "Arreglos", "Disponible"] },
      ],
    },
    work: {
      label: "Proyectos",
      title: "Un proyecto reciente.",
      items: [
        { name: "NQN English Institute", kind: "Web + automatización + admin", desc: "Un sitio para varios públicos con test de nivelación online. Cada envío le llega al instituto por email al instante y queda en un panel admin privado con el nivel sugerido del alumno.", result: "Cada consulta llega al equipo en segundos", img: "assets/nqn-home.png", url: "https://nqn-english-institute-4534.netlify.app/" },
      ],
    },
    process: {
      label: "Proceso",
      title: "Simple, de principio a fin.",
      steps: [
        { n: "01", title: "Hablamos", desc: "Una charla corta para entender el problema y qué sería un buen resultado." },
        { n: "02", title: "Presupuesto", desc: "Un plan claro con precio fijo y plazo — sin sorpresas." },
        { n: "03", title: "Construyo", desc: "Trabajo a la vista, compartiendo avances para que nunca estés a ciegas." },
        { n: "04", title: "Lanzamiento y soporte", desc: "Sale a producción y me quedo para que todo siga funcionando." },
      ],
    },
    contact: {
      label: "Contacto",
      title: "¿Tienes algo en mente?",
      bandTitle: "¿Listo para sacarte trabajo de encima?",
      sub: "Cuéntame un poco sobre tu negocio y qué te gustaría construir. Suelo responder en el día.",
      whatsapp: "Escribir por WhatsApp",
      email: "Enviar un email",
      form: { name: "Tu nombre", email: "Email", company: "Empresa (opcional)", message: "¿Qué necesitas?", messagePlaceholder: "Un sitio web, una automatización, una herramienta para gestionar…", send: "Enviar mensaje" },
    },
    footer: { tagline: "Software para negocios en crecimiento." },
  },
};

// ─── helpers ───
const esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
const arrow = `<svg width="17" height="17" viewBox="0 0 16 16" fill="none" class="arw" aria-hidden="true"><path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// Language: use a stored choice if present, otherwise detect from the browser
// (Spanish browsers get ES, everyone else EN). The visitor can still override.
function getLang() {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "en" || stored === "es") return stored;
  } catch (e) {}
  const nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  return nav.startsWith("es") ? "es" : "en";
}
function setLang(l) {
  try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
  render(l);
}

// Theme: stored choice wins, else follow the device's prefers-color-scheme.
const THEME_KEY = "tr_theme";
function getTheme() {
  try {
    const s = localStorage.getItem(THEME_KEY);
    if (s === "light" || s === "dark") return s;
  } catch (e) {}
  return (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
}
function applyTheme(t, animate) {
  const el = document.documentElement;
  if (animate) {
    el.classList.add("theme-anim");
    window.setTimeout(() => el.classList.remove("theme-anim"), 420);
  }
  el.dataset.theme = t;
}
function setTheme(t) {
  try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
  applyTheme(t, true);
}
function toggleTheme() {
  const cur = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  setTheme(cur === "dark" ? "light" : "dark");
}
// Follow the OS theme live, but only until the visitor picks one explicitly.
if (window.matchMedia) {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    let stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch (err) {}
    if (stored !== "light" && stored !== "dark") applyTheme(e.matches ? "dark" : "light", true);
  });
}

function waLink(lang) {
  const text = lang === "es"
    ? "Hola Tomás, me gustaría hablar sobre un proyecto."
    : "Hi Tomás, I'd like to talk about a project.";
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}

// ─── render ───
function render(lang) {
  const c = CONTENT[lang];
  const wa = waLink(lang);
  const mail = `mailto:${CONFIG.email}`;
  const h = c.heroBold;

  const ticker = [...new Set([...c.services.items.map((s) => s.short), ...c.hero.chips])];
  const tickerItem = ticker.map((it) => `<span style="padding-right:34px">${esc(it)}</span>`).join("");
  // Render an even number of identical groups so the -50% loop is seamless and
  // always fills the viewport (with only 2 copies a narrow set leaves a gap before reset).
  const tickerGroups = Array.from({ length: 6 }, () => `<div class="bticker-item">${tickerItem}</div>`).join("");

  const root = document.getElementById("root");
  root.style.setProperty("--accent", ACCENT);
  root.innerHTML = `
    <header class="bnav">
      <div class="bwrap bnav-in">
        <a href="#top" class="bbrand">${esc(CONFIG.name)}</a>
        <div class="bnav-right">
          <button class="btheme" type="button" data-theme-toggle aria-label="${lang === "es" ? "Cambiar tema" : "Toggle theme"}">
            <span class="btheme-thumb">
              <svg class="b-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4.4"/><path d="M12 1.5v2.2M12 20.3v2.2M3.5 3.5l1.6 1.6M18.9 18.9l1.6 1.6M1.5 12h2.2M20.3 12h2.2M3.5 20.5l1.6-1.6M18.9 5.1l1.6-1.6"/></svg>
              <svg class="b-moon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z"/></svg>
            </span>
          </button>
          <div class="blang">
            <button data-lang="en" class="${lang === "en" ? "on" : ""}">EN</button>
            <button data-lang="es" class="${lang === "es" ? "on" : ""}">ES</button>
          </div>
          <a href="#contact" class="bnav-cta">${esc(c.nav.cta)}</a>
        </div>
      </div>
    </header>

    <main>
      <section class="bhero" id="top">
        <div class="bwrap">
          <span class="bpill"><span class="bpulse"></span> ${esc(c.hero.availability)}</span>
          <h1 class="bdisplay">${esc(h.title[0])} <span class="hl">${esc(h.title[1])}</span></h1>
          <p class="bhero-sub">${esc(h.sub)}</p>
          <p class="bhero-kicker">${esc(h.kicker)}</p>
          <div class="bhero-cta">
            <a class="bbtn" href="${wa}">${esc(c.hero.ctaPrimary)} ${arrow}</a>
            <a class="bbtn bbtn-ghost" href="#work">${esc(c.hero.ctaSecondary)}</a>
          </div>
        </div>
        <div class="bticker" aria-hidden="true">
          <div class="bticker-track">${tickerGroups}</div>
        </div>
      </section>

      <section class="bsection" id="services">
        <div class="bwrap">
          <span class="blabel">${esc(c.services.label)}</span>
          <h2 class="bh2">${esc(c.services.title)}</h2>
          <div class="bsvc-grid">
            ${c.services.items.map((s) => `
              <article class="bsvc">
                <div class="bsvc-top"><span class="bsvc-n">${esc(s.n)}</span><span class="bsvc-ic"></span></div>
                <h3 class="bsvc-t">${esc(s.title)}</h3>
                <p class="bsvc-d">${esc(s.desc)}</p>
                <div class="bsvc-tags">${s.tags.map((tg) => `<span class="btag">${esc(tg)}</span>`).join("")}</div>
              </article>`).join("")}
          </div>
        </div>
      </section>

      <section class="bsection" id="work" style="background: var(--surface)">
        <div class="bwrap">
          <span class="blabel">${esc(c.work.label)}</span>
          <h2 class="bh2">${esc(c.work.title)}</h2>
          <div class="bwork">
            ${c.work.items.map((w, i) => {
              const shot = `<img class="bwork-shot" src="${esc(w.img)}" alt="${esc(w.name)}" loading="lazy" />`;
              return `
              <div class="bwork-row${i % 2 ? " flip" : ""}">
                ${w.url ? `<a href="${esc(w.url)}" target="_blank" rel="noopener" aria-label="${esc(w.name)}">${shot}</a>` : shot}
                <div class="bwork-txt">
                  <span class="bwork-kind">${esc(w.kind)}</span>
                  <h3 class="bwork-name">${esc(w.name)}</h3>
                  <p class="bwork-desc">${esc(w.desc)}</p>
                  <span class="bwork-res"><span class="bdot"></span> ${esc(w.result)}</span>
                </div>
              </div>`;
            }).join("")}
          </div>
        </div>
      </section>

      <section class="bband">
        <div class="bwrap bband-in">
          <h2>${esc(c.contact.bandTitle)}</h2>
          <a class="bbtn bbtn-dark" href="${wa}">${esc(c.hero.ctaPrimary)} ${arrow}</a>
        </div>
      </section>

      <section class="bsection" id="process">
        <div class="bwrap">
          <span class="blabel">${esc(c.process.label)}</span>
          <h2 class="bh2">${esc(c.process.title)}</h2>
          <div class="bproc-grid">
            ${c.process.steps.map((s) => `
              <div class="bproc">
                <span class="bproc-n">${esc(s.n)}</span>
                <h3 class="bproc-t">${esc(s.title)}</h3>
                <p class="bproc-d">${esc(s.desc)}</p>
              </div>`).join("")}
          </div>
        </div>
      </section>

      <section class="bcontact" id="contact">
        <div class="bwrap bcontact-in">
          <div>
            <span class="blabel">${esc(c.contact.label)}</span>
            <h2 class="bh2">${esc(c.contact.title)}</h2>
            <p class="bcontact-sub">${esc(c.contact.sub)}</p>
            <div class="bcontact-direct">
              <a class="bbtn bbtn-wa" href="${wa}">${esc(c.contact.whatsapp)}</a>
              <a class="bbtn bbtn-ghost" style="color: var(--on-dark); border-color: oklch(0.45 0.01 90)" href="${mail}">${esc(c.contact.email)}</a>
            </div>
          </div>
          <form class="bform" id="bform">
            <div class="bfield">
              <label>${esc(c.contact.form.name)}</label>
              <input type="text" name="name" required />
            </div>
            <div class="bfield-row">
              <div class="bfield"><label>${esc(c.contact.form.email)}</label><input type="email" name="email" required /></div>
              <div class="bfield"><label>${esc(c.contact.form.company)}</label><input type="text" name="company" /></div>
            </div>
            <div class="bfield">
              <label>${esc(c.contact.form.message)}</label>
              <textarea name="message" rows="3" required placeholder="${esc(c.contact.form.messagePlaceholder)}"></textarea>
            </div>
            <button type="submit" class="bbtn" style="justify-self: start">${esc(c.contact.form.send)} ${arrow}</button>
          </form>
        </div>
      </section>
    </main>

    <footer class="bfooter">
      <div class="bwrap bfooter-in">
        <span>© ${new Date().getFullYear()} ${esc(CONFIG.name)} — ${esc(c.footer.tagline)}</span>
        <div class="bfooter-links">
          <a href="${wa}">WhatsApp</a>
          <a href="${mail}">Email</a>
        </div>
      </div>
    </footer>
  `;

  // wire language toggle
  root.querySelectorAll(".blang button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // wire theme toggle
  const themeBtn = root.querySelector("[data-theme-toggle]");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  // wire contact form → opens the visitor's email app
  const form = document.getElementById("bform");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "New project";
    const company = data.get("company");
    const subject = encodeURIComponent(`${CONFIG.name} — ${name}`);
    const body = encodeURIComponent(`${name}${company ? " · " + company : ""}\n${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  });
}

applyTheme(getTheme(), false);
render(getLang());
