const menuBtn = document.getElementById('menu-btn');
const listsContainer = document.getElementById('lists-container');

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    listsContainer.classList.toggle("open");
}
