let checkboxMenu = document.getElementById("checkbox-menu");
let menu = document.getElementById("menu");
let $html = document.querySelector("html");
let $themeSlider = document.getElementById("theme-slider");

checkboxMenu.addEventListener("click", function () {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

$themeSlider.addEventListener("click", function () {
    $themeSlider.classList.toggle("active");
    if ($html.classList.contains("light-mode")) {
        $html.classList.remove("light-mode");
    } else {
        $html.classList.add("light-mode");
    }
});