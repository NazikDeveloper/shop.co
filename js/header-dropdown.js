const dropdownButtons = document.querySelectorAll('.header__btn-dropdown');
const submenuButtons = document.querySelectorAll('.header__submenu-btn');


// Головне меню Shop
dropdownButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.stopPropagation();

    const block = button.closest('.header__dropdown-block');
    const menu = block.querySelector('.header__dropdown-menu');

    const isOpen =
      button.getAttribute('aria-expanded') === 'true';

    // Закриваємо всі інші меню
    closeAllDropdowns(button);

    // Закриваємо всі підменю перед відкриттям Shop
    closeAllSubmenus();

    button.setAttribute('aria-expanded', String(!isOpen));
    menu.hidden = isOpen;
  });
});


// Вкладені меню (Men → T-Shirts і т.д.)
submenuButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.stopPropagation();

    const submenu = button.nextElementSibling;

    // Закриваємо інші підменю
    document.querySelectorAll('.header__submenu').forEach(menu => {
      if (menu !== submenu) {
        menu.hidden = true;
      }
    });

    submenu.hidden = !submenu.hidden;
  });
});


// Закриття головних меню
function closeAllDropdowns(except = null) {
  dropdownButtons.forEach(button => {
    if (button === except) return;

    const block = button.closest('.header__dropdown-block');
    const menu = block.querySelector('.header__dropdown-menu');

    button.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  });
}


// Закриття всіх підменю
function closeAllSubmenus() {
  document.querySelectorAll('.header__submenu').forEach(menu => {
    menu.hidden = true;
  });
}


// Клік поза меню
document.addEventListener('click', event => {
  if (event.target.closest('.header__dropdown-block')) {
    return;
  }

  closeAllDropdowns();
  closeAllSubmenus();
});