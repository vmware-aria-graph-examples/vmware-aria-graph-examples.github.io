function toggleThemeMode(mode) {
    var lightModeCss = document.getElementById("light-mode-css");
    var darkModeCss = document.getElementById("dark-mode-css");
    var toggleIcon = document.getElementById("icon-theme-mode");

    if(mode == undefined) {
        if(toggleIcon.getAttribute("shape") == "sun") {
            mode = "light"
        } else if (toggleIcon.getAttribute("shape") == "moon"){
            mode = "dark"
        }
    }

    if(mode == "light") {
        // Enable light mode
        darkModeCss.disabled = true;
        lightModeCss.disabled = false;
        toggleIcon.setAttribute("shape", "moon");
        localStorage.setItem("clarity-theme-mode", "light");
    } else {
        darkModeCss.disabled = false;
        lightModeCss.disabled = true;
        toggleIcon.setAttribute("shape", "sun");
        localStorage.setItem("clarity-theme-mode", "dark");
    }
}

function setCurrentTheme() {
    const currentTheme = localStorage.getItem('clarity-theme-mode') ? localStorage.getItem('clarity-theme-mode') : null;
    if(currentTheme) {
        toggleThemeMode(currentTheme)
    }
}