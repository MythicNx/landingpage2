/* ============================================================
   Maison Pratique — سلوك الصفحة
   ============================================================ */

/* ====== إعدادات الإرسال: غيّر رابط استقبال الطلبات هنا ====== */
const ENDPOINT = "https://example.com/api/orders"; // TODO: ضع رابط الاستقبال الحقيقي (Sheet / API / سيرفرك)

/* ====== الأسعار والرسوم (ثابتة) ====== */
const PACKAGES = [
  { id: 1, price: 4900,  save: 0 },
  { id: 2, price: 8900,  save: 900 },
  { id: 3, price: 12500, save: 2200 },
];
const DELIVERY_FEES = { home: 800, office: 600 };

/* ====== الترجمات ====== */
const I18N = {
  ar: {
    skip: "تخطَّ إلى استمارة الطلب",
    "nav.order": "اطلب الآن",
    "badge.limited": "عرض لفترة محدودة",
    "product.title": "درج منزلق قابل للتعديل لخزائن المطبخ",
    "product.subtitle": "نظام تخزين منزلق يُركَّب داخل خزانتك الموجودة ليسحب محتوياتها إليك بسهولة، بدل إدخال يدك إلى أعماق الخزانة.",
    "price.saveBadge": "وفّر 700 دج",
    "form.color": "اللون المختار",
    "color.black": "أسود",
    "color.white": "أبيض",
    "form.pack": "اختر الباقة",
    "pack.1": "قطعة واحدة",
    "pack.2": "قطعتان",
    "pack.3": "3 قطع",
    "pack.save": "توفير {n}",
    "form.name": "الاسم الكامل",
    "ph.name": "اكتب اسمك",
    "form.phone": "رقم الهاتف",
    "ph.phone": "مثال: 0550123456",
    "form.wilaya": "الولاية",
    "ph.wilaya": "اختر الولاية",
    "form.commune": "البلدية",
    "ph.commune": "اكتب البلدية",
    "form.delivery": "طريقة التوصيل",
    "del.home": "توصيل إلى المنزل",
    "del.office": "توصيل إلى المكتب",
    "sum.title": "ملخص الطلب",
    "sum.pack": "الباقة",
    "sum.delivery": "التوصيل",
    "sum.save": "توفيرك",
    "sum.total": "المجموع",
    "form.submit": "تأكيد الطلب — الدفع عند الاستلام",
    "err.name": "الاسم يجب أن يكون 3 أحرف على الأقل",
    "err.phone": "أدخل رقم هاتف جزائري صحيح (05/06/07 + 8 أرقام)",
    "err.wilaya": "اختر الولاية",
    "err.commune": "اكتب البلدية",
    "err.general": "تعذّر إرسال الطلب، حاول مرة أخرى",
    "success.title": "تم استلام طلبك بنجاح",
    "success.text": "سنتصل بك قريباً لتأكيد الطلب. الدفع عند الاستلام.",
    "trust1.t": "الدفع عند الاستلام", "trust1.s": "ادفع لعامل التوصيل عند استلام طلبك",
    "trust2.t": "توصيل إلى 69 ولاية", "trust2.s": "رسوم ثابتة لكل الولايات",
    "trust3.t": "توصيل منزلي أو مكتبي", "trust3.s": "اختر ما يناسبك",
    "trust4.t": "نتصل بك للتأكيد", "trust4.s": "نتصل بك قبل الشحن",
    "features.heading": "لماذا هذا الدرج؟",
    "features.sub": "حل عملي يحوّل خزانتك العميقة إلى مساحة تخزين تُسحب إليك",
    "f1.t": "قضبان تلسكوبية", "f1.s": "قضبان تلسكوبية تسمح بتمديد الدرج وإرجاعه بسهولة وسلاسة.",
    "f2.t": "عرض قابل للتعديل", "f2.s": "يتراوح العرض من 32 إلى 52 سم ليناسب خزائن بمقاسات مختلفة.",
    "f3.t": "طقم من درجين", "f3.s": "القطعة الواحدة عبارة عن طقم من درجين.",
    "f4.t": "تخزين متعدد الاستخدامات", "f4.s": "للقدور والمقالي، مواد التنظيف أسفل الحوض، أدوات المطبخ وعلب الطعام.",
    "uses.heading": "استخدامات متعددة",
    "uses.sub": "مطبخ منظم بأناقة — وصول كامل لكل شيء",
    "faq.heading": "أسئلة شائعة",
    "q1": "هل أدفع قبل الاستلام؟", "a1": "لا، الدفع عند الاستلام لعامل التوصيل.",
    "q2": "متى يصل الطلب؟", "a2": "نتصل بك لتأكيد الطلب ثم نرسله، والمدة تختلف حسب الولاية. التوصيل إلى المكتب 600 دج وإلى المنزل 800 دج.",
    "q3": "ما العرض القابل للتعديل؟", "a3": "يتراوح من 32 إلى 52 سم ليناسب خزائن بمقاسات مختلفة.",
    "q4": "ماذا أستطيع أن أخزّن فيه؟", "a4": "القدور والمقالي، مواد التنظيف أسفل الحوض، أدوات المطبخ وعلب الطعام.",
    "q5": "كم درجاً في القطعة الواحدة؟", "a5": "طقم من درجين.",
    "q6": "هل يمكنني طلب أكثر من قطعة؟", "a6": "نعم، اختر قطعتين أو 3 في الاستمارة، وكلما زادت الكمية زاد التوفير.",
    "footer.tagline": "حلول عملية لمنزلك",
    "bar.order": "اطلب الآن",
    "bar.total": "المجموع مع التوصيل",
    currency: "دج",
  },
  fr: {
    skip: "Aller au formulaire de commande",
    "nav.order": "Commander",
    "badge.limited": "Offre à durée limitée",
    "product.title": "Tiroir coulissant ajustable pour meubles de cuisine",
    "product.subtitle": "Un système de rangement coulissant qui s'installe dans votre meuble existant pour tirer le contenu vers vous, sans plonger le bras au fond du placard.",
    "price.saveBadge": "Économisez 700 DA",
    "form.color": "Couleur choisie",
    "color.black": "Noir",
    "color.white": "Blanc",
    "form.pack": "Choisissez le pack",
    "pack.1": "1 pièce",
    "pack.2": "2 pièces",
    "pack.3": "3 pièces",
    "pack.save": "Économie {n}",
    "form.name": "Nom complet",
    "ph.name": "Votre nom",
    "form.phone": "Numéro de téléphone",
    "ph.phone": "Ex : 0550123456",
    "form.wilaya": "Wilaya",
    "ph.wilaya": "Choisir la wilaya",
    "form.commune": "Commune",
    "ph.commune": "Votre commune",
    "form.delivery": "Mode de livraison",
    "del.home": "Livraison à domicile",
    "del.office": "Livraison au bureau",
    "sum.title": "Résumé de la commande",
    "sum.pack": "Pack",
    "sum.delivery": "Livraison",
    "sum.save": "Votre économie",
    "sum.total": "Total",
    "form.submit": "Confirmer la commande — Paiement à la livraison",
    "err.name": "Le nom doit contenir au moins 3 caractères",
    "err.phone": "Numéro algérien invalide (05/06/07 + 8 chiffres)",
    "err.wilaya": "Choisissez la wilaya",
    "err.commune": "Indiquez la commune",
    "err.general": "Échec de l'envoi, veuillez réessayer",
    "success.title": "Commande reçue avec succès",
    "success.text": "Nous vous appellerons bientôt pour confirmer. Paiement à la livraison.",
    "trust1.t": "Paiement à la livraison", "trust1.s": "Payez le livreur à la réception",
    "trust2.t": "Livraison 69 wilayas", "trust2.s": "Frais fixes pour toutes les wilayas",
    "trust3.t": "Domicile ou bureau", "trust3.s": "Choisissez ce qui vous convient",
    "trust4.t": "Appel de confirmation", "trust4.s": "Nous vous appelons avant l'envoi",
    "features.heading": "Pourquoi ce tiroir ?",
    "features.sub": "Une solution pratique qui transforme votre placard profond en rangement coulissant",
    "f1.t": "Glissières télescopiques", "f1.s": "Des glissières télescopiques permettent d'étendre et de refermer le tiroir facilement.",
    "f2.t": "Largeur ajustable", "f2.s": "De 32 à 52 cm pour s'adapter à différentes tailles de meubles.",
    "f3.t": "Kit de 2 tiroirs", "f3.s": "Chaque pièce est un kit composé de deux tiroirs.",
    "f4.t": "Rangement multi-usages", "f4.s": "Casseroles et poêles, produits de nettoyage sous l'évier, ustensiles et boîtes alimentaires.",
    "uses.heading": "Utilisations multiples",
    "uses.sub": "Une cuisine organisée avec élégance — accès complet à tout",
    "faq.heading": "Questions fréquentes",
    "q1": "Dois-je payer avant la réception ?", "a1": "Non, le paiement se fait à la livraison.",
    "q2": "Quand arrive ma commande ?", "a2": "Nous vous appelons pour confirmer puis nous expédions ; le délai varie selon la wilaya. Livraison bureau 600 DA, domicile 800 DA.",
    "q3": "Quelle est la largeur ajustable ?", "a3": "De 32 à 52 cm pour s'adapter à différentes tailles de meubles.",
    "q4": "Que puis-je y ranger ?", "a4": "Casseroles et poêles, produits de nettoyage sous l'évier, ustensiles de cuisine et boîtes alimentaires.",
    "q5": "Combien de tiroirs par pièce ?", "a5": "Un kit de deux tiroirs.",
    "q6": "Puis-je commander plus d'une pièce ?", "a6": "Oui, choisissez 2 ou 3 pièces dans le formulaire : plus la quantité augmente, plus l'économie est grande.",
    "footer.tagline": "Des solutions pratiques pour votre maison",
    "bar.order": "Commander",
    "bar.total": "Total avec livraison",
    currency: "DA",
  },
  en: {
    skip: "Skip to order form",
    "nav.order": "Order now",
    "badge.limited": "Limited-time offer",
    "product.title": "Adjustable pull-out drawer for kitchen cabinets",
    "product.subtitle": "A sliding storage system that installs inside your existing cabinet and pulls everything toward you — no more reaching into the depths of the shelf.",
    "price.saveBadge": "Save 700 DZD",
    "form.color": "Selected color",
    "color.black": "Black",
    "color.white": "White",
    "form.pack": "Choose your bundle",
    "pack.1": "1 piece",
    "pack.2": "2 pieces",
    "pack.3": "3 pieces",
    "pack.save": "Save {n}",
    "form.name": "Full name",
    "ph.name": "Your name",
    "form.phone": "Phone number",
    "ph.phone": "e.g. 0550123456",
    "form.wilaya": "Wilaya",
    "ph.wilaya": "Select wilaya",
    "form.commune": "Commune",
    "ph.commune": "Your commune",
    "form.delivery": "Delivery method",
    "del.home": "Home delivery",
    "del.office": "Office delivery",
    "sum.title": "Order summary",
    "sum.pack": "Bundle",
    "sum.delivery": "Delivery",
    "sum.save": "You save",
    "sum.total": "Total",
    "form.submit": "Confirm order — Cash on delivery",
    "err.name": "Name must be at least 3 characters",
    "err.phone": "Invalid Algerian number (05/06/07 + 8 digits)",
    "err.wilaya": "Select your wilaya",
    "err.commune": "Enter your commune",
    "err.general": "Failed to submit, please try again",
    "success.title": "Order received successfully",
    "success.text": "We will call you shortly to confirm. Cash on delivery.",
    "trust1.t": "Cash on delivery", "trust1.s": "Pay the courier upon receipt",
    "trust2.t": "Delivery to 69 wilayas", "trust2.s": "Fixed fees for all wilayas",
    "trust3.t": "Home or office delivery", "trust3.s": "Choose what suits you",
    "trust4.t": "Confirmation call", "trust4.s": "We call you before shipping",
    "features.heading": "Why this drawer?",
    "features.sub": "A practical solution that turns your deep cabinet into storage that slides out to you",
    "f1.t": "Telescopic rails", "f1.s": "Telescopic rails let the drawer extend and retract smoothly and easily.",
    "f2.t": "Adjustable width", "f2.s": "Fits cabinets of different sizes, from 32 to 52 cm wide.",
    "f3.t": "Two-drawer kit", "f3.s": "Each piece is a kit of two drawers.",
    "f4.t": "Multi-purpose storage", "f4.s": "For pots and pans, cleaning supplies under the sink, kitchen tools and food containers.",
    "uses.heading": "Multiple uses",
    "uses.sub": "An elegantly organized kitchen — full access to everything",
    "faq.heading": "Frequently asked questions",
    "q1": "Do I pay before delivery?", "a1": "No, payment is cash on delivery to the courier.",
    "q2": "When will my order arrive?", "a2": "We call you to confirm then ship it; timing varies by wilaya. Office delivery 600 DZD, home delivery 800 DZD.",
    "q3": "What is the adjustable width?", "a3": "It ranges from 32 to 52 cm to fit cabinets of different sizes.",
    "q4": "What can I store in it?", "a4": "Pots and pans, cleaning supplies under the sink, kitchen tools and food containers.",
    "q5": "How many drawers per piece?", "a5": "A kit of two drawers.",
    "q6": "Can I order more than one piece?", "a6": "Yes, choose 2 or 3 pieces in the form — the more you order, the more you save.",
    "footer.tagline": "Practical solutions for your home",
    "bar.order": "Order now",
    "bar.total": "Total with delivery",
    currency: "DZD",
  },
};

