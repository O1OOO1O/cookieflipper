// Currently all tooltips are handled via CSS.
// If additional JavaScript interactivity is needed later (like dynamic loading),
// code can be added here.

// Example: Smooth scroll fallback (not needed if CSS 'scroll-behavior: smooth' is supported)

document.querySelectorAll('.menu a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

