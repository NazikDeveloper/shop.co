
const mobileShopBtn = document.querySelector(
  ".mobile-menu__shop-btn"
);

const mobileSubmenu = document.querySelector(
  ".mobile-menu__submenu"
);

const mobileSubmenuBtns = document.querySelectorAll(
  ".mobile-menu__submenu-btn"
);

const mobileCloseBtn = document.querySelector(
  ".mobile-menu__btn-close"
);


// Відкриття / закриття Shop
mobileShopBtn.addEventListener("click", event => {
  event.stopPropagation();

  const isOpen =
    mobileShopBtn.getAttribute("aria-expanded") === "true";

  mobileShopBtn.setAttribute(
    "aria-expanded",
    String(!isOpen)
  );

  mobileSubmenu.hidden = isOpen;

  // якщо закриваємо Shop - закриваємо вкладені меню
  if (isOpen) {
    closeMobileSubmenus();
  }
});


// Відкриття / закриття Men
mobileSubmenuBtns.forEach(button => {
  button.addEventListener("click", event => {
    event.stopPropagation();

    const submenu = button.nextElementSibling;

    const isOpen = !submenu.hidden;


    // закриваємо інші вкладені меню
    document
      .querySelectorAll(".mobile-menu__subsubmenu")
      .forEach(menu => {
        if (menu !== submenu) {
          menu.hidden = true;
        }
      });


    // закриваємо інші aria-expanded
    mobileSubmenuBtns.forEach(btn => {
      if (btn !== button) {
        btn.setAttribute(
          "aria-expanded",
          "false"
        );
      }
    });


    submenu.hidden = isOpen;

    button.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );
  });
});


// Закриття всіх підменю
function closeMobileSubmenus() {
  document
    .querySelectorAll(".mobile-menu__subsubmenu")
    .forEach(menu => {
      menu.hidden = true;
    });

  mobileSubmenuBtns.forEach(button => {
    button.setAttribute(
      "aria-expanded",
      "false"
    );
  });
}


// Закриття всього мобільного меню кнопкою Х
mobileCloseBtn.addEventListener("click", () => {
  mobileShopBtn.setAttribute(
    "aria-expanded",
    "false"
  );

  mobileSubmenu.hidden = true;

  closeMobileSubmenus();
});