

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function autoChangeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Set an interval for changing slides every 3 seconds
setInterval(autoChangeSlide, 3000);

// Initialize the first slide as active
slides[currentSlide].classList.add('active');


