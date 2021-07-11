const openBtn = document.getElementById("js-openBtn");
const gNavSp = document.getElementById("g-nav_sp");

openBtn.addEventListener('click', () => {
  openBtn.classList.toggle('active');
  gNavSp.classList.toggle('is-active');
})