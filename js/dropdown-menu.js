// const dropdownButtons = document.querySelectorAll(
//   '.dropdown-latest__btn-latest'
// );

// dropdownButtons.forEach(button => {
//   button.addEventListener('click', event => {
//     event.stopPropagation();

//     const dropdown = button.closest('.dropdown-latest');
//     const menu = dropdown.querySelector('.dropdown-latest__menu');

//     const isExpanded = button.getAttribute('aria-expanded') === 'true';

//     closeAllDropdowns(button);

//     button.setAttribute('aria-expanded', String(!isExpanded));
//     menu.hidden = isExpanded;
//   });
// });

// function closeAllDropdowns(exceptButton = null) {
//   dropdownButtons.forEach(button => {
//     if (button === exceptButton) return;

//     const dropdown = button.closest('.dropdown-latest');
//     const menu = dropdown.querySelector('.dropdown-latest__menu');

//     button.setAttribute('aria-expanded', 'false');
//     menu.hidden = true;
//   });
// }

// document.addEventListener('click', () => {
//   closeAllDropdowns();
// });




const dropdownButtons = document.querySelectorAll(
  '.dropdown-latest__btn-latest'
);

function closeAllDropdowns(exceptButton = null) {
  dropdownButtons.forEach(button => {
    if (button === exceptButton) return;

    const menu = button
      .closest('.dropdown-latest')
      .querySelector('.dropdown-latest__menu');

    button.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  });
}

dropdownButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.stopPropagation();

    const menu = button
      .closest('.dropdown-latest')
      .querySelector('.dropdown-latest__menu');

    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    closeAllDropdowns(button);

    button.setAttribute('aria-expanded', !isExpanded);
    menu.hidden = isExpanded;
  });
});

document.addEventListener('click', closeAllDropdowns);