// Double Dash Creative x Flexem pitch deck.
// Uses the shared master (../../presentation.js) for keys, clicks, swipes, hash and speaker notes (N).
// This file only resets each slide's scroll position when it becomes active, so a long slide
// opens at the top on a small screen. No animation is added here.
document.addEventListener('DOMContentLoaded', () => {
  initPresentation();

  const slides = [...document.querySelectorAll('#deck .slide')];

  const observer = new MutationObserver(mutations => {
    mutations.forEach(m => {
      const el = m.target;
      const before = m.oldValue || '';
      if (el.classList.contains('active') && !before.includes('active')) {
        el.scrollTop = 0;
      }
    });
  });

  slides.forEach(s => observer.observe(s, { attributes: true, attributeFilter: ['class'], attributeOldValue: true }));
});
