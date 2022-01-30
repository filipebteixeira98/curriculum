const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

const navLink = document.querySelectorAll('.nav__link');

function activeLink() {
  navMenu.classList.remove('show');
}

navLink.forEach((link) => link.addEventListener('click', activeLink));
