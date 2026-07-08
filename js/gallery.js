const mainImage = document.querySelector(".product-gallery__main-img");
const thumbnails = document.querySelectorAll(".product-gallery__thumb");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const large = thumbnail.getAttribute("data-large");
    const large2x = thumbnail.getAttribute("data-large-2x");

    if (!large) return;

    mainImage.src = large;

    if (large2x) {
      mainImage.srcset = `${large} 1x, ${large2x} 2x`;
    }

    mainImage.alt = thumbnail.alt;

    thumbnails.forEach((item) => {
      item.classList.remove("product-gallery__thumb--active");
    });

    thumbnail.classList.add("product-gallery__thumb--active");
  });
});