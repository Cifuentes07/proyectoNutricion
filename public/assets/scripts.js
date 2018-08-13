'use strict';

const inicio = document.querySelector('.inicio');
const presentacion = document.querySelector('.presentacion');

inicio.addEventListener('click', ocultaTodo);
presentacion.addEventListener('click', ocultaTodo);
document.addEventListener('click', ocultaTodo);

function ocultaTodo (event) {
  if(event.target != showBlog && event.target != showPackage) {
    blog.classList.add('hideMenuBlog');
    paquetes.classList.add('hidePaquetes');
  }
}

const showPackage = document.querySelector('.showPackage');
const paquetes = document.querySelector('.paquetes');

showPackage.addEventListener('click', toggleDespliegaPaquetes);

function toggleDespliegaPaquetes () {
  blog.classList.add ('hideMenuBlog');
  paquetes.classList.toggle ('hidePaquetes');
}

const blog = document.querySelector('.blog');
const showBlog = document.querySelector('.showBlog');

showBlog.addEventListener('click', toggleDespliegaMenuBlog);

function toggleDespliegaMenuBlog () {
  paquetes.classList.add('hidePaquetes');
  blog.classList.toggle('hideMenuBlog');
}

//para menu en tablet&mobil

const menuIcon = document.querySelector('.menuIcon');
const menuList = document.querySelector('#menuList');

menuIcon.addEventListener('click', toggleMenuDesplegable);

function toggleMenuDesplegable () {
  menuList.classList.toggle('menu-screenMobile');
  menuList.classList.toggle('menuMobile');
  const hasNavLic = navLic.className.indexOf('navLic');
  if (hasNavLic != -1) {
    navLic.classList.toggle ('navLic');
    navLic.classList.add ('hideNavLic');
  }
}

document.addEventListener('click', ocultaMenu);
function ocultaMenu (event) {
  const menuList = document.querySelector('#menuList');
  const hasMenuMobile = menuList.className.indexOf('menuMobile');
  if (event.target != menuIcon && hasMenuMobile != -1 ) {
      menuList.classList.toggle ('menuMobile');
      menuList.classList.toggle ('menu-screenMobile');
    }
  const hasNavLic = navLic.className.indexOf('navLic');
  if (event.target != iconNext && hasNavLic != -1 ) {
      navLic.classList.toggle ('navLic');
      navLic.classList.toggle ('hideNavLic');
  }
}

const iconNext = document.querySelector('.iconNext')
const navLic = document.querySelector('#navLic');

iconNext.addEventListener('click', toggleShowNav);

function toggleShowNav () {
  navLic.classList.toggle ('hideNavLic');
  navLic.classList.toggle ('navLic');
}

//carousel
const nextButton = document.querySelector('.next');
const previewButton = document.querySelector('.preview');
const carouselImages = document.querySelectorAll('.carousel__picture');

nextButton.addEventListener('click', nextImage);
previewButton.addEventListener('click', previewImage);

//setInterval(nextImage, 1000);

function nextImage() {
  let nextPosition;
  const activePosition = getActiveImage();
  nextPosition = Number (activePosition) + 1;
  if (nextPosition > carouselImages.length - 1) {
    nextPosition = 0;
  }
  carouselImages[nextPosition].classList.add ('active');
}

function previewImage() {
  let previewPosition;
  const activePosition = getActiveImage();
  previewPosition = Number(activePosition) - 1;
  if (previewPosition < 0) {
    previewPosition = carouselImages.length - 1;
  }
  carouselImages[previewPosition].classList.add ('active');
}

function getActiveImage() {
  for (const image of carouselImages) {
    if(image.classList.contains('active')){
      const activePosition = image.getAttribute('data-position');
      carouselImages[activePosition].classList.remove('active');
      return activePosition;
    }
  }
}
