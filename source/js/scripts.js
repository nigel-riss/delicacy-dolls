// jshint browser: true
// jshint plusplus: false 


(function () {
	"use strict";
	
    var hero = document.querySelector(".hero");

    //HERO HEIGHT
	function adjustHeroHeight() {
		var winWidth = (window.outerWidth > 0) ? window.innerWidth : screen.width;

		var maxHeight = 480;
		if (winWidth < 768) {
			maxHeight = 480;
		} else if (winWidth < 1000) {
			maxHeight = 512;
		} else {
			maxHeight = 1080;
		}

		hero.style.height = Math.min(maxHeight, (window.innerHeight)) + "px";
	}
	
	adjustHeroHeight();
    
	//RESIZE
	window.onresize = function () {
		adjustHeroHeight();
	};

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
	var heroSlides = document.querySelectorAll(".hero__slide");
	var i = 0;
	
	window.onscroll = function () {
		for (i = 0; i < heroSlides.length; i++) {
			var scrolled = window.pageYOffset || document.documentElement.scrollTop;
			heroSlides[i].style.backgroundPositionY = -scrolled / 2 + "px";
		}
	};
    
    //MAIN MENU
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
	
	//
	//INNER LINKS
	//
	var links = document.querySelectorAll(".main-menu__item-link");
	for (i = 0; i < links.length; i++) {
		if (links[i].getAttribute("href").charAt(0) === "#") {
			links[i].addEventListener("click", function (event) {
				event.preventDefault();
				var linkedElement = document.querySelector(event.target.getAttribute("href"));
				//var elementOffset = linkedElement.getBoundingClientRect().top;
				//window.scrollBy(0, elementOffset);
				slowScrollTo(linkedElement);
			});
		}
	}
	
	//var scrollInterval;
	function slowScrollTo(element) {
		var elementOffset = element.getBoundingClientRect().top;
		var scrollPerFrame = (elementOffset - window.pageYOffset) / 20;
		var scrollStep = 0;
		var scrollInterval = setInterval(function () {
			
			if (scrollStep > 19) {
				window.scrollTo(0, elementOffset);
				clearInterval(scrollInterval);
			} else {
				scrollStep++;
				window.scrollBy(0, scrollPerFrame);
			}
		}, 50);
	}
})();



//*/