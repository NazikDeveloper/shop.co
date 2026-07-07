const toggleButtons = document.querySelectorAll("[data-toggle]");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selector = button.dataset.toggle;
    const backdrop = document.querySelector(selector);

    backdrop.classList.toggle("is-hidden");
  });
});
