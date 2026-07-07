const closeBtn = document.querySelector('.btn-close');
const banner = document.querySelector('.header__promo');

closeBtn.addEventListener('click', () => {
  if (window.innerWidth > 768) {
    banner.style.display = 'none';
  }
});