/* ====== صور المعرض (الأولى تتبدّل حسب اللون) ====== */
const COLOR_GALLERY = {
  white: [
    "images/ابيض قطة واحدة.webp",
    "images/قطعتين ابيض.webp",
    "images/ثلاث قطع ابيض.webp",
    "images/ابعاد المنتج ابيض.webp",
    "images/صورة منتج لخصائص منتج ابيض.webp",
    "images/صورة وصف اخرى للمنتج ابيض.webp",
  ],

  black: [
    "images/قطعة واحدة اسود.webp",
    "images/قطعتين اسود.webp",
    "images/ثلاث طقع اسود.webp",
    "images/وصف ابعاد المنتج اسود.webp",
    "images/صورة لخصائخ منتج اسود.webp",
  ],
};

/* ====== الحالة ====== */
const state = {
  lang: "ar",
  color: "black",
  pack: 1,
  delivery: "home",
  galIndex: 0,
};
const galleryList = () => COLOR_GALLERY[state.color] || COLOR_GALLERY.white;

/* ====== أدوات مساعدة ====== */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const T = (key) => I18N[state.lang][key] ?? key;
const fmt = (n) => `${n} ${T("currency")}`;
const curPack = () => PACKAGES.find((p) => p.id === state.pack);
const total = () => curPack().price + DELIVERY_FEES[state.delivery];

