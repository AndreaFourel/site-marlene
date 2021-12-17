const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click' , () => {
    document.querySelector('.navbar-toggler').click();
  })
  navLink.removeEventListener('click', () => {
    document.querySelector('.navbar-toggler').click();
  })
})