//build custom web component here in JS

//define template
const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
    <!-- connect to remix icons (here in codepen, you will also need to add this to your HTML head under settings) -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    
    <!-- add template specific styles -->
    <style>
        * {
            margin: 0;
            padding: 0;
            border: none;
            box-sizing: border-box;
            background: none;
            font-size: 10px;
            font-family: "Poppins", sans-serif;
        }
        a {
            text-decoration: none;
        }
        ul {
            list-style: none;
        }
        .topnav-container {
            width: 100%;
            padding: 2rem;
            background: #fff;
        }
        .topnav {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            max-width: 800px;
            margin: 0 auto;
        }
        .link-list {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
        .link-list li {
            text-transform: uppercase;
            letter-spacing: .15rem;
            font-size: 1.8rem;
        }
        .menu-icon {
            font-size: 3rem;
            color: #777;
            padding-bottom: 1rem;
            display: none;
        }
        .topnav a {
            font-size: 1.8rem;
            color: #777;
        }
        .topnav a:hover {
            color: orangered;
        }

        /* MEDIA QUERY */
        @media screen and (max-width: 750px) {
        .topnav {
            flex-direction: column;
        }
        .menu-icon {
            display: block;
        }
        .link-list {
            flex-direction: column;
            width: 100%;
            height: 0;
            overflow: hidden;
        }
        .link-list li {
            text-align: center;
            width: 100%;
            padding: 1rem;
            border-top: 1px solid #e2e2e2;
        }
        .link-list li:last-child {
            border-bottom: 1px solid #e2e2e2;
        }
        .open {
            height: 100%;
        }
        }
    </style>
    
    <!-- add the HTML content -->
    <header class="topnav-container">
        <nav class="topnav">
            <button class="menu-btn" id="menu-btn">
                <i class="ri-menu-line menu-icon"></i> 
            </button>
            <ul class="link-list" id="link-list">
                <li><a href="index.html">home</a></li>
                <li><a href="blog.html">blog</a></li>
                <li><a href="shop.html">shop</a></li>
                <li><a href="about.html">about</a></li>
                <li><a href="connect.html">connect</a></li>
            </ul>
        </nav>
    </header>
`;

//define the class
class Header extends HTMLElement {
  constructor() {
    super();

    //establish shadow DOM
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }

  //topnav function
  toggleMenu() {
    const linkList = this.shadowRoot.querySelector("#link-list");

    linkList.classList.toggle("open");
  }

  //add event listener
  connectedCallback() {
    this.shadowRoot
      .querySelector("#menu-btn")
      .addEventListener("click", () => this.toggleMenu());
  }
}

//register the custom element using the customElements.define() method
customElements.define("header-component", Header);