/* ====== تطبيق اللغة ====== */
function applyLang() {
  const l = state.lang;
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach((el) => { el.textContent = T(el.dataset.i18n); });
  $$("[data-i18n-ph]").forEach((el) => { el.placeholder = T(el.dataset.i18nPh); });
  $$(".lang-btn").forEach((b) => {
    const on = b.dataset.lang === l;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", on);
  });
  document.title = `Maison Pratique — ${T("product.title")}`;

  renderPacks();
  renderDelivery();
  renderSummary();
  renderColor();
  renderGallery(true);
  updateStickyBar();
}

$$(".lang-btn").forEach((b) =>
  b.addEventListener("click", () => { state.lang = b.dataset.lang; applyLang(); })
);

/* ====== اللون ====== */
function renderColor() {
  $("#colorName").textContent = T(`color.${state.color}`);
  $$(".color-dot").forEach((d) => {
    const on = d.dataset.color === state.color;
    d.classList.toggle("is-selected", on);
    d.setAttribute("aria-pressed", on);
  });
}
$$(".color-dot").forEach((d) =>
  d.addEventListener("click", () => {
    state.color = d.dataset.color;
    state.galIndex = 0;
    renderColor();
    renderGallery(true);
  })
);

/* ====== الباقات ====== */
function renderPacks() {
  const box = $("#packs");
  box.innerHTML = "";
  PACKAGES.forEach((p) => {
    const opt = document.createElement("div");
    opt.className = "pack" + (p.id === state.pack ? " is-selected" : "");
    opt.setAttribute("role", "radio");
    opt.setAttribute("aria-checked", p.id === state.pack);
    opt.tabIndex = 0;
    opt.innerHTML = `
      <span class="pack-name"><i class="ph ph-package" aria-hidden="true"></i>${T(`pack.${p.id}`)}</span>
      <span class="pack-side">
        <span class="pack-price">${fmt(p.price)}</span>
        ${p.save ? `<span class="pack-save">${T("pack.save").replace("{n}", fmt(p.save))}</span>` : ""}
      </span>`;
    const pick = () => { state.pack = p.id; renderPacks(); renderSummary(); updateStickyBar(); };
    opt.addEventListener("click", pick);
    opt.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
    box.appendChild(opt);
  });
}

