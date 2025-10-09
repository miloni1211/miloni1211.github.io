// Mobile menu toggle
document.getElementById('mobile-menu-btn')?.addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu?.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // allow normal behavior if href="#" (no target)
    const href = this.getAttribute('href');
    if (!href || href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu if open
    document.getElementById('mobile-menu')?.classList.add('hidden');
  });
});

// Contact form submission
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]')?.value || 'there';
  const email = this.querySelector('input[type="email"]')?.value || '';
  // const message = this.querySelector('textarea')?.value || '';

  alert(`Thank you ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
  this.reset();
});

// Add scroll effect to navigation
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (!nav) return;
  if (window.scrollY > 100) {
    nav.classList.add('shadow-lg');
  } else {
    nav.classList.remove('shadow-lg');
  }
});
