const menuBtn = document.getElementById("menu-btn");
const linkList = document.getElementById("link-list");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  linkList.classList.toggle("open");
}
