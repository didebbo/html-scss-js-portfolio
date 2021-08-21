const mainNav = document.getElementById("main-nav");
const buttonNav = document.getElementById("main-button-nav");

const show_menu = () => {
    mainNav.classList.add("show");
    buttonNav.classList.add("focus");
}

const hide_menu = () => {
    mainNav.classList.remove("show");
    buttonNav.classList.remove("focus");
}