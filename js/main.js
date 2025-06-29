const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
const header = document.querySelector('.header');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
