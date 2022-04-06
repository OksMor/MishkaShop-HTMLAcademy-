var nav = document.querySelector('.header-navigation');
var navToggle = document.querySelector('.header-navigation__toggle');

nav.classList.remove('header-navigation--nojs');

navToggle.addEventListener('click', function() {
  if (nav.classList.contains('header-navigation--closed')) {
    nav.classList.remove('header-navigation--closed');
    nav.classList.add('header-navigation--opened');
  } else {
    nav.classList.add('header-navigation--closed');
    nav.classList.remove('header-navigation--opened');
  }
})
