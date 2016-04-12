// jshint browser: true
// jshint plusplus: false 


;(function () {
    "use strict";

    //////////////////////
    // HERO HEIGHT
    //////////////////////
    var hero = document.querySelector(".hero");

    function adjustHeroHeight() {
        var winWidth = (window.outerWidth > 0) ? window.innerWidth : screen.width;

        var maxHeight = 480;
        if (winWidth < 768) {
            maxHeight = 480;
        } else if (winWidth < 1000) {
            maxHeight = 1024;
        } else {
            maxHeight = 1080;
        }

        hero.style.height = Math.min(maxHeight, (window.innerHeight)) + "px";
    }
    
    adjustHeroHeight();



    //////////////////////
    // RESIZE
    //////////////////////
    window.onresize = function () {
        adjustHeroHeight();
    };



    //////////////////////
    // PARALAX
    //////////////////////
    var heroSlides = document.querySelectorAll(".hero__slide");
    var i = 0;
    var winWidth = (window.outerWidth > 0) ? window.innerWidth : screen.width;
    var winHeight = (window.outerHeight > 0) ? window.innerHeight : screen.height;
    var paralaxRatio = 2;
    
    // window.onscroll = function () {
    //     for (i = 0; i < heroSlides.length; i++) {
    //         if (winWidth < 1000) return;
    //         var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    //         heroSlides[i].style.backgroundPositionY = scrolled / paralaxRatio + "px";
    //     }
    // };



    //////////////////////
    // SLIDER
    //////////////////////

    var currentSlideID = 4;
    var currentSlideOpacity = 1;
    var nextSlideID = 0;
    var nextSlideOpacity = 0;
    var numberOfSlides = 5;
    var opacityStep = 0.01;
    var slideDelay = 5;
    var slideDelayCounter = 100;
    //function changeSlide() {
    //    hero.classList.remove("hero--slide-" + slideIterator);
    //    (slideIterator === 3) ? slideIterator = 1 : slideIterator++;
    //    hero.classList.add("hero--slide-" + slideIterator);
    //}

    function changeSlide() {
        if (slideDelayCounter <= 0) {
            for (i = 0; i < numberOfSlides; i++) {
                heroSlides[i].style.opacity = 0;
            }
            currentSlideOpacity -= opacityStep;
            nextSlideOpacity += opacityStep;
            heroSlides[currentSlideID].style.opacity = currentSlideOpacity;
            heroSlides[nextSlideID].style.opacity = nextSlideOpacity;

            if (currentSlideOpacity <= 0) {
                currentSlideID++;
                nextSlideID++;
                if (currentSlideID == numberOfSlides) {
                    currentSlideID = 0;
                }
                if (nextSlideID == numberOfSlides) {
                    nextSlideID = 0;
                }
                currentSlideOpacity = 1;
                nextSlideOpacity = 0;
                slideDelayCounter = slideDelay * 34;
            }
        }
        slideDelayCounter--;
    }

    setInterval(changeSlide, 30);


    //////////////////////
    // MAIN MENU
    //////////////////////
    console.log("here");
    var header = document.querySelector(".header");
    var logo = document.querySelector(".logo");
    var mainMenu = document.querySelector(".main-menu");
    var menuButton = document.querySelector(".menu-button");
    
    menuButton.addEventListener("click", function (event) {
        console.log("menu click");
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



    //////////////////////
    // INNER LINKS
    //////////////////////
    var links = document.querySelectorAll(".main-menu__item-link");
    for (i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href").charAt(0) === "#") {
            links[i].addEventListener("click", function (event) {
                event.preventDefault();
                var linkedElement = document.querySelector(event.target.getAttribute("href"));
                //var elementOffset = linkedElement.getBoundingClientRect().top;
                //window.scrollBy(0, elementOffset);
                // slowScrollTo(linkedElement);
                scrollTo(linkedElement.getBoundingClientRect().top, 1200);
            });
        }
    }
    
    //var scrollInterval;
    // function slowScrollTo(element) {
    //     var elementOffset = element.getBoundingClientRect().top;
    //     var scrollPerFrame = (elementOffset - window.pageYOffset) / 100;
    //     var scrollStep = 0;
    //     var scrollInterval = setInterval(function () {
            
    //         if (scrollStep > 100) {
    //             window.scrollTo(0, elementOffset);
    //             clearInterval(scrollInterval);
    //         } else {
    //             scrollStep++;
    //             window.scrollBy(0, scrollPerFrame);
    //         }
    //     }, 10);
    // }

    function scrollTo(to, duration) {
        if (duration <= 0) return;
        var difference = to - window.pageYOffset;
        var perTick = difference / duration * 10;
        console.log(to);

        setTimeout(function () {
            window.scrollBy(0, perTick);
            if (window.pageYOffset == to) return;
            scrollTo(to, duration - 10);
        }, 10);
    }
}());