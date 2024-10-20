/*Add hover effect on the header to animate it*/
const headerTitle = document.querySelector('header h1');
if (headerTitle) {
    headerTitle.addEventListener('mouseover', () => {
        headerTitle.style.transform = 'scale(1.1)';
        headerTitle.style.transition = 'transform 0.5s ease';
    });
    
    headerTitle.addEventListener('mouseout', () => {
        headerTitle.style.transform = 'scale(1)';
    });
}
/*
 Gallery Scrolling*/
let currentIndex = 0;
const slides = document.querySelectorAll('.photo');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block': 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    /*Loop back to the first slide*/
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    /*Loop back to the last slide*/
    showSlide(currentIndex);
}

/*Initial display*/
showSlide(currentIndex);

/*Set up event listeners for buttons*/
document.getElementById('nextButton').addEventListener('click', nextSlide);
document.getElementById('prevButton').addEventListener('click', prevSlide);

/*Image hover zoom effect for the gallery*/
const photos = document.querySelectorAll('.photo img');
photos.forEach(photo => {
    photo.addEventListener('mouseover', () => {
        photo.style.transform = 'scale(1.05)';
        photo.style.transition = 'transform 0.5s ease';
    });
    
    photo.addEventListener('mouseout', () => {
        photo.style.transform = 'scale(1)';
    });
});






