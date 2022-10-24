const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const linkList = document.getElementById("link-list");

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  linkList.classList.toggle("open");
  menuBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("visible");
}
