
const mainImage = document.querySelector('.product-gallery__main-img');
const thumbnails = document.querySelectorAll('.product-gallery__thumb');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const { large, large2x } = thumbnail.dataset;

    mainImage.src = large;
    mainImage.srcset = `${large} 1x, ${large2x} 2x`;
    mainImage.alt = thumbnail.alt;

    thumbnails.forEach(item => {
      item.classList.remove('product-gallery__thumb--active');
    });

    thumbnail.classList.add('product-gallery__thumb--active');
  });
});