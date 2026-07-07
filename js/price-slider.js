const slider = document.getElementById('priceRange');
const output = document.getElementById('priceValue');

// Оновлення цифри при перетягуванні
slider.oninput = function() {
  output.textContent = this.value; // Замість innerHTML використовуємо textContent
}