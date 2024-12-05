const slides = document.querySelectorAll('.images img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initiaizeSlider);

function initiaizeSlider(){
    if(slides.length>0){
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextslide, 3000);
    }
}

function nextslide(){
    slideIndex++;
    showSlide(slideIndex);
}


function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length-1;
    }
    slides.forEach(slide =>{
        slide.classList.remove('displaySlide');
    })
    slides[slideIndex].classList.add('displaySlide');
}

function prev(){
    slideIndex--;
    showSlide(slideIndex);
    clearInterval(intervalId);
}

function next(){
    slideIndex++;
    showSlide(slideIndex);
    clearInterval(intervalId);
}