// Tell JS which HTML elements you are wanting it to look at and store them in a new variable:
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const linkList = document.getElementById("link-list");

// Add an event listener to the menu & close buttons:
menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

// Define the toggleMenu() function
function toggleMenu() {
  linkList.classList.toggle("open");
  menuBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("visible");
}

// Remember: Don't call the function here. You only want the function to run when the button and/or links are clicked!

// Check out the nav-links in index.html: onclick="toggleMenu()" was added to each link so the mobile menu will also close when a link is clicked.
