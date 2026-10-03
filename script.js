const WHATSAPP = "243819722300";
const EMAIL = "congointernational.logistics@gmail.com";

// French translations (English is the default text in the HTML)
const FR = {
  "nav.services": "Services", "nav.tracking": "Suivi", "nav.about": "À propos",
  "nav.process": "Comment ça marche", "nav.contact": "Contact", "nav.quote": "Demander un devis",
  "hero.eyebrow": "Kinshasa · Johannesburg · Monde entier",
  "hero.title": "Nous transportons vos marchandises à travers l'Afrique et le monde",
  "hero.text": "Fret maritime, fret aérien, transport routier, dédouanement et entreposage — gérés de bout en bout par un partenaire de confiance en République Démocratique du Congo.",
  "hero.cta1": "Demander un devis", "hero.cta2": "Suivre un envoi",
  "track.title": "Suivez votre envoi",
  "track.text": "Entrez votre numéro de suivi, de B/L ou d'AWB et notre équipe vous enverra l'état actuel.",
  "track.ph": "ex. CIL-2026-004512", "track.btn": "Suivre",
  "track.note": "Ouvre WhatsApp avec votre numéro de suivi.",
  "stats.1": "Services et activités", "stats.2": "Bureaux régionaux (RDC et Afrique du Sud)",
  "stats.3": "Suivi des expéditions", "stats.4": "Couverture porte-à-porte",
  "services.eyebrow": "Nos services", "services.title": "Des solutions logistiques complètes",
  "services.text": "D'un simple colis aux conteneurs complets et cargaisons lourdes, nous gérons chaque étape de la chaîne d'approvisionnement.",
  "s1.t": "Fret maritime", "s1.d": "Expédition de conteneurs FCL et LCL via Matadi, Dar es Salaam, Durban, Mombasa et les grands ports mondiaux.",
  "s2.t": "Fret aérien", "s2.d": "Fret aérien rapide et sécurisé pour les marchandises urgentes et de valeur, avec options de groupage et express.",
  "s3.t": "Transport routier", "s3.d": "Camionnage transfrontalier en RDC, Zambie, Tanzanie et Afrique du Sud — charges complètes ou partielles.",
  "s4.t": "Dédouanement", "s4.d": "Déclarations d'import/export, droits, permis et documents traités par des agents expérimentés.",
  "s5.t": "Entreposage et distribution", "s5.d": "Stockage sécurisé, gestion des stocks, emballage et livraison du dernier kilomètre.",
  "s6.t": "Transfert des équipements et engins industriels et miniers", "s6.d": "Transport des équipements et engins industriels et miniers — charges hors gabarit et lourdes, avec études d'itinéraire.",
  "s7.t": "Commerce maritime", "s7.d": "Services de commerce maritime reliant la RDC aux marchés internationaux, de l'approvisionnement à la livraison au port.",
  "s8.t": "Achat et vente des biens et équipements", "s8.d": "Nous achetons et vendons des biens et équipements pour le compte de nos clients, et pouvons gérer l'expédition de bout en bout.",
  "about.badge": "Enregistrée à Kinshasa, RDC", "about.eyebrow": "À propos",
  "about.title": "Votre porte d'entrée vers l'Afrique centrale",
  "about.p1": "Congo International Logistics SARL est une société de transit, de logistique et de commerce dont le siège est à Limete, Kinshasa, avec une présence en Afrique du Sud. Nous relions les entreprises de la RDC aux fournisseurs et marchés du monde entier.",
  "about.p2": "Notre équipe connaît les ports, frontières et réglementations locales : vos marchandises circulent plus vite, en toute sécurité et en toute transparence.",
  "about.c1": "Expertise locale des douanes et frontières de la RDC", "about.c2": "Tarifs compétitifs et transparents",
  "about.c3": "Mises à jour en temps réel par WhatsApp et e-mail", "about.c4": "Assurance marchandises disponible",
  "process.eyebrow": "Comment ça marche", "process.title": "Expédier simplement en 4 étapes",
  "p1.t": "Demandez un devis", "p1.d": "Dites-nous ce que vous expédiez, d'où et vers où.",
  "p2.t": "Réservation et documents", "p2.d": "Nous organisons l'espace, les formalités et les documents douaniers.",
  "p3.t": "Transport et suivi", "p3.d": "Vos marchandises voyagent par mer, air ou route avec des mises à jour régulières.",
  "p4.t": "Dédouanement et livraison", "p4.d": "Nous dédouanons et livrons à votre porte.",
  "quote.eyebrow": "Devis gratuit", "quote.title": "Obtenez un devis d'expédition aujourd'hui",
  "quote.text": "Remplissez les détails et envoyez-les directement à notre équipe par WhatsApp ou par e-mail. Nous répondons généralement en quelques heures.",
  "f.name": "Nom complet", "f.phone": "Téléphone", "f.from": "Origine", "f.to": "Destination",
  "f.fromPh": "ex. Shanghai, Chine", "f.toPh": "ex. Kinshasa, RDC", "f.mode": "Service",
  "f.weight": "Poids / Volume", "f.weightPh": "ex. 1x40 pieds ou 500 kg",
  "f.goods": "Description des marchandises", "f.wa": "Envoyer par WhatsApp", "f.mail": "Envoyer par e-mail",
  "contact.eyebrow": "Contact", "contact.title": "Parlez à notre équipe",
  "contact.phone": "Téléphone", "contact.office": "Siège social",
  "footer.tag": "Des solutions fiables de transport, fret et cargo depuis le cœur de l'Afrique.",
  "footer.rights": "Tous droits réservés.",
  "nav.home": "Accueil", "footer.built": "Conçu par", "mb.call": "Appeler", "mb.quote": "Devis",
  "nav.calc": "Calculateur", "svc.cta": "Devis pour ce service",
  "calc.eyebrow": "Outil gratuit", "calc.title": "Calculateur de volume et de poids",
  "calc.text": "Mesurez vos colis et voyez le volume (CBM) et le poids taxable avant de demander un devis.",
  "c.l": "Longueur (cm)", "c.w": "Largeur (cm)", "c.h": "Hauteur (cm)", "c.kg": "Poids par colis (kg)",
  "c.qty": "Nombre de colis", "c.vol": "Volume total", "c.gross": "Poids brut total",
  "c.volw": "Poids volumétrique", "c.charge": "Poids taxable", "c.use": "Utiliser dans mon devis",
  "c.disc": "Estimations uniquement, selon les ratios standards du secteur (maritime 1 m³ = 1 000 kg · aérien 6 000 cm³ = 1 kg). Votre prix final est confirmé dans votre devis.",
  "faq.title": "Questions fréquentes", "faq.text": "Vous ne trouvez pas votre réponse ? Écrivez-nous sur WhatsApp — nous sommes là pour vous aider.",
  "faq.cta": "Poser une question",
  "q1": "Quels documents faut-il pour importer en RDC ?",
  "a1": "Généralement une facture commerciale, une liste de colisage et un connaissement ou une lettre de transport aérien, ainsi que les certificats exigés pour votre type de marchandises. Nous vérifions votre dossier et vous indiquons exactement ce qu'il faut avant l'expédition.",
  "q2": "Combien de temps dure l'expédition ?",
  "a2": "Cela dépend de l'origine, du mode de transport et de la douane. L'aérien est le plus rapide ; le maritime est le plus économique pour les gros volumes. Nous indiquons un délai estimé avec chaque devis.",
  "q3": "Pouvez-vous récupérer les marchandises chez mon fournisseur à l'étranger ?",
  "a3": "Oui. Nous proposons un service porte-à-porte : enlèvement chez votre fournisseur, transport, dédouanement et livraison à votre adresse.",
  "q4": "Ma marchandise est-elle assurée ?",
  "a4": "L'assurance marchandises est disponible sur demande. Indiquez la valeur de vos marchandises lors de votre demande de devis et nous inclurons le coût de l'assurance.",
  "q5": "Comment suivre mon envoi ?",
  "a5": "Envoyez votre numéro de suivi, de B/L ou d'AWB via le formulaire de suivi ou WhatsApp, et notre équipe vous répondra avec le dernier statut."
};

