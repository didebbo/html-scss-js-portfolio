// DOM Elements
const favicon = document.querySelector("#favicon");
const menu = document.getElementById("main-nav");
const buttonMenu = document.getElementById("main-button-nav");
const themeIcon = document.getElementById("theme-icon");
const contactForm = document.getElementById("contattami");
const contactFormArea = document.getElementById("textarea");

const pages = [
    document.getElementById("chi-sono"),
    document.getElementById("portfolio"),
]
const theme_mode_icons = document.getElementsByClassName("theme-mode-icon");

// Main
window.onload = () => {
    theme_color();
    load_page();
}

// Actions
themeIcon.onclick = () => {
    if (localStorage.theme === "dark") localStorage.theme = "light";
    else localStorage.theme = "dark";
    theme_color();
}

// Function
const show_menu = () => {
    menu.classList.add("show");
    buttonMenu.classList.add("focus");
}

const hide_menu = () => {
    menu.classList.remove("show");
    buttonMenu.classList.remove("focus");
}

const show_page = (gotoPage) => {
    // console.clear();
    // console.log("gotoPage:" + gotoPage);
    // console.log("lastLoadedPage: " + localStorage.lastLoadedPage);

    let not_found = true;

    pages.forEach(page => {
        if (gotoPage === "#" + page.id) {
            not_found = false;
            page.style.display = "flex";
            localStorage.lastLoadedPage = page.id;
        } else page.style.display = "none";
    })
    if (not_found) {
        // console.log("gotoPage include '#': " + gotoPage.includes("#"));
        if (!gotoPage.includes("#") || localStorage.lastLoadedPage == null) {
            pages[0].style.display = "flex";
            localStorage.lastLoadedPage = pages[0].id;
        } else document.getElementById(localStorage.lastLoadedPage).style.display = "flex";

    }
}

const toggle_textarea = () => {
    if (contactForm.classList.contains('show')) contactForm.classList.remove('show');
    else {
        contactFormArea.value = "";
        contactForm.classList.add('show');
    }
}

const load_page = () => {

    let currentAnchor = window.location.href;
    currentAnchor = currentAnchor.substr(currentAnchor.lastIndexOf("/") + 1);
    if (currentAnchor.includes("#")) currentAnchor = currentAnchor.substr(currentAnchor.lastIndexOf("#"));
    show_page(currentAnchor);
}

const theme_color = () => {
    if (localStorage.theme === "dark") {
        favicon.href = "images/dark-icon.png";
        document.documentElement.classList.add("dark");
        theme_mode_icons[0].style.display = "none";
        theme_mode_icons[1].style.display = "inline";
    } else {
        favicon.href = "images/icon.png";
        document.documentElement.classList.remove("dark");
        theme_mode_icons[0].style.display = "inline";
        theme_mode_icons[1].style.display = "none";
    }
}