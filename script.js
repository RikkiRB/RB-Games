document.documentElement.classList.add('js-enabled');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    toggle.focus();
  }
});
document.querySelector('#year').textContent = String(new Date().getFullYear());

const config = window.RB_GAMES_CONFIG || {};
if (config.contactEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.contactEmail)) {
  const contact = document.querySelector('#contact-link');
  contact.href = `mailto:${encodeURIComponent(config.contactEmail)}?subject=${encodeURIComponent(config.contactSubject || 'RB Games enquiry')}`;
  contact.textContent = 'Email Rikki';
  contact.removeAttribute('target');
}

const galleries = {
  perigee: {
    title: 'Perigee Panic', subtitle: '2D ARCADE / GAME SCREENSHOTS',
    slides: [
      { src: 'assets/perigee-gameplay.png', alt: 'An orange spacecraft and Earth activate protective shields against asteroids.', caption: 'Protect the ship. Protect Earth. Keep moving.' },
      { src: 'assets/perigee-freeze.png', alt: 'Perigee Panic gameplay showing a UFO and time-freeze power-up.', caption: 'UFOs, asteroids and time-freeze power-ups add to the orbital chaos.' },
      { src: 'assets/perigee-title.png', alt: 'The Perigee Panic title screen and original game logo.', caption: 'Perigee Panic: Stay In Your Orbit.' }
    ]
  },
  vr: {
    title: 'Perigee Panic 3D', subtitle: 'META QUEST / WEBXR PROTOTYPE',
    slides: [
      { src: 'assets/perigee-vr.jpg', alt: 'A WebXR development preview showing hand outlines around the miniature orbital arena.', caption: 'A captured WebXR development preview. Perigee Panic 3D is a prototype in development.' },
      { src: 'assets/perigee-vr-action.jpg', alt: 'A captured desktop development preview of the Perigee Panic 3D orbital arena.', caption: 'A desktop capture of the 3D prototype. Gameplay and presentation are still evolving.' }
    ]
  }
};
const dialog = document.querySelector('.gallery-dialog');
let activeGallery;
let slideIndex = 0;
let galleryTrigger;
function renderSlide() {
  const slide = activeGallery.slides[slideIndex];
  const img = document.querySelector('#gallery-image');
  img.src = slide.src;
  img.alt = slide.alt;
  document.querySelector('#gallery-caption').textContent = slide.caption;
  document.querySelector('#gallery-counter').textContent = `${slideIndex + 1} / ${activeGallery.slides.length}`;
}
function changeSlide(step) {
  slideIndex = (slideIndex + step + activeGallery.slides.length) % activeGallery.slides.length;
  renderSlide();
}
document.querySelectorAll('[data-gallery]').forEach(trigger => {
  trigger.addEventListener('click', () => {
    activeGallery = galleries[trigger.dataset.gallery];
    galleryTrigger = trigger;
    slideIndex = 0;
    document.querySelector('#gallery-title').textContent = activeGallery.title;
    document.querySelector('#gallery-subtitle').textContent = activeGallery.subtitle;
    renderSlide();
    dialog.showModal();
    document.body.classList.add('gallery-open');
  });
});
document.querySelector('.gallery-close').addEventListener('click', () => dialog.close());
document.querySelector('#gallery-prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('#gallery-next').addEventListener('click', () => changeSlide(1));
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  }
});
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') { event.preventDefault(); changeSlide(1); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); changeSlide(-1); }
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('gallery-open');
  if (galleryTrigger) galleryTrigger.focus();
});
