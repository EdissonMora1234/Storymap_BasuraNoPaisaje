document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const homeButton = document.getElementById('homeButton');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function scrollToSlide(index) {
        slides[index].scrollIntoView({ behavior: 'smooth' });
    }

    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                showSlide(currentSlide);
                scrollToSlide(currentSlide);
            }
        } else {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
                scrollToSlide(currentSlide);
            }
        }
    });

    homeButton.addEventListener('click', function() {
        currentSlide = 0;
        showSlide(currentSlide);
        scrollToSlide(currentSlide);
    });

    // Mostrar la primera diapositiva al cargar la página
    showSlide(currentSlide);
});
