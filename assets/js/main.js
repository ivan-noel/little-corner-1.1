/* =======================================================
   little corner — shared behaviour
======================================================= */
document.addEventListener('DOMContentLoaded', () => {

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  // Play music toggle (visual only — no audio asset wired up)
  const toggle = document.querySelector('.switch');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const on = toggle.getAttribute('data-on') === 'true';
      toggle.setAttribute('data-on', String(!on));
      toggle.setAttribute('aria-checked', String(!on));
    });
  }

  // Smooth in-page anchor scrolling for story nav
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Back to top
  document.querySelectorAll('.back-to-top').forEach((btn) => {
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  });
});