// Short UI messages used by the interactive features
const MSG = {
  en: { wa: "Opening WhatsApp…", mail: "Opening your email app…", filled: "Calculator results added to your quote ✓",
        picked: s => `${s} selected — fill in the rest below`,
        seaNote: (c, w) => `Sea freight is charged on whichever is higher: ${c} m³ or ${w} t.`,
        airNote: "Air freight is charged on the higher of actual and volumetric weight.",
        rt: "W/M (revenue ton)" },
  fr: { wa: "Ouverture de WhatsApp…", mail: "Ouverture de votre messagerie…", filled: "Résultats ajoutés à votre devis ✓",
        picked: s => `${s} sélectionné — complétez le reste ci-dessous`,
        seaNote: (c, w) => `Le maritime est facturé sur la valeur la plus élevée : ${c} m³ ou ${w} t.`,
        airNote: "L'aérien est facturé sur le plus élevé du poids réel et du poids volumétrique.",
        rt: "W/M (tonne payante)" }
};

// Remember the original English text so we can switch back
const EN = {};
document.querySelectorAll("[data-i18n]").forEach(el => { EN[el.dataset.i18n] = el.textContent; });
document.querySelectorAll("[data-i18n-ph]").forEach(el => { EN[el.dataset.i18nPh] = el.placeholder; });

