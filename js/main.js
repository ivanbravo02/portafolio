// Obtener elementos
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
const header = document.querySelector('.header');

// Validar que existan los elementos para evitar errores si el DOM cambia
if (navToggle && navList && header) {
  // Función para alternar menú y actualizar atributo aria-expanded
  navToggle.addEventListener('click', () => {
    const isActive = navList.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isActive);
  });

  // Cambiar clase del header al hacer scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
} else {
  console.warn('Elementos navToggle, navList o header no encontrados en el DOM');
}
navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navList.classList.contains('active')) {
    navList.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
const contacto = document.querySelector('.contacto');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contacto.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

observer.observe(contacto);
