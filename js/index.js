const toggle = document.querySelector('.toggle');
const navul = document.querySelector('.menu-list');

toggle.addEventListener('click', (e) => {
  e.preventDefault();
  navul.classList.toggle('open');
});