let lang = "en";
function setLang(next) {
  lang = next;
  const dict = next === "fr" ? FR : EN;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = dict[el.dataset.i18n]; if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const v = dict[el.dataset.i18nPh]; if (v) el.placeholder = v;
  });
  document.querySelectorAll(".lang-switch button").forEach(b => b.classList.toggle("active", b.dataset.lang === next));
  try { localStorage.setItem("cil-lang", next); } catch (e) {}
  document.dispatchEvent(new Event("langchange"));
}
document.querySelectorAll(".lang-switch button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
try { const saved = localStorage.getItem("cil-lang"); if (saved === "fr") setLang("fr"); } catch (e) {}

// Mobile menu
const nav = document.getElementById("nav");
const toggle = document.getElementById("menuToggle");
function setMenu(open) {
  nav.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.getElementById("navBackdrop").addEventListener("click", () => setMenu(false));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
window.addEventListener("resize", () => { if (innerWidth > 860) setMenu(false); });

// Home link and logo → smooth scroll back to the very top
document.querySelectorAll('a[href="#top"]').forEach(a => a.addEventListener("click", e => {
  e.preventDefault();
  setMenu(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, "", location.pathname);
}));

// Tracking → WhatsApp
document.getElementById("trackForm").addEventListener("submit", e => {
  e.preventDefault();
  const no = document.getElementById("trackNo").value.trim();
  const msg = lang === "fr"
    ? `Bonjour CIL, je voudrais connaître le statut de mon envoi : ${no}`
    : `Hello CIL, I would like a status update on my shipment: ${no}`;
  toast(MSG[lang].wa);
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
});

// Quote → WhatsApp or email
const quoteForm = document.getElementById("quoteForm");
let sendVia = "wa";
quoteForm.querySelectorAll("[data-send]").forEach(b => b.addEventListener("click", () => { sendVia = b.dataset.send; }));
quoteForm.addEventListener("submit", e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(quoteForm));
  const fr = lang === "fr";
  const body = [
    fr ? "Demande de devis – Congo International Logistics" : "Quote request – Congo International Logistics",
    "",
    `${fr ? "Nom" : "Name"}: ${d.name}`,
    `${fr ? "Téléphone" : "Phone"}: ${d.phone}`,
    `${fr ? "Service" : "Service"}: ${d.mode}`,
    `${fr ? "Origine" : "Origin"}: ${d.from}`,
    `${fr ? "Destination" : "Destination"}: ${d.to}`,
    `${fr ? "Poids / Volume" : "Weight / Volume"}: ${d.weight || "-"}`,
    `${fr ? "Marchandises" : "Goods"}: ${d.goods || "-"}`
  ].join("\n");
  if (sendVia === "mail") {
    const subject = fr ? "Demande de devis" : "Quote request";
    toast(MSG[lang].mail);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } else {
    toast(MSG[lang].wa);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(body)}`, "_blank");
  }
});

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".service, .steps li, .contact-card, .about-visual, .about-copy, .stat").forEach(el => {
  el.classList.add("reveal"); io.observe(el);
});

document.getElementById("year").textContent = new Date().getFullYear();

// ===== Interactive features =====

// Toast messages
let toastTimer;
function toast(text) {
  const t = document.getElementById("toast");
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
}

// Scroll progress, header shrink, back-to-top
const header = document.querySelector(".header");
const progress = document.getElementById("progress");
const toTop = document.getElementById("toTop");
function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
  header.classList.toggle("scrolled", y > 40);
  toTop.classList.toggle("show", y > 700);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Highlight the nav link of the section on screen
const navLinks = [...nav.querySelectorAll('a[href^="#"]:not(.btn)')];
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const id = en.target.id === "home" ? "top" : en.target.id;
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
// watch every section, so ones without a menu link clear the highlight
document.querySelectorAll("section[id]").forEach(sec => spy.observe(sec));

// Count-up numbers
const counter = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, end = +el.dataset.count, suffix = el.dataset.suffix || "";
    const start = performance.now(), dur = 1400;
    (function tick(now) {
      const p = Math.min((now - start) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(start);
    counter.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll("[data-count]").forEach(el => counter.observe(el));

// Spotlight that follows the cursor on service cards
document.querySelectorAll(".service").forEach(card => {
  card.addEventListener("pointermove", e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  });
});

// "Quote this service" → preselect it in the quote form
const modeSelect = quoteForm.elements.mode;
function flash(el) { el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash"); }
document.querySelectorAll(".service-link").forEach(btn => btn.addEventListener("click", () => {
  modeSelect.selectedIndex = +btn.dataset.service - 1;
  document.getElementById("quote").scrollIntoView({ behavior: "smooth" });
  flash(modeSelect);
  toast(MSG[lang].picked(modeSelect.value));
  setTimeout(() => quoteForm.elements.name.focus({ preventScroll: true }), 700);
}));

// Cargo calculator
const $ = id => document.getElementById(id);
let calcMode = "sea";
const fmt = (n, d = 2) => n.toLocaleString(lang === "fr" ? "fr-FR" : "en-US", { maximumFractionDigits: d, minimumFractionDigits: 0 });
function setVal(id, text) {
  const el = $(id);
  if (el.textContent !== text) { el.textContent = text; el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); }
}
function calc() {
  const L = +$("cL").value || 0, W = +$("cW").value || 0, H = +$("cH").value || 0;
  const kg = +$("cKg").value || 0, qty = Math.max(1, +$("cQty").value || 1);
  const cbm = (L * W * H / 1e6) * qty;
  const gross = kg * qty;
  setVal("rVol", fmt(cbm, 3));
  setVal("rGross", fmt(gross, 1));
  if (calcMode === "sea") {
    const volW = cbm * 1000;                    // 1 m³ = 1,000 kg
    const rt = Math.max(cbm, gross / 1000);     // revenue ton
    setVal("rVolW", fmt(volW, 1));
    $("rVolNote").textContent = "kg (1 m³ = 1 000 kg)";
    setVal("rCharge", fmt(rt, 3));
    $("rChargeUnit").textContent = MSG[lang].rt;
    $("calcNote").textContent = MSG[lang].seaNote(fmt(cbm, 3), fmt(gross / 1000, 3));
  } else {
    const volW = (L * W * H / 6000) * qty;      // IATA 6,000 cm³/kg
    setVal("rVolW", fmt(volW, 1));
    $("rVolNote").textContent = "kg (÷ 6000)";
    setVal("rCharge", fmt(Math.max(gross, volW), 1));
    $("rChargeUnit").textContent = "kg";
    $("calcNote").textContent = MSG[lang].airNote;
  }
}
["cL", "cW", "cH", "cKg", "cQty"].forEach(id => $(id).addEventListener("input", calc));
document.querySelectorAll(".stepper button").forEach(b => b.addEventListener("click", () => {
  const q = $("cQty");
  q.value = Math.max(1, (+q.value || 1) + +b.dataset.step);
  calc();
}));
document.querySelectorAll(".seg button").forEach(b => b.addEventListener("click", () => {
  calcMode = b.dataset.mode;
  document.querySelectorAll(".seg button").forEach(x => x.classList.toggle("active", x === b));
  calc();
}));
document.addEventListener("langchange", calc);
calc();

$("calcToQuote").addEventListener("click", () => {
  const qty = $("cQty").value;
  const w = quoteForm.elements.weight;
  w.value = `${qty} pcs · ${$("rVol").textContent} m³ · ${$("rGross").textContent} kg (${$("cL").value}×${$("cW").value}×${$("cH").value} cm)`;
  modeSelect.selectedIndex = calcMode === "sea" ? 0 : 1;
  document.getElementById("quote").scrollIntoView({ behavior: "smooth" });
  flash(w); flash(modeSelect);
  toast(MSG[lang].filled);
});

// Only one FAQ answer open at a time
document.querySelectorAll(".faq details").forEach(d => d.addEventListener("toggle", () => {
  if (d.open) document.querySelectorAll(".faq details").forEach(o => { if (o !== d) o.open = false; });
}));
