/* Scroll-reveal — progressive enhancement */
document.documentElement.classList.add('js-ready');

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
revealEls.forEach(el => io.observe(el));
