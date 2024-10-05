var checkboxMenu = document.getElementById("checkbox-menu");
var menu = document.getElementById("menu");

checkboxMenu.addEventListener("click", function () {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});