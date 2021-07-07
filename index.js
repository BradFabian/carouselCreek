const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const nextSlide = document.querySelector('.carousel-button-next');
const prevSlide = document.querySelector('.carousel-button-prev');




const moveToNextSlide = () => {
    hideAllSlides();
    if(slidePosition === totalSlides - 1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    console.log(slides[slidePosition])
    slides[slidePosition].classList.add("carousel-item-visible");
}

const moveToPreviousSlide = () => {
console.log('Moving to Previous Side!')
}

const hideAllSlides = () => {
    for (const slide of slides ){
        slide.classList.remove("carousel-item-visible")
 
        
    }
}

nextSlide.addEventListener('click', moveToNextSlide);

prevSlide.addEventListener('click', moveToPreviousSlide);