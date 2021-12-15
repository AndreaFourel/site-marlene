const header = document.querySelector('#header');
const intro = document.querySelector('.intro');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY >= (header.offsetHeight - 20)) {
    header.classList.add('header-shadow');
  } else if (window.scrollY < (header.offsetHeight - 20)) {
    header.classList.remove('header-shadow')
  }
})

navLinks.forEach(navLink => {
  navLink.addEventListener('click' , () => {
    document.querySelector('.navbar-toggler').click();
  })
  navLink.removeEventListener('click', () => {
    document.querySelector('.navbar-toggler').click();
  })
})

