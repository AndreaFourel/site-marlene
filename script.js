const navLinks = document.querySelectorAll('.nav-link');
const myButton = document.getElementById('up-btn');
document.querySelectorAll(".year").forEach(el => {
  el.textContent = new Date().getFullYear();
});
//hide nav-items when click on a nav-item

navLinks.forEach(navLink => {
  navLink.addEventListener('click' , () => {
    document.querySelector('.navbar-toggler').click();
  })
  navLink.removeEventListener('click', () => {
    document.querySelector('.navbar-toggler').click();
  })
})

//back to top button

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
