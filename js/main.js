// DOM Elements
const favicon = document.querySelector("#favicon");
const menu = document.getElementById("main-nav");
const buttonMenu = document.getElementById("main-button-nav");
const theme_mode_icons = document.getElementsByClassName("theme-mode-icon");

// Main
window.onload = () => {
    theme_color();
}

// Actions
buttonMenu.onclick = () => {
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

const theme_color = () => {
    if (localStorage.theme === "dark") {
        favicon.href = "images/dark-icon.png";
        document.documentElement.classList.add("dark");
        theme_mode_icons[0].style.display = "none";
        theme_mode_icons[1].style.display = "inline";
    }
    else {
        favicon.href = "images/icon.png";
        document.documentElement.classList.remove("dark");
        theme_mode_icons[0].style.display = "inline";
        theme_mode_icons[1].style.display = "none";
    }
}