/* ====== التوصيل ====== */
function renderDelivery() {
  const box = $("#deliveryOpts");
  box.innerHTML = "";
  [["home", "ph-house-line"], ["office", "ph-buildings"]].forEach(([type, icon]) => {
    const on = state.delivery === type;
    const opt = document.createElement("div");
    opt.className = "del-opt" + (on ? " is-selected" : "");
    opt.setAttribute("role", "radio");
    opt.setAttribute("aria-checked", on);
    opt.tabIndex = 0;
    opt.innerHTML = `<i class="ph ${icon}" aria-hidden="true"></i>
      <span>${T(`del.${type}`)}<small>${fmt(DELIVERY_FEES[type])}</small></span>`;
    const pick = () => { state.delivery = type; renderDelivery(); renderSummary(); updateStickyBar(); };
    opt.addEventListener("click", pick);
    opt.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
    box.appendChild(opt);
  });
}

/* ====== الملخص ====== */
function renderSummary() {
  const p = curPack();
  $("#sumPack").textContent = `${T(`pack.${p.id}`)} — ${fmt(p.price)}`;
  $("#sumDelivery").textContent = `${T(`del.${state.delivery}`)} — ${fmt(DELIVERY_FEES[state.delivery])}`;
  $("#sumSaveRow").hidden = !p.save;
  if (p.save) $("#sumSave").textContent = fmt(p.save);
  $("#sumTotal").textContent = fmt(total());
  $("#mainPrice").textContent = fmt(p.price);
}

/* ====== المعرض ====== */
function renderGallery(keepIndex = false) {
  const list = galleryList();
  if (!keepIndex) state.galIndex = 0;
  state.galIndex = (state.galIndex + list.length) % list.length;
  const img = $("#mainImg");
  img.src = list[state.galIndex];
  img.alt = `${T("product.title")} — ${state.galIndex + 1}`;
  $("#galCounter").textContent = `${state.galIndex + 1} / ${list.length}`;

  const thumbs = $("#galThumbs");
  thumbs.innerHTML = "";
  list.forEach((src, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = i === state.galIndex ? "is-active" : "";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", i === state.galIndex);
    b.setAttribute("aria-label", `${i + 1}`);
    b.innerHTML = `<img src="${src}" width="74" height="74" loading="lazy" alt="">`;
    b.addEventListener("click", () => { state.galIndex = i; renderGallery(true); });
    thumbs.appendChild(b);
  });
}
$("#galPrev").addEventListener("click", () => { state.galIndex--; renderGallery(true); });
$("#galNext").addEventListener("click", () => { state.galIndex++; renderGallery(true); });

/* ====== التحقق من الحقول ====== */
function setErr(id, msgKey) {
  const el = $(`#err-${id}`);
  const input = $(`#f-${id}`);
  if (msgKey) {
    el.textContent = T(msgKey);
    el.hidden = false;
    input.classList.add("is-invalid");
  } else {
    el.hidden = true;
    input.classList.remove("is-invalid");
  }
}
function validate() {
  let ok = true;
  const name = $("#f-name").value.trim();
  const phone = $("#f-phone").value.replace(/[\s-]/g, "");
  const wilaya = $("#f-wilaya").value;
  const commune = $("#f-commune").value.trim();

  if (name.length < 3) { setErr("name", "err.name"); ok = false; } else setErr("name");
  if (!/^(05|06|07)\d{8}$/.test(phone)) { setErr("phone", "err.phone"); ok = false; } else setErr("phone");
  if (!wilaya) { setErr("wilaya", "err.wilaya"); ok = false; } else setErr("wilaya");
  if (!commune) { setErr("commune", "err.commune"); ok = false; } else setErr("commune");
  return ok;
}

