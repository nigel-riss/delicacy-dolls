/*var heroDiv = document.querySelector(".hero");
var idealRatio = 0.5625;

function onResize(){
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    var docRatio = winHeight / winWidth;
    var divHeight = 0;
    var divWidth = 0;
    
    //document.querySelector(".test").innerHTML = "docRatio: " + docRatio + "<br>winWidth: " + winWidth + "<br>winHeight: " + winHeight;
    
    if (docRatio >= idealRatio) {
        divWidth = heroDiv.style.width;
        divHeight = idealRatio * winWidth;
    } else {
        divWidth = Math.round(winHeight / idealRatio);
        //divWidth = winWidth;
        divHeight = idealRatio * divWidth;
        //alert("test" + heroDiv.style.backgroundSize);
    }
    
    heroDiv.style.width = divWidth + "px";
    heroDiv.style.height = Math.round(divHeight) + "px";
    
    //////////////////
    var mosaicDiv = document.querySelector(".mosaic");
    mosaicDiv.style.width = divWidth + "px";
}

onResize();

window.onresize = onResize;*/

(function() {
    var hero = document.querySelector(".hero");

    //HERO HEIGHT
    var maxHeight = 1080;
    //hero.style.height = Math.min(maxHeight, (window.innerHeight)) - 50 + "px";

    //*/

    //SLIDER
    //var slideIterator = 1;
    //
    //function changeSlide() {
    //    hero.classList.remove("hero--slide-" + slideIterator);
    //    (slideIterator === 3) ? slideIterator = 1 : slideIterator++;
    //    hero.classList.add("hero--slide-" + slideIterator);
    //}

    //setInterval(changeSlide, 5000);

    //*/

    //PARALAX
    //    window.onscroll = function() {
    //        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    //        hero.style.backgroundPositionY = -scrolled / 2 + "px";
    //    };
    
    //MAIN MENU
	var header = document.querySelector(".header");
    var logo = document.querySelector(".logo");
    var mainMenu = document.querySelector(".main-menu");
    var menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", function(event) {
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



//*/