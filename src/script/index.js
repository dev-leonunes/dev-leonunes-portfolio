let checkboxMenu = document.getElementById("checkbox-menu");
let menu = document.getElementById("menu");
let $html = document.querySelector("html");
let $themeSlider = document.getElementById("theme-slider");
let $themeIcon = document.querySelector(".theme-icon");
let $themeText = document.querySelector(".theme-text");

const darkModeSVG = `
<svg role="img" viewBox="0 0 24 24" aria-labelledby="color-scheme-dark">
    <path d="M12.048 21.963c-.308 0-.618-.015-.93-.043-2.66-.246-5.064-1.513-6.771-3.567s-2.512-4.651-2.266-7.311a10.004 10.004 0 0 1 9.038-9.038 1 1 0 0 1 .896 1.589 6.008 6.008 0 0 0 1.258 8.392c2.078 1.536 5.055 1.536 7.133 0a1 1 0 0 1 1.591.896 9.951 9.951 0 0 1-9.949 9.082M9.315 4.438a8.006 8.006 0 0 0-5.244 6.787 7.954 7.954 0 0 0 1.813 5.849 7.95 7.95 0 0 0 5.417 2.854 7.95 7.95 0 0 0 8.266-5.243 8.01 8.01 0 0 1-2.729.476 7.946 7.946 0 0 1-4.755-1.565C9.174 11.443 8.145 7.68 9.315 4.438"></path>
</svg>`;

const lightModeSVG = `
<svg role="img" viewBox="0 0 24 24" aria-labelledby="color-scheme-light">
    <path d="M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6m0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4m0-4a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1m0 20a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1M5.64 6.64a.997.997 0 0 1-.707-.293l-1.42-1.42a.999.999 0 1 1 1.414-1.414l1.42 1.42A.999.999 0 0 1 5.64 6.64m14.139 14.139a.997.997 0 0 1-.707-.293l-1.42-1.42a.999.999 0 1 1 1.414-1.414l1.42 1.42a.999.999 0 0 1-.707 1.707M3 13H1a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2m20 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2M4.22 20.779a.999.999 0 0 1-.707-1.707l1.42-1.42a.999.999 0 1 1 1.414 1.414l-1.42 1.42a.993.993 0 0 1-.707.293M18.359 6.64a.999.999 0 0 1-.707-1.707l1.42-1.42a.999.999 0 1 1 1.414 1.414l-1.42 1.42a.997.997 0 0 1-.707.293">
    </path>
</svg>`;

function applyTheme(theme) {
    if (theme === "dark") {
        $html.classList.add("dark-mode");
        $themeSlider.classList.add("active");
        $themeIcon.innerHTML = darkModeSVG;
        $themeIcon.style.left = "45px";
        $themeText.textContent = "Night";
        $themeText.style.left = "5px";
    } else {
        $html.classList.remove("dark-mode");
        $themeSlider.classList.remove("active");
        $themeIcon.innerHTML = lightModeSVG;
        $themeIcon.style.left = "5px";
        $themeText.textContent = "Day";
        $themeText.style.left = "35px";
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