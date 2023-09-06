// Przyk�ad animacji na stronie g��wnej
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    // Przyk�adowa animacja zmiany koloru t�a nag��wka
    header.addEventListener('mouseover', function () {
        header.style.backgroundColor = '#555';
    });

    header.addEventListener('mouseout', function () {
        header.style.backgroundColor = '#333';
    });

    // Przyk�adowa animacja elementu przy scrollowaniu
    const main = document.querySelector('main');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            main.style.opacity = '0.8';
        } else {
            main.style.opacity = '1';
        }
    });
});
