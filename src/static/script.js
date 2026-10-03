const WHATSAPP = "243819722300";
const EMAIL = "congointernational.logistics@gmail.com";

// French translations (English is the default text in the HTML)
const FR = {
  "nav.services": "Services", "nav.tracking": "Suivi", "nav.about": "À propos",
  "nav.process": "Comment ça marche", "nav.contact": "Contact", "nav.quote": "Demander un devis",
  "hero.eyebrow": "Kinshasa · Afrique du Sud · Monde entier",
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
,
  // multi-page additions
  "tagline": "Connecter le Congo au monde",
  "hero2.l1": "Solutions logistiques", "hero2.l2": "fiables",
  "hero2.sub": "Pour un Congo plus fort et un avenir mondial", "hero2.cta2": "Nos services",
  "svc.more": "En savoir plus", "about.more": "En savoir plus sur nous", "about.who": "Qui sommes-nous",
  "tool.calc": "Calculez le CBM et le poids taxable en quelques secondes.",
  "tool.faq": "Documents, délais, assurance et plus encore.",
  "cta.title": "Prêt à expédier avec CIL ?",
  "cta.text": "Dites-nous ce que vous devez transporter et nous vous enverrons un devis — généralement en quelques heures.",
  "footer.pages": "Pages",
  "mvv.eyebrow": "Ce qui nous anime", "mvv.title": "Mission, vision et valeurs",
  "mvv.m.t": "Notre mission", "mvv.m.d": "Connecter le Congo au monde grâce à une logistique fiable, transparente et efficace — du premier devis à la livraison finale.",
  "mvv.v.t": "Notre vision", "mvv.v.d": "Un Congo plus fort et un avenir mondial, où les entreprises congolaises commercent facilement avec tous les marchés.",
  "mvv.val.t": "Nos valeurs", "mvv.val.d": "Fiabilité, transparence, expertise locale et respect de chaque client et de chaque envoi.",
  "offices.eyebrow": "Où nous trouver", "offices.title": "Nos bureaux",
  "offices.kin": "Kinshasa — Siège social", "offices.sa": "Afrique du Sud",
  "offices.sa.d": "Notre contact en Afrique du Sud accompagne les expéditions vers et depuis l'Afrique australe.",
  "s1.b1": "Conteneurs FCL et LCL", "s1.b2": "Port à port ou porte-à-porte", "s1.b3": "Réservation, documents et connaissement",
  "s2.b1": "Envois urgents et express", "s2.b2": "Fret aérien groupé", "s2.b3": "Enlèvement et livraison à l'aéroport",
  "s3.b1": "Chargements complets et partiels", "s3.b2": "Transport transfrontalier", "s3.b3": "Livraison partout en RDC",
  "s4.b1": "Déclarations d'import et d'export", "s4.b2": "Droits et taxes", "s4.b3": "Permis et certificats",
  "s5.b1": "Stockage sécurisé", "s5.b2": "Gestion des stocks", "s5.b3": "Emballage et livraison du dernier kilomètre",
  "s6.b1": "Charges lourdes et hors gabarit", "s6.b2": "Études d'itinéraire et permis", "s6.b3": "Livraison sur sites miniers et industriels",
  "s7.b1": "Approvisionnement international", "s7.b2": "Coordination de la manutention portuaire", "s7.b3": "Appui au commerce d'import et d'export",
  "s8.b1": "Recherche de biens et équipements", "s8.b2": "Achat pour le compte des clients", "s8.b3": "Expédition et livraison incluses",
  "tip.cbm": "Mètre cube : longueur × largeur × hauteur en mètres. Sert à calculer le prix du fret maritime.",
  "tip.volw": "Une marchandise légère mais encombrante est facturée selon l'espace qu'elle occupe, pas seulement selon son poids.",
  "tip.charge": "Le plus élevé entre le poids réel et le poids volumétrique — c'est ce que vous payez.",
  "faq.side": "Encore une question ?",
  "q6": "Pouvez-vous acheter des biens ou des équipements pour moi à l'étranger ?",
  "a6": "Oui. Grâce à notre service d'achat et de vente, nous pouvons trouver des biens et équipements pour vous, puis gérer l'expédition, la douane et la livraison. Contactez-nous avec vos besoins.",
  "q7": "Transportez-vous des engins miniers lourds ?",
  "a7": "Oui. Nous transférons des équipements et engins industriels et miniers, y compris des charges hors gabarit. Indiquez-nous les dimensions et le poids et nous planifierons l'itinéraire.",
  "contact.sub": "Demandez un devis, suivez un envoi ou appelez-nous simplement sur WhatsApp."
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

const $ = id => document.getElementById(id);
const page = document.body.dataset.page;

// ---------- Language ----------
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
try { if (localStorage.getItem("cil-lang") === "fr") setLang("fr"); } catch (e) {}

// ---------- Toast ----------
let toastTimer;
function toast(text) {
  const t = $("toast");
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
}
function flash(el) { el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash"); }

// ---------- Menu ----------
const nav = $("nav");
const toggle = $("menuToggle");
function setMenu(open) {
  nav.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
$("navBackdrop").addEventListener("click", () => setMenu(false));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
window.addEventListener("resize", () => { if (innerWidth > 860) setMenu(false); });

// Home link and logo: on the home page, smooth scroll back to the top instead of reloading
document.querySelectorAll("[data-home-link]").forEach(a => a.addEventListener("click", e => {
  if (page !== "home") return;
  e.preventDefault();
  setMenu(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
}));

// ---------- Scroll effects ----------
const header = document.querySelector(".header");
const progress = $("progress");
const toTop = $("toTop");
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

const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".service, .steps li, .contact-card, .about-visual, .about-copy, .stat, .mvv, .office, .tool-card, .tips article").forEach(el => {
  el.classList.add("reveal"); io.observe(el);
});

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

// Home hero: the photo drifts gently with the mouse
const hero2 = document.querySelector(".hero2");
if (hero2 && matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) {
  const media = hero2.querySelector(".hero2-media");
  hero2.addEventListener("pointermove", e => {
    const r = hero2.getBoundingClientRect();
    media.style.setProperty("--px", ((e.clientX - r.left) / r.width - .5) * -18 + "px");
    media.style.setProperty("--py", ((e.clientY - r.top) / r.height - .5) * -12 + "px");
  });
  hero2.addEventListener("pointerleave", () => { media.style.setProperty("--px", "0px"); media.style.setProperty("--py", "0px"); });
}

// ---------- Tracking → WhatsApp ----------
const trackForm = $("trackForm");
if (trackForm) trackForm.addEventListener("submit", e => {
  e.preventDefault();
  const no = $("trackNo").value.trim();
  const msg = lang === "fr"
    ? `Bonjour CIL, je voudrais connaître le statut de mon envoi : ${no}`
    : `Hello CIL, I would like a status update on my shipment: ${no}`;
  toast(MSG[lang].wa);
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
});

// ---------- Quote form (contact page) ----------
const quoteForm = $("quoteForm");
if (quoteForm) {
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
      `Service: ${d.mode}`,
      `${fr ? "Origine" : "Origin"}: ${d.from}`,
      `Destination: ${d.to}`,
      `${fr ? "Poids / Volume" : "Weight / Volume"}: ${d.weight || "-"}`,
      `${fr ? "Marchandises" : "Goods"}: ${d.goods || "-"}`
    ].join("\n");
    if (sendVia === "mail") {
      toast(MSG[lang].mail);
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(fr ? "Demande de devis" : "Quote request")}&body=${encodeURIComponent(body)}`;
    } else {
      toast(MSG[lang].wa);
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(body)}`, "_blank");
    }
  });

  // Prefill from "Quote this service" links and the calculator (contact?service=3&weight=...)
  const params = new URLSearchParams(location.search);
  const mode = quoteForm.elements.mode;
  const service = +params.get("service");
  if (service >= 1 && service <= mode.options.length) {
    mode.selectedIndex = service - 1;
    setTimeout(() => { flash(mode); toast(params.get("weight") ? MSG[lang].filled : MSG[lang].picked(mode.value)); }, 500);
  }
  if (params.get("weight")) {
    quoteForm.elements.weight.value = params.get("weight");
    setTimeout(() => flash(quoteForm.elements.weight), 500);
  }
}

