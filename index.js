const menuToggle = document.querySelector('#menu-toggle');
const menuList = document.querySelector('.menu ul');
const hamburgerMenu = document.querySelector('.hamburger-menu');

menuToggle.addEventListener('click', () => {
  menuList.classList.toggle('show');
  hamburgerMenu.classList.toggle('change');
});
