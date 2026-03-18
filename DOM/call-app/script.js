/* ── DOM ─────────────────────────────────────── */
const addBtn    = document.getElementById('add-btn');
const overlay   = document.getElementById('overlay');
const modal     = document.getElementById('modal');
const modalClose= document.getElementById('modal-close');
const form      = document.getElementById('form');

const fImg      = document.getElementById('f-img');
const fName     = document.getElementById('f-name');
const fTown     = document.getElementById('f-town');
const fPurpose  = document.getElementById('f-purpose');

const eImg      = document.getElementById('e-img');
const eName     = document.getElementById('e-name');
const eTown     = document.getElementById('e-town');
const ePurpose  = document.getElementById('e-purpose');
const eCat      = document.getElementById('e-cat');

const deck      = document.getElementById('deck');
const deckScene = document.getElementById('deck-scene');
const emptyEl   = document.getElementById('empty');
const navPrev   = document.getElementById('nav-prev');
const navNext   = document.getElementById('nav-next');
const dotsEl    = document.getElementById('dots');
const countNum  = document.getElementById('count-num');

/* ── STATE ────────────────────────────────────── */
let notes   = [];
let current = 0;       // index of top card

/* ── STORAGE ──────────────────────────────────── */
function save()  { localStorage.setItem('calllog_v2', JSON.stringify(notes)) }
function load()  { return JSON.parse(localStorage.getItem('calllog_v2') || '[]') }

/* ── MODAL ────────────────────────────────────── */
function openModal() {
  modal.classList.add('on');
  overlay.classList.add('on');
  document.body.style.overflow = 'hidden';
  setTimeout(() => fImg.focus(), 200);
}
function closeModal() {
  modal.classList.remove('on');
  overlay.classList.remove('on');
  document.body.style.overflow = '';
  form.reset();
  clearErrors();
}

addBtn   .addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
overlay  .addEventListener('click', closeModal);
document .addEventListener('keydown', e => { if (e.key === 'Escape') closeModal() });

/* ── VALIDATION ───────────────────────────────── */
function showErr(el, inp, msg) {
  el.textContent = msg; el.classList.add('on');
  if (inp) inp.classList.add('bad');
}
function clearErr(el, inp) {
  el.textContent = ''; el.classList.remove('on');
  if (inp) inp.classList.remove('bad');
}
function clearErrors() {
  clearErr(eImg, fImg); clearErr(eName, fName);
  clearErr(eTown, fTown); clearErr(ePurpose, fPurpose);
  clearErr(eCat, null);
}

// live clear on input
[[fImg,eImg],[fName,eName],[fTown,eTown],[fPurpose,ePurpose]]
  .forEach(([inp,err]) => inp.addEventListener('input', () => clearErr(err, inp)));

function validate() {
  clearErrors();
  const img     = fImg.value.trim();
  const name    = fName.value.trim();
  const town    = fTown.value.trim();
  const purpose = fPurpose.value.trim();
  const catEl   = form.querySelector('input[name="cat"]:checked');
  let ok = true;

  if (!img)                     { showErr(eImg, fImg, 'Image URL required'); ok=false }
  else if (!img.startsWith('http')) { showErr(eImg, fImg, 'Must start with http://'); ok=false }

  if (!name)                    { showErr(eName, fName, 'Name required'); ok=false }
  else if (name.length < 3)     { showErr(eName, fName, 'Min 3 characters'); ok=false }

  if (!town)                    { showErr(eTown, fTown, 'Town required'); ok=false }

  if (!purpose)                 { showErr(ePurpose, fPurpose, 'Purpose required'); ok=false }
  else if (purpose.length < 5)  { showErr(ePurpose, fPurpose, 'Min 5 characters'); ok=false }

  if (!catEl)                   { showErr(eCat, null, 'Pick a category'); ok=false }

  if (!ok) return null;
  return { img, name, town, purpose, category: catEl.value };
}