// ---------- Cargo calculator (calculator page) ----------
if ($("calcToQuote")) {
  let calcMode = "sea";
  const fmt = (n, d = 2) => n.toLocaleString(lang === "fr" ? "fr-FR" : "en-US", { maximumFractionDigits: d, minimumFractionDigits: 0 });
  const setVal = (id, text) => {
    const el = $(id);
    if (el.textContent !== text) { el.textContent = text; el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); }
  };
  const calc = () => {
    const L = +$("cL").value || 0, W = +$("cW").value || 0, H = +$("cH").value || 0;
    const kg = +$("cKg").value || 0, qty = Math.max(1, +$("cQty").value || 1);
    const cbm = (L * W * H / 1e6) * qty;
    const gross = kg * qty;
    setVal("rVol", fmt(cbm, 3));
    setVal("rGross", fmt(gross, 1));
    if (calcMode === "sea") {
      const rt = Math.max(cbm, gross / 1000);     // revenue ton: 1 m³ = 1,000 kg
      setVal("rVolW", fmt(cbm * 1000, 1));
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
  };
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
    const weight = `${$("cQty").value} pcs · ${$("rVol").textContent} m³ · ${$("rGross").textContent} kg (${$("cL").value}×${$("cW").value}×${$("cH").value} cm)`;
    location.href = `contact?service=${calcMode === "sea" ? 1 : 2}&weight=${encodeURIComponent(weight)}#quote`;
  });
}

// ---------- FAQ: one answer open at a time ----------
document.querySelectorAll(".faq details").forEach(d => d.addEventListener("toggle", () => {
  if (d.open) document.querySelectorAll(".faq details").forEach(o => { if (o !== d) o.open = false; });
}));

$("year").textContent = new Date().getFullYear();
