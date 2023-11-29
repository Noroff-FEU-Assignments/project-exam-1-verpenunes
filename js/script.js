const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove("on"))
}

function showSlider() {
    slider[currentSlide].classList.add("on")
}

function nextSlider() {
    hideSlider()
    if(currentSlide === slider.length -1) {
        currentSlide = 0;
    } else {
        currentSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if(currentSlide === 0) {
        currentSlide = slider.length -1;
    } else {
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener("click", nextSlider);
btnPrev.addEventListener("click", prevSlider);

//console.log(slider);

/* 
Test SLIDE AUTO
const slides = document.getElementsByClassName("slider");
let count = 0;

for (let i = 1; i < slides.length; i++) {
    slides[i].style.opacity = 0;
}

setInterval(function(){
    nextImage();
}, 3000);

function nextImage() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }

    count++
    if (count >= slides.length) {
    count = 0;
    }
    slides[count].style.opacity = 1;

} */

window.sr = ScrollReveal({ reset: true});

sr.reveal(".welcome", {duration: 2500});
sr.reveal(".explore", {duration: 4400});
sr.reveal(".connect", {duration: 5400});
