// Interactividad general del sitio
document.addEventListener('DOMContentLoaded', () => {

  // --- Menú responsive ---
  const btnMenu = document.getElementById('btn-menu');
  const nav = document.getElementById('main-nav');
  btnMenu && btnMenu.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // --- Resaltar link activo ---
  document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', () => {
      document.querySelectorAll('nav a').forEach(x => x.classList.remove('active'));
      a.classList.add('active');
      if (nav.classList.contains('open')) nav.classList.remove('open');
    });
  });

  // --- Animación al hacer scroll ---
  const sections = document.querySelectorAll('main section, .page');
  const appearOptions = { threshold: 0.15 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);
  sections.forEach(sec => appearOnScroll.observe(sec));

 

});