/* ── FORM SUBMIT ──────────────────────────────── */
form.addEventListener('submit', e => {
  e.preventDefault();
  const data = validate();
  if (!data) return;

  notes.push({
    id: Date.now(),
    image:    data.img,
    name:     data.name,
    town:     data.town,
    purpose:  data.purpose,
    category: data.category,
    date:     new Date().toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' })
  });

  save();
  closeModal();
  current = notes.length - 1;   // jump to new card
  render();
});

/* ── RENDER ───────────────────────────────────── */
function render() {
  deck.innerHTML = '';
  dotsEl.innerHTML = '';
  countNum.textContent = notes.length;

  if (notes.length === 0) {
    deckScene.style.display = 'none';
    emptyEl.style.display   = 'block';
    return;
  }

  deckScene.style.display = 'flex';
  emptyEl.style.display   = 'none';

  /* Build cards — all of them, we assign layer via data-layer */
  notes.forEach((note, i) => {
    const card = buildCard(note, i);
    deck.appendChild(card);
  });

  assignLayers();
  buildDots();
  updateNav();
}

/**
 * layer 0 = active (top), 1/2/3 = cards behind it
 * cards before current index — not visible
 * cards after current index — peek behind
 */
function assignLayers() {
  const cards = deck.querySelectorAll('.card');
  cards.forEach((card, i) => {
    const diff = i - current;
    if (diff < 0 || diff > 3) {
      card.removeAttribute('data-layer');
    } else {
      card.setAttribute('data-layer', diff);
    }
  });
}

function buildCard(note, idx) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.idx = idx;

  const init  = note.name.charAt(0).toUpperCase();
  const badge = { emergency:'🚨 Emergency', important:'⚡ Important', 'no-rush':'🍃 No Rush' }[note.category] || note.category;

  card.innerHTML = `
    <div class="card-bar bar-${note.category}"></div>
    <div class="card-body">
      <div class="card-top">
        <img class="c-avatar" src="${esc(note.image)}" alt="${esc(note.name)}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div class="c-avatar-fb" style="display:none">${init}</div>
        <div class="c-info">
          <div class="c-name">${esc(note.name)}</div>
          <div class="c-town">📍 ${esc(note.town)}</div>
        </div>
      </div>
      <span class="c-badge badge-${note.category}">${badge}</span>
      <div class="c-div"></div>
      <div class="c-purpose-lbl">Purpose</div>
      <div class="c-purpose-txt">${esc(note.purpose)}</div>
    </div>
    <div class="card-foot">
      <span class="c-date">${note.date}</span>
      <button class="c-del" data-id="${note.id}">Delete</button>
    </div>
  `;

  card.querySelector('.c-del').addEventListener('click', () => deleteNote(note.id));
  return card;
}

function buildDots() {
  notes.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === current ? ' on' : '');
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  });
}

function updateNav() {
  navPrev.disabled = current <= 0;
  navNext.disabled = current >= notes.length - 1;
}

/* ── NAVIGATION ───────────────────────────────── */
function goTo(idx) {
  if (idx < 0 || idx >= notes.length) return;
  current = idx;
  assignLayers();
  // update dots
  dotsEl.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('on', i === current));
  updateNav();
}

navPrev.addEventListener('click', () => goTo(current - 1));
navNext.addEventListener('click', () => goTo(current + 1));

// keyboard
document.addEventListener('keydown', e => {
  if (modal.classList.contains('on')) return;
  if (e.key === 'ArrowLeft')  goTo(current - 1);
  if (e.key === 'ArrowRight') goTo(current + 1);
});

// swipe
let tx = 0;
deck.addEventListener('touchstart', e => { tx = e.touches[0].clientX }, { passive:true });
deck.addEventListener('touchend', e => {
  const diff = tx - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 44) goTo(current + (diff > 0 ? 1 : -1));
});

/* ── DELETE ───────────────────────────────────── */
function deleteNote(id) {
  notes = notes.filter(n => n.id !== id);
  save();
  if (current >= notes.length) current = Math.max(0, notes.length - 1);
  render();
}

/* ── UTILS ────────────────────────────────────── */
function esc(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

/* ── INIT ─────────────────────────────────────── */
notes = load();
render();