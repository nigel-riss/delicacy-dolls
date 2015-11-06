(function () {

    //////////////////////
    // MAIN MENU
    //////////////////////
    var header = document.querySelector(".header");
    var logo = document.querySelector(".logo");
    var mainMenu = document.querySelector(".main-menu");
    var menuButton = document.querySelector(".menu-button");
    
    menuButton.addEventListener("click", function (event) {
        if (logo.classList.contains("logo--menu-shown")) {
            header.classList.remove("header--menu-shown");
            logo.classList.remove("logo--menu-shown");
            mainMenu.classList.remove("main-menu--shown");
        } else {
            header.classList.add("header--menu-shown");
            logo.classList.add("logo--menu-shown");
            mainMenu.classList.add("main-menu--shown");
        }
    });
})();