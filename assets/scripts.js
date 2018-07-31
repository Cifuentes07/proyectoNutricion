'use strict';

const menuIcon = document.querySelector('.menuIcon');
const menuMobile = document.querySelector('.menuMobile');

menuIcon.addEventListener('click', toggleMenuDesplegable);


function toggleMenuDesplegable () {
  menuMobile.classList.toggle('menu-screenMobile');
}
