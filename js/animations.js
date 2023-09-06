// Przyk³ad animacji na stronie g³ównej
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    // Przyk³adowa animacja zmiany koloru t³a nag³ówka
    header.addEventListener('mouseover', function () {
        header.style.backgroundColor = '#555';
    });

    header.addEventListener('mouseout', function () {
        header.style.backgroundColor = '#333';
    });

    // Przyk³adowa animacja elementu przy scrollowaniu
    const main = document.querySelector('main');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            main.style.opacity = '0.8';
        } else {
            main.style.opacity = '1';
        }
    });
});
