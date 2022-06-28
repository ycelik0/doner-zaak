console.log('main.js loaded');


window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  const navbarNav = document.querySelector('.navbar-nav');

  navbar.classList.toggle('scrolled', window.scrollY > 0);
  navbarNav.classList.toggle('scrolled', window.scrollY > 0);
})
