// Tell JS which HTML elements you are wanting it to look at and store them in a new variable:
const menuBtn = document.getElementById("menu-btn");
const linkList = document.getElementById("link-list");

// Add an event listener to the menu button:
menuBtn.addEventListener("click", toggleMenu);

// Define the toggleMenu() function
function toggleMenu() {
  linkList.classList.toggle("open");
}

// Remember: Don't call the function here. You only want the function to run when the button and/or links are clicked!

// Check out the nav-links in index.html: onclick="toggleMenu()" was added to each link so the mobile menu will also close when a link is clicked.