// ==============================
//  DOM REFERENCES
// ==============================
const addNoteBtn    = document.getElementById('add-note');
const closeFormBtn  = document.getElementById('close-form');
const overlay       = document.getElementById('overlay');
const formModal     = document.getElementById('form-modal');
const noteForm      = document.getElementById('note-form');

const inputImage    = document.getElementById('input-image');
const inputName     = document.getElementById('input-name');
const inputTown     = document.getElementById('input-town');
const inputPurpose  = document.getElementById('input-purpose');

const errImage      = document.getElementById('err-image');
const errName       = document.getElementById('err-name');
const errTown       = document.getElementById('err-town');
const errPurpose    = document.getElementById('err-purpose');
const errCategory   = document.getElementById('err-category');

const cardsTrack    = document.getElementById('cards-track');
const sliderWrapper = document.getElementById('slider-wrapper');
const emptyState    = document.getElementById('empty-state');
const navLeft       = document.getElementById('nav-left');
const navRight      = document.getElementById('nav-right');
const sliderDots    = document.getElementById('slider-dots');
const cardCount     = document.getElementById('card-count');

// ==============================
//  STATE
// ==============================
let notes = [];
let currentIndex = 0;

// ==============================
//  LOCAL STORAGE
// ==============================
function saveToStorage() {
  localStorage.setItem('callnotes', JSON.stringify(notes));
}

function loadFromStorage() {
  const raw = localStorage.getItem('callnotes');
  return raw ? JSON.parse(raw) : [];
}

// ==============================
//  FORM OPEN / CLOSE
// ==============================
function openForm() {
  formModal.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => inputImage.focus(), 300);
}

function closeForm() {
  formModal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  noteForm.reset();
  clearAllErrors();
}

addNoteBtn.addEventListener('click', openForm);
closeFormBtn.addEventListener('click', closeForm);
overlay.addEventListener('click', closeForm);

// ==============================
//  VALIDATION HELPERS
// ==============================
function showError(el, msg) {
  el.textContent = msg;
  el.classList.add('show');
  // highlight corresponding input
  const group = el.closest('.form-group');
  if (group) {
    const inp = group.querySelector('.form-input');
    if (inp) inp.classList.add('invalid');
  }
}

function clearError(el) {
  el.textContent = '';
  el.classList.remove('show');
  const group = el.closest('.form-group');
  if (group) {
    const inp = group.querySelector('.form-input');
    if (inp) inp.classList.remove('invalid');
  }
}

function clearAllErrors() {
  [errImage, errName, errTown, errPurpose, errCategory].forEach(clearError);
}

// Clear errors on input
[inputImage, inputName, inputTown, inputPurpose].forEach(inp => {
  inp.addEventListener('input', () => {
    const errMap = {
      'input-image':   errImage,
      'input-name':    errName,
      'input-town':    errTown,
      'input-purpose': errPurpose,
    };
    clearError(errMap[inp.id]);
  });
});

function validateForm() {
  clearAllErrors();
  let valid = true;

  const image   = inputImage.value.trim();
  const name    = inputName.value.trim();
  const town    = inputTown.value.trim();
  const purpose = inputPurpose.value.trim();
  const catEl   = noteForm.querySelector('input[name="category"]:checked');

  if (!image) {
    showError(errImage, 'Image URL is required'); valid = false;
  } else if (!image.startsWith('http')) {
    showError(errImage, 'Must be a valid URL starting with http'); valid = false;
  }

  if (!name) {
    showError(errName, 'Full name is required'); valid = false;
  } else if (name.length < 3) {
    showError(errName, 'Name must be at least 3 characters'); valid = false;
  }

  if (!town) {
    showError(errTown, 'Home town is required'); valid = false;
  }

  if (!purpose) {
    showError(errPurpose, 'Purpose is required'); valid = false;
  } else if (purpose.length < 5) {
    showError(errPurpose, 'Purpose must be at least 5 characters'); valid = false;
  }

  if (!catEl) {
    showError(errCategory, 'Please select a category'); valid = false;
  }

  return { valid, image, name, town, purpose, category: catEl ? catEl.value : null };
}

// ==============================
//  FORM SUBMIT
// ==============================
noteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { valid, image, name, town, purpose, category } = validateForm();
  if (!valid) return;

  const note = {
    id: Date.now(),
    image,
    name,
    town,
    purpose,
    category,
    date: new Date().toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' })
  };

  notes.push(note);
  saveToStorage();
  closeForm();
  renderAll();
  // Go to newly added card
  goToIndex(notes.length - 1);
});

// ==============================
//  RENDER
// ==============================
function renderAll() {
  cardsTrack.innerHTML = '';
  sliderDots.innerHTML = '';

  cardCount.textContent = notes.length === 0
    ? '0 notes'
    : `${notes.length} note${notes.length > 1 ? 's' : ''}`;

  if (notes.length === 0) {
    sliderWrapper.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  sliderWrapper.style.display = 'flex';
  emptyState.style.display = 'none';

  notes.forEach((note, i) => {
    // Card
    const card = createCard(note, i);
    cardsTrack.appendChild(card);

    // Dot
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === currentIndex ? ' active' : '');
    dot.addEventListener('click', () => goToIndex(i));
    sliderDots.appendChild(dot);
  });

  updateActiveCard();
  updateNavButtons();
}

function createCard(note, index) {
  const card = document.createElement('div');
  card.className = 'note-card';
  card.dataset.index = index;

  const badgeClass = `badge-${note.category}`;
  const badgeEmoji = { emergency: '🚨', important: '⚡', 'no-rush': '🍃' }[note.category] || '';
  const badgeLabel = { emergency: 'Emergency', important: 'Important', 'no-rush': 'No Rush' }[note.category] || note.category;
  const initial = note.name.charAt(0).toUpperCase();

  card.innerHTML = `
    <div class="card-top">
      <img
        class="card-avatar"
        src="${escapeHtml(note.image)}"
        alt="${escapeHtml(note.name)}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="card-avatar-fallback" style="display:none;">${initial}</div>
      <div class="card-identity">
        <div class="card-name">${escapeHtml(note.name)}</div>
        <div class="card-town">${escapeHtml(note.town)}</div>
      </div>
    </div>

    <span class="card-badge ${badgeClass}">${badgeEmoji} ${badgeLabel}</span>

    <div class="card-divider"></div>

    <div>
      <div class="card-purpose-label">Purpose</div>
      <div class="card-purpose-text">${escapeHtml(note.purpose)}</div>
    </div>

    <div class="card-footer">
      <span class="card-date">${note.date}</span>
      <span class="card-index">${index + 1} / ${notes.length}</span>
      <button class="card-delete-btn" data-id="${note.id}">Delete</button>
    </div>
  `;

  card.querySelector('.card-delete-btn').addEventListener('click', () => deleteNote(note.id));
  return card;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ==============================
//  NAVIGATION
// ==============================
function goToIndex(newIndex) {
  if (newIndex < 0 || newIndex >= notes.length) return;

  const cards = cardsTrack.querySelectorAll('.note-card');
  const dots  = sliderDots.querySelectorAll('.dot');

  // Animate out current
  if (cards[currentIndex]) {
    cards[currentIndex].classList.remove('active');
    if (newIndex > currentIndex) {
      cards[currentIndex].classList.add('exit-left');
    } else {
      cards[currentIndex].style.transform = 'translateX(60px) scale(0.96)';
      cards[currentIndex].style.opacity = '0';
    }
  }

  currentIndex = newIndex;

  // Activate new card after tiny delay for transition
  setTimeout(() => {
    // Clean up all
    cards.forEach(c => {
      c.classList.remove('active', 'exit-left');
      c.style.transform = '';
      c.style.opacity = '';
    });
    if (cards[currentIndex]) {
      cards[currentIndex].classList.add('active');
    }
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    updateNavButtons();
  }, 50);
}

function updateActiveCard() {
  const cards = cardsTrack.querySelectorAll('.note-card');
  cards.forEach((c, i) => {
    c.classList.toggle('active', i === currentIndex);
  });
}

function updateNavButtons() {
  navLeft.disabled  = currentIndex <= 0;
  navRight.disabled = currentIndex >= notes.length - 1;
}

navLeft.addEventListener('click', () => goToIndex(currentIndex - 1));
navRight.addEventListener('click', () => goToIndex(currentIndex + 1));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (formModal.classList.contains('active')) return;
  if (e.key === 'ArrowLeft')  goToIndex(currentIndex - 1);
  if (e.key === 'ArrowRight') goToIndex(currentIndex + 1);
});

// Touch / Swipe support
let touchStartX = 0;
cardsTrack.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
cardsTrack.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) goToIndex(currentIndex + 1);
    else          goToIndex(currentIndex - 1);
  }
});

// ==============================
//  DELETE
// ==============================
function deleteNote(id) {
  notes = notes.filter(n => n.id !== id);
  saveToStorage();
  if (currentIndex >= notes.length) {
    currentIndex = Math.max(0, notes.length - 1);
  }
  renderAll();
}

// ==============================
//  INIT
// ==============================
(function init() {
  notes = loadFromStorage();
  renderAll();
})();