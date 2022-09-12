
// Active Link and Scroll to Spacific Section

let myLinks = document.querySelectorAll(".links-nav");
let mySections = document.querySelectorAll(".section");

function activeMenu(){
    let len = mySections.length;
    while(--len && window.scrollY + 97 < mySections[len].offsetTop){}
    myLinks.forEach(ltx => ltx.classList.remove("active"));
    myLinks[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// 

let myWelcomeText = document.querySelector(".welcome .container .welcome-text");


window.addEventListener('scroll', function() {
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if(scrollTop <= 200 ) {
        myWelcomeText.style.opacity = '1';

    }else if (scrollTop > 200 && scrollTop < 400 ) {
        myWelcomeText.style.opacity = '0.5';

    }else {
        myWelcomeText.style.opacity = '0';
    }
});

// Auto Slider For Images After Some Secondes

let activeImageId = 1;
let nextImageId = 1;

setInterval(function(){
    activeImageId = nextImageId;
    nextImageId = activeImageId + 1;

    if (nextImageId < 5) {
        document.getElementById("img" + activeImageId).classList.replace("visible", "hidden");
        document.getElementById("img" + nextImageId).classList.replace("hidden", "visible");
    } else {
        document.getElementById("img" + activeImageId).classList.replace("visible", "hidden");
        document.getElementById("img" + nextImageId).classList.replace("hidden", "visible");
        activeImageId = 5;
        nextImageId = 0;
    }   
}, 5000)

// 

let myListIcon = document.querySelector(".header .logo-links i");
let myList = document.querySelector(".header ul");


myListIcon.addEventListener('click', function()  {
    if (myList.style.display === "none") {
        myList.style.display = "block";
    } else {
        myList.style.display = "none"
    }
})

// Animation

        //Start About Animations

let aboutSection = document.querySelector(".about");

let myAboutHead = document.querySelector(".about .container h1");

let myAboutParagraph = document.querySelector(".about .container p");



window.onscroll = function () {
    if (window.scrollY >= aboutSection.offsetTop - 200) {
        myAboutHead.style.animation = "slide-left 1s linear";
        myAboutParagraph.style.animation = "slide-right 1s linear";
    } else {
        myAboutHead.style.animation = "none";
        myAboutParagraph.style.animation = "none";
    }
}

        //End About Animations


let myLogo = document.querySelector(".header .logo-links .logo");

let myHeaderLinks = document.querySelector(".header .logo-links .links");

let myPhoto = document.querySelector(".header .logo-links .my-photo");

let myProjects =document.querySelector(".projects")

let myZSDiv = document.querySelectorAll(".down-top");


window.onscroll = function () {
    if (window.scrollY >= aboutSection.offsetTop - 200) {
        myAboutHead.style.animation = "slide-left 1s linear";
        myAboutParagraph.style.animation = "slide-right 1s linear";
        myPhoto.style.animation = "slide-right 1s linear";
        myLogo.style.animation = "slide-left 1s linear";
        myHeaderLinks.style.animation = "down-top 1s linear";
        
    } else if (window.scrollY >= aboutSection.offsetTop) {
        myRightDivs.style.animation = "slide-right 1s";
        myLeftDivs.style.animation = "slide-left 1s ";

    } else if (window.scrollY >= myProjects.offsetTop) {
        myZSDiv.style.animation = "top-down 1s";
    }
}