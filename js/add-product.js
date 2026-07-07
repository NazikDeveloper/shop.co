
  document.addEventListener('click', e => {
  const container = e.target.closest('.cart-section__add-container');

  if (!container) return;

  const input = container.querySelector('.cart-section__quantity-input');

  if (e.target.closest('.cart-section__count-plus')) {
    if (+input.value < +input.max) {
      input.value = +input.value + 1;
    }
  }

  if (e.target.closest('.cart-section__count-minus')) {
    if (+input.value > +input.min) {
      input.value = +input.value - 1;
    }
  }
});

document
  .querySelectorAll('.cart-section__quantity-input')
  .forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/g, '');
    });

    input.addEventListener('change', () => {
      let value = parseInt(input.value, 10);

      if (isNaN(value)) value = +input.min;
      if (value < +input.min) value = +input.min;
      if (value > +input.max) value = +input.max;

      input.value = value;
    });
  });