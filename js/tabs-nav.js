
const tabs = document.querySelectorAll(
  '.product-tabs-section__btn-tabs'
);

const contents = document.querySelectorAll(
  '.product-tabs-section__all-reviews-container'
);

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const currentTab = tab.dataset.tab;

    // прибираємо активний стан у всіх кнопок
    tabs.forEach(btn => {
      btn.classList.remove(
        'product-tabs-section__btn-tabs--active'
      );
    });

    // приховуємо всі контейнери
    contents.forEach(content => {
      content.classList.remove(
        'product-tabs-section__all-reviews-container--active'
      );
    });

    // активна кнопка
    tab.classList.add(
      'product-tabs-section__btn-tabs--active'
    );

    // показуємо потрібний контент
    document
      .querySelector(`[data-content="${currentTab}"]`)
      .classList.add(
        'product-tabs-section__all-reviews-container--active'
      );
  });
});