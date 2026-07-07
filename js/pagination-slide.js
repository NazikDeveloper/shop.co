const pages = document.querySelectorAll('.casual-section__block');
const pageBtns = document.querySelectorAll('.pagination__page-btn');
const prevBtn = document.querySelector('.pagination__btn-prev');
const nextBtn = document.querySelector('.pagination__btn-next');

let currentPage = 0;

function showPage(pageIndex) {
  pages.forEach(page => {
    page.classList.remove('casual-section__block--active');
  });

  pageBtns.forEach(btn => {
    btn.classList.remove('pagination__page-btn--active');
  });

  pages[pageIndex].classList.add('casual-section__block--active');
  pageBtns[pageIndex].classList.add('pagination__page-btn--active');

  currentPage = pageIndex;

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
}

pageBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    showPage(Number(btn.dataset.page));
  });
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    showPage(currentPage - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1);
  }
});

showPage(0);
