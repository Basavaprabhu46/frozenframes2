/* ===== Config: sample gallery data (swap with your real photos) ===== */
const GALLERY = [
  {
    id: "p1",
    src: "images/potrait/1.webp",
    width: 1500, height: 2000, // ~3:4
    title: "TajHotel",
    orientation: "portrait",
    tags: ["portrait"],
    location: "Mumbai",
    exif: { camera: "sonyDSC-W630", lens: "-", iso: 100, f: "f/4.5", speed: "1/20" },
  },
  {
    id: "l1",
    src: "images/potrait/2.webp",
    width: 2400, height: 1600,
    title: "City Veins",
    orientation: "portrait",
    tags: ["landscape", "nature"],
    location: "Mumabai",
    exif: { camera: "—", lens: "—", iso: 100, f: "f/8", speed: "1/320" },
  },
  {
    id: "l1",
    src: "images/potrait/3.webp",
    width: 2400, height: 1600,
    title: "Sea-Link",
    orientation: "portrait",
    tags: ["landscape", "nature"],
    location: "Mumabi",
    exif: { camera: "—", lens: "—", iso: 100, f: "f/8", speed: "1/320" },
  },
  {
    id: "p2",
    src: "images/potrait/4.webp",
    width: 1500, height: 2000,
    title: "Lone-Cart",
    orientation: "portrait",
    tags: ["portrait", "ambient"],
    location: "Korigad",
    exif: { camera: "—", lens: "—", iso: 400, f: "f/1.8", speed: "1/160" },
  },
  {
    id: "l2",
    src: "images/potrait/5.webp",
    width: 2200, height: 1467,
    title: "Fort-Wall",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Korigad",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },
  {
    id: "l2",
    src: "images/potrait/6.webp",
    width: 2200, height: 1467,
    title: "",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Korigad",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },
  {
    id: "l2",
    src: "images/potrait/7.webp",
    width: 2200, height: 1467,
    title: "Korigad",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Korigad",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/8.webp",
    width: 2200, height: 1467,
    title: "CSMT",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Mumbai",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/9.webp",
    width: 2200, height: 1467,
    title: "",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Mumbai",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/10.webp",
    width: 2200, height: 1467,
    title: "Taj Hotel",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Mumabi",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/11.webp",
    width: 2200, height: 1467,
    title: "City Veins",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "CSMT",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/12.webp",
    width: 2200, height: 1467,
    title: "B&W",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Raichur",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/13.webp",
    width: 2200, height: 1467,
    title: "Heaven",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Yamnotri",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/69.webp",
    width: 2200, height: 1467,
    title: "Street",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Bengalore",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/15.webp",
    width: 2200, height: 1467,
    title: "Worship",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Bengaluru",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/16.webp",
    width: 2200, height: 1467,
    title: "Bham-Bham",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Kedarnath",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/17.webp",
    width: 2200, height: 1467,
    title: "KedarDham",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Kedarnath",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/18.webp",
    width: 2200, height: 1467,
    title: "KedarDham",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Kedarnath",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },
  {
    id: "l2",
    src: "images/potrait/19.webp",
    width: 2200, height: 1467,
    title: "KedarDham",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Kedarnath",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/20.webp",
    width: 2200, height: 1467,
    title: "Woods",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Lonavala",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/21.webp",
    width: 2200, height: 1467,
    title: "City Veins",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Bengaluru",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/22.webp",
    width: 2200, height: 1467,
    title: "City Veins",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Bengaluru",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },
  {
    id: "l2",
    src: "images/potrait/23.webp",
    width: 2200, height: 1467,
    title: "METRO",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Bengaluru",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },
  {
    id: "l2",
    src: "images/potrait/24.webp",
    width: 2200, height: 1467,
    title: "PES",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Bengaluru",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/25.webp",
    width: 2200, height: 1467,
    title: "BOW-bow",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Bengaluru",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/potrait/26.webp",
    width: 2200, height: 1467,
    title: "PES",
    orientation: "portrait",
    tags: ["city", "night"],
    location: "Bengaluru",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/landscape/1.webp",
    width: 2200, height: 1467,
    title: "City Veins",
    orientation: "landscape",
    tags: ["city", "night"],
    location: "Bengaluru",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },
  {
    id: "l2",
    src: "images/landscape/2.webp",
    width: 2200, height: 1467,
    title: "City Veins",
    orientation: "landscape",
    tags: ["city", "night"],
    location: "Bengaluru",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/landscape/3.webp",
    width: 2200, height: 1467,
    title: "City Veins",
    orientation: "landscape",
    tags: ["city", "night"],
    location: "Bengaluru",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/landscape/4.webp",
    width: 2200, height: 1467,
    title: "City Veins",
    orientation: "landscape",
    tags: ["city", "night"],
    location: "Bengaluru",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/landscape/5.webp",
    width: 2200, height: 1467,
    title: "City Veins",
    orientation: "landscape",
    tags: ["city", "night"],
    location: "Bengaluru",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },{
    id: "l2",
    src: "images/landscape/6.webp",
    width: 2200, height: 1467,
    title: "City Veins",
    orientation: "landscape",
    tags: ["city", "night"],
    location: "Bengaluru",
    exif: { camera: "—", lens: "—", iso: 800, f: "f/5.6", speed: "1/10" },
  },
];

/* ===== State ===== */
let items = [...GALLERY];
let filter = "all";
let query = "";

/* ===== Elements ===== */
const yearEl = document.getElementById("year");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const galleryEl = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const dropzone = document.getElementById("dropzone");

const lightboxEl = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImage");
const lbCap = document.getElementById("lbCaption");
const lbTitle = lbCap.querySelector(".lb-title");
const lbMeta = lbCap.querySelector(".lb-meta");
const lbExif = lbCap.querySelector(".lb-exif");
const lbTags = lbCap.querySelector(".lb-tags");
const lbLocation = lbCap.querySelector(".lb-location");
const lbOrientation = lbCap.querySelector(".lb-orientation");

const lbClose = lightboxEl.querySelector(".lb-btn.close");
const lbPrev = lightboxEl.querySelector(".lb-btn.prev");
const lbNext = lightboxEl.querySelector(".lb-btn.next");

let lightboxIndex = 0;

/* ===== Utilities ===== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function setTheme(mode) {
  const root = document.documentElement;
  if (mode === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  localStorage.setItem("theme", mode);
  themeIcon.textContent = mode === "dark" ? "☀️" : "🌙";
}

function getFiltered() {
  const q = query.trim().toLowerCase();
  return items.filter((it) => {
    const passes = filter === "all" || it.orientation === filter;
    const inSearch =
      !q ||
      (it.title && it.title.toLowerCase().includes(q)) ||
      (it.location && it.location.toLowerCase().includes(q)) ||
      (Array.isArray(it.tags) && it.tags.some((t) => t.toLowerCase().includes(q)));
    return passes && inSearch;
  });
}

/* ===== Rendering ===== */
function renderGallery() {
  const data = getFiltered();
  galleryEl.innerHTML = "";
  data.forEach((img, i) => {
    const fig = document.createElement("figure");
    fig.className = "cardish";

    const wrap = document.createElement("div");
    wrap.className = "img-wrap";
    wrap.addEventListener("click", () => openLightbox(i));

    // shimmer placeholder sized roughly to aspect ratio
    const placeholder = document.createElement("div");
    placeholder.className = "shimmer";
    placeholder.style.aspectRatio = `${img.width || 3} / ${img.height || 4}`;
    wrap.appendChild(placeholder);

    const el = document.createElement("img");
    el.loading = "lazy";
    el.alt = img.title || "";
    el.src = img.src;

    el.addEventListener("load", () => placeholder.remove());
    wrap.appendChild(el);

    const caption = document.createElement("figcaption");
    caption.className = "caption";
    caption.innerHTML = `
      <div class="title">${escapeHTML(img.title || "")}</div>
      <div class="sub">${escapeHTML(img.location || "")} • ${escapeHTML(img.orientation || "")}</div>
    `;

    fig.appendChild(wrap);
    fig.appendChild(caption);
    galleryEl.appendChild(fig);
  });
}

function escapeHTML(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/* ===== Lightbox ===== */
function openLightbox(idx) {
  const list = getFiltered();
  const img = list[idx];
  if (!img) return;

  lightboxIndex = idx;
  lbImg.src = img.src;
  lbImg.alt = img.title || "";
  lbTitle.textContent = img.title || "";
  lbLocation.textContent = img.location || "";
  lbOrientation.textContent = img.orientation || "";

  const ex = img.exif || {};
  lbExif.textContent = `${ex.lens || "—"} • ${ex.f || "—"} • ${ex.speed || "—"} • ISO ${ex.iso ?? "—"}`;

  lbTags.innerHTML = "";
  (img.tags || []).forEach((t) => {
    const b = document.createElement("span");
    b.className = "tag";
    b.textContent = `#${t}`;
    lbTags.appendChild(b);
  });

  lightboxEl.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightboxEl.hidden = true;
  document.body.style.overflow = "";
}

function prevLightbox() {
  const list = getFiltered();
  lightboxIndex = (lightboxIndex - 1 + list.length) % list.length;
  openLightbox(lightboxIndex);
}

function nextLightbox() {
  const list = getFiltered();
  lightboxIndex = (lightboxIndex + 1) % list.length;
  openLightbox(lightboxIndex);
}

// /* ===== Drag & Drop (client preview) ===== */
// function attachDropzone() {
//   const onDrag = (e) => { e.preventDefault(); e.stopPropagation(); dropzone.classList.add("drag"); };
//   const onLeave = (e) => { e.preventDefault(); e.stopPropagation(); dropzone.classList.remove("drag"); };
//   const onDrop = (e) => {
//     e.preventDefault(); e.stopPropagation(); dropzone.classList.remove("drag");
//     const files = Array.from(e.dataTransfer.files || []).filter(f => /image\//.test(f.type));
//     if (!files.length) return;

//     files.forEach((file, idx) => {
//       const fr = new FileReader();
//       fr.onload = () => {
//         // Determine orientation by loading image dims
//         const im = new Image();
//         im.onload = () => {
//           const orientation = im.width > im.height ? "landscape" : "portrait";
//           const item = {
//             id: `d_${Date.now()}_${idx}`,
//             src: fr.result,
//             width: im.width, height: im.height,
//             title: file.name,
//             orientation,
//             tags: ["dropped"], exif: {}
//           };
//           items = [item, ...items];
//           renderGallery();
//         };
//         im.src = fr.result;
//       };
//       fr.readAsDataURL(file);
//     });
//   };

//   ["dragenter", "dragover"].forEach(evt => dropzone.addEventListener(evt, onDrag));
//   ["dragleave", "drop"].forEach(evt => dropzone.addEventListener(evt, evt === "drop" ? onDrop : onLeave));
// }

/* ===== Events ===== */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-filter]");
  if (btn) {
    filter = btn.getAttribute("data-filter");
    // update button styles
    $$(".btn-group .btn").forEach(b => b.classList.toggle("outline", b !== btn));
    btn.classList.remove("outline");
    renderGallery();
  }
});

searchInput.addEventListener("input", (e) => {
  query = e.target.value;
  renderGallery();
});

lbClose.addEventListener("click", closeLightbox);
lbPrev.addEventListener("click", prevLightbox);
lbNext.addEventListener("click", nextLightbox);

document.addEventListener("keydown", (e) => {
  if (lightboxEl.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") prevLightbox();
  if (e.key === "ArrowRight") nextLightbox();
});

/* ===== Init ===== */
(function init() {
  yearEl.textContent = new Date().getFullYear();

  // theme
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved || (prefersDark ? "dark" : "light"));
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    setTheme(next);
  });

  // filter default
  document.querySelector('[data-filter="all"]').classList.remove("outline");

  renderGallery();
  attachDropzone();
})();
