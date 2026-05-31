// ==============================
// GRACIELA OLIVEIRA - INTERACTIONS
// ==============================

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Auto-update year
const yearEl = document.getElementById('currentYear');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Reveal on scroll (Intersection Observer)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('section h2, section article, section details').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Close other FAQ items when one opens (accordion behavior)
const faqList = document.getElementById('faqList');
if (faqList) {
  const detailsList = faqList.querySelectorAll('details');
  detailsList.forEach((details) => {
    details.addEventListener('toggle', () => {
      if (details.open) {
        detailsList.forEach((other) => {
          if (other !== details && other.open) {
            other.open = false;
          }
        });
      }
    });
  });
}
