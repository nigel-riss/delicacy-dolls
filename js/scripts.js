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

var testPlase = document.querySelector(".main-header");
var i = 0;

function increaseI() {
    i++;
    testPlase.innerHTML = i;
}

setInterval(increaseI, 500000000000000);