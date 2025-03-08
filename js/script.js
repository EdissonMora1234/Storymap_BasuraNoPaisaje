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

    let accumulatedScroll = 0;
    const scrollStep = window.innerHeight / 4; // Movimiento de 1/3 de la diapositiva

    window.addEventListener('wheel', function(event) {
        event.preventDefault(); // Prevenir el scroll predeterminado

        accumulatedScroll += event.deltaY; // Acumular desplazamiento
        if (Math.abs(accumulatedScroll) >= scrollStep) {
            if (accumulatedScroll > 0 && currentSlide < slides.length - 1) {
                currentSlide++;
            } else if (accumulatedScroll < 0 && currentSlide > 0) {
                currentSlide--;
            }
            showSlide(currentSlide);
            scrollToSlide(currentSlide);
            accumulatedScroll = 0; // Reiniciar el acumulador después de moverse
        }
    }, { passive: false });

    homeButton.addEventListener('click', function () {
        currentSlide = 0;
        showSlide(currentSlide);
        scrollToSlide(currentSlide);
    });

    // Mostrar la primera diapositiva al cargar la página
    showSlide(currentSlide);
});
