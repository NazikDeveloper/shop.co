// const filter = document.querySelector(".casual-section__filter-container");
// const openBtn = document.querySelector(".casual-section__btn-filter");
// const closeBtn = document.querySelector(".casual-section__btn-filter-close");

// openBtn.addEventListener("click", () => {
//   if (window.innerWidth < 1280) {
//     filter.classList.add("is-open");
//   }
// });

// closeBtn.addEventListener("click", () => {
//   filter.classList.remove("is-open");
// });

// window.addEventListener("resize", () => {
//   if (window.innerWidth >= 1280) {
//     filter.classList.remove("is-open");
//   }
// });







const filter = document.querySelector(".casual-section__filter-container");
const backdrop = document.querySelector(".casual-section__backdrop");

const openBtn = document.querySelector(".casual-section__btn-filter");
const closeBtn = document.querySelector(".casual-section__btn-filter-close");

function openFilter() {
  if (window.innerWidth < 1280) {
    filter.classList.add("is-open");
    backdrop.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
}

function closeFilter() {
  filter.classList.remove("is-open");
  backdrop.classList.remove("is-open");
  document.body.style.overflow = "";
}

openBtn.addEventListener("click", openFilter);
closeBtn.addEventListener("click", closeFilter);
backdrop.addEventListener("click", closeFilter);

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1280) {
    closeFilter();
  }
});