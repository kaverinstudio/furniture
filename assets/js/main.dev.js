"use strict";

var w = document.documentElement.clientWidth;
var tempW = 3;
var tempH = 20;

if (1000 > w && w > 500) {
  tempW = 2;
  tempH = 10;
}

;

if (500 > w) {
  tempW = 1;
}

;
var swiper = new Swiper('.swiper-container', {
  slidesPerView: tempW,
  spaceBetween: tempH,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var t;

function up() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

  if (top > 0) {
    window.scrollBy(0, -100);
    t = setTimeout('up()', 20);
  } else clearTimeout(t);

  return false;
}

var sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
var menuIcon = document.querySelector('.menu-icon');
var sidebar = document.querySelector('.header__bottom-menu-mobile');

sidebarToggleBtn.onclick = function () {
  menuIcon.classList.toggle('menu-icon-active');
  sidebar.classList.toggle('header__bottom-menu-mobile-active');
};