import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const burgerMenu = document.querySelector('.backdrop');
const openButton = document.querySelector('.button-burger-menu');
const closeButton = document.querySelector('.button-close');

const toggleMenu = () => {
  const isMenuOpen =
    openButton.getAttribute('aria-expanded') === 'true' || false;
  openButton.setAttribute('aria-expanded', !isMenuOpen);
  burgerMenu.classList.toggle('is-open');

  if (!isMenuOpen) {
    disableBodyScroll(burgerMenu);
  } else {
    enableBodyScroll(burgerMenu);
  }
};

openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
burgerMenu.addEventListener('click', event => {
  if (event.target === burgerMenu) {
    toggleMenu();
  }
});

window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
  if (!e.matches) return;
  burgerMenu.classList.remove('is-open');
  openButton.setAttribute('aria-expanded', false);
  enableBodyScroll(burgerMenu);
});
