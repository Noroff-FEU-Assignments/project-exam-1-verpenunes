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
//Test CODE SLIDE AUTO//
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

/* TEST CODE ZOOM PHOTO
const button = document.querySelector(".explore-images img");
const GFG = document.getElementById("zoom-photo");

let isZoomedIn = false;

button.addEventListener("click", () => {
    if (isZoomedIn) {
        zoomin();
    } else {
        zoomout();
    }
    isZoomedIn = !isZoomedIn;
});

function zoomin() {
    const currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth - 100) + "px";
}

function zoomout() {
    const currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth + 200) + "px";

}*/
