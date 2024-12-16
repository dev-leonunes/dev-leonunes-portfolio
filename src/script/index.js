let checkboxMenu = document.getElementById("checkbox-menu");
let menu = document.getElementById("menu");
let $html = document.querySelector("html");
let $themeSlider = document.getElementById("theme-slider");
let $themeIcon = document.querySelector(".theme-icon");

function applyTheme(theme) {
    if (theme === "dark") {
        $html.classList.add("dark-mode");
        $themeSlider.classList.add("active");
        $themeIcon.style.left = "35px";
    } else {
        $html.classList.remove("dark-mode");
        $themeSlider.classList.remove("active");
        $themeIcon.style.left = "5px";
    }
}

let savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme("light");
}

checkboxMenu.addEventListener("click", function () {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

$themeSlider.addEventListener("click", function () {
    let newTheme = $html.classList.contains("dark-mode") ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});