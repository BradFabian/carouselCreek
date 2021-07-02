const slides = document.getElementsByClassName('.carousel-item');
let slidePostition = slides[0];
const totalSlides = slides.length;
const nextSlide = document.querySelector('.carousel-button-next');
const prevSlide = document.querySelector('.carousel-button-prev');

const moveToNextSlide = () => {
console.log('Moving to Next Slide!')
}

const moveToPreviousSlide = () => {
console.log('Moving to Previous Side!')
}

nextSlide.addEventListener('click', moveToNextSlide);

prevSlide.addEventListener('click', moveToPreviousSlide);