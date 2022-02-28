/* jshint esversion: 8 */
const toggler = document.getElementById('navbar__toggler');
const openMenu = document.getElementById('navbar__open');
const closeMenu = document.getElementById('navbar__close');
const navMenu = document.querySelector('.navbar__components');
const navItems = document.querySelectorAll('.navbar__item');

toggler.addEventListener('click', toggleNavbar);

function toggleNavbar() {
  openMenu.classList.toggle('active');
  closeMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
  navItems.forEach((item) => {
    item.classList.toggle('visible');
  });
  console.log('clicked');
}