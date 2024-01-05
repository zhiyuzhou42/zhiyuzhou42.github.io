'use strict' ;


// add event on multiple elment

const addEventOnElements = function (elements, eventType, callback){
    for (let i=0; i< elements.length; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

// preloading

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function(){
    loadingElement.classList.add("loaded");
    this.document.body.classList.remove("active");
})


// mobile nav toggle

const [navTogglers, navLinks, navbar, overlay] = [
    document.querySelectorAll("[data-nav-toggler]"),
    document.querySelectorAll("[data-nav-link]"),
    document.querySelector("[data-navbar]"),
    document.querySelector("[data-overlay]")
];

const toggleNav =function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("active");
}

addEventOnElements(navLinks, "click", closeNav);


// header

const header = document.querySelector("[data-header]")

const activeElementOnScroll = function (){
    if (window.scrollY > 50){
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

window.addEventListener("scroll", activeElementOnScroll);


/**
 *  text animation effect for heroine section
 */

const letterBoxes = document.querySelectorAll("[data-letter-effect]");

let activeLetterBoxIndex = 0;
let lastActiveLetterBoxIndex = 0;
let totalLetterBoxDelay = 0;

const setLetterEffect = function () {
    // loop through all letter boxes
    for (let i = 0; i < letterBoxes.length; i++){
        // set initial animation delay
        let letterAnimationDelay = 0;
        // get all character from the current letter box
        const letters = letterBoxes[i].textContent.trim();
        // remove all character from the current letter box
        letterBoxes[i].textContent = "";
        // loop through all letters
        for (let j = 0; j < letters.length; j++){
            // create a span
            const span = document.createElement("span");
            // set animation delay on span
            span.style.animationDelay = `${letterAnimationDelay}s`;
            // set the "in" class on the span, if current letter box is active
            // otherwise class is "out"
            if (i === activeLetterBoxIndex) {
                span.classList.add("in");
            }
            else {
                span.classList.add("out");
            }

            // pass current letter into span
            span.textContent = letters[j];
            // add space class on span, when current letter contain space
            if (letters[j] === " ") span.classList.add("space");
            // pass the span on current letter box
            letterBoxes[i].appendChild(span);
            // skip letterAnimationDelay when loop is in the last index
            if (j >= letters.length - 1) break;
            // otherwise update
            letterAnimationDelay += 0.05;
        }

        // get total delay of active letter box
        if (i === activeLetterBoxIndex) {
            totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
        }

        // add active class on last active letter box
        if (i === lastActiveLetterBoxIndex) {
            letterBoxes[i].classList.add("active");
        }
        else {
            letterBoxes[i].classList.remove("active");
        }
    }

    setTimeout(function () {
        lastActiveLetterBoxIndex = activeLetterBoxIndex;
        // update activeLetterBoxIndex based on total letter boxes
        activeLetterBoxIndex >= letterBoxes.length -1 ? activeLetterBoxIndex = 0 :
        activeLetterBoxIndex ++;

        setLetterEffect();
    }, (totalLetterBoxDelay * 1000) + 3000);
}

// call the letter effect function after window loaded
window.addEventListener("load", setLetterEffect);


// scroll reveal

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
    for (let i = 0; i < revealElements.length; i++) {
        const elementIsInScreen = revealElements[i].getBoundingClientRect().top <
        window.innerHeight / 1.15;

        if (elementIsInScreen) {
            revealElements[i].classList.add("revealed");
        }
        else {
            revealElements[i].classList.remove("revealed");
        }
    }
}

window.addEventListener("scroll", scrollReveal);

scrollReveal();

// Slide 1
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Slide 2
let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
}

// Slide 3
let slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  let dots3 = document.getElementsByClassName("dot3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
}


