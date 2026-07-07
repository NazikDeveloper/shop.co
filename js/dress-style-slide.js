document.addEventListener('DOMContentLoaded', () => {
  initAccordion('.filter-clothing', '.filter-clothing__btn-clothing');
  initAccordion('.filter-style', '.filter-style__btn-category');
});

function initAccordion(containerSelector, buttonSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const buttons = container.querySelectorAll(buttonSelector);

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('aria-controls');
      const content = document.getElementById(targetId);

      if (!content) return;

      const isOpen = button.classList.contains('is-open');

      // закриваємо інші в цьому контейнері
      buttons.forEach(btn => {
        if (btn === button) return;

        btn.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');

        const otherContent = document.getElementById(
          btn.getAttribute('aria-controls')
        );

        if (otherContent) {
          otherContent.style.display = 'none';
        }
      });

      // toggle поточного
      if (isOpen) {
        button.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
        content.style.display = 'none';
      } else {
        button.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
        content.style.display = 'block';
      }
    });
  });
}