/* ====== الإرسال ====== */
const form = $("#orderForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formError = $("#formError");
  formError.hidden = true;

  // honeypot: إذا مُلئ الحقل المخفي فهو روبوت
  if (form.website.value) return;

  if (!validate()) {
    form.querySelector(".is-invalid")?.focus();
    return;
  }

  const btn = $("#submitBtn");
  const label = btn.querySelector(".btn-label");
  const spinner = btn.querySelector(".btn-spinner");
  btn.disabled = true;
  spinner.hidden = false;
  label.style.opacity = ".7";

  const payload = {
    name: $("#f-name").value.trim(),
    phone: $("#f-phone").value.replace(/[\s-]/g, ""),
    wilaya: $("#f-wilaya").value,
    commune: $("#f-commune").value.trim(),
    delivery: state.delivery,
    color: T(`color.${state.color}`),
    pack: T(`pack.${state.pack}`),
    total: total(),
    currency: T("currency"),
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("HTTP " + res.status);

    form.querySelectorAll("fieldset, .row-2, .summary, #submitBtn").forEach((el) => (el.hidden = true));
    const success = $("#successBox");
    success.hidden = false;
    success.focus();
  } catch (err) {
    formError.textContent = T("err.general");
    formError.hidden = false;
  } finally {
    btn.disabled = false;
    spinner.hidden = true;
    label.style.opacity = "";
  }
});

// إخفاء رسالة الخطأ عند التعديل
["f-name", "f-phone", "f-wilaya", "f-commune"].forEach((id) =>
  $(`#${id}`).addEventListener("input", () => { setErr(id.replace("f-", "")); $("#formError").hidden = true; })
);

/* ====== الشريط السفلي ====== */
const stickyBar = $("#stickyBar");
const stickyBtn = $("#stickyBtn");
const stickyPrice = $("#stickyPrice");
const stickyLabel = $("#stickyLabel");
let formInView = false;

function updateStickyBar() {
  if (formInView) {
    stickyPrice.textContent = fmt(total());
    stickyLabel.textContent = T("bar.total");
    stickyBtn.textContent = T("form.submit").split("—")[0].trim();
  } else {
    stickyPrice.textContent = fmt(curPack().price);
    stickyLabel.textContent = "";
    stickyBtn.textContent = T("bar.order");
  }
}
stickyBtn.addEventListener("click", () => {
  if (formInView) { $("#submitBtn").click(); }
  else { $("#order").scrollIntoView({ behavior: "smooth" }); }
});
const formObserver = new IntersectionObserver(
  ([entry]) => { formInView = entry.isIntersecting; updateStickyBar(); },
  { threshold: 0.25 }
);
formObserver.observe($("#order"));

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const successVisible = !$("#successBox").hidden;
  const visible = y > 320 && !successVisible;
  stickyBar.classList.toggle("is-visible", visible);
  stickyBar.setAttribute("aria-hidden", String(!visible));
}, { passive: true });

/* ====== ظهور العناصر عند التمرير ====== */
const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); revealObserver.unobserve(en.target); }
  }),
  { threshold: 0.12 }
);
$$(".reveal").forEach((el) => revealObserver.observe(el));

/* ====== التهيئة ====== */
applyLang();
