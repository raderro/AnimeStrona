document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.getElementById('video-player');

    // Funkcja do odczytywania parametru "id" z adresu URL
    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Pobierz warto�� parametru "id"
    const episodeId = getParameterByName('id');

    // Ustaw �r�d�o wideo na podstawie parametru "id"
    if (episodeId) {
        // W przyk�adzie u�ywamy sta�ych �cie�ek dla odcink�w, ale mo�esz dostosowa� to do swoich potrzeb
        switch (episodeId) {
            case '1':
                videoPlayer.src = 'odcinki/kira.mp4';
                break;
            case '2':
                videoPlayer.src = 'odcinki/kira2.mp4';
                break;
            case '3':
                videoPlayer.src = '�cie�ka_do_twojego_trzeciego_wideo.mp4';
                break;
            // Dodaj kolejne przypadki dla innych odcink�w
            default:
                // W przypadku nieznanego odcinka mo�esz wy�wietli� komunikat b��du lub przekierowa� gdzie indziej
                alert('Nieznany odcinek.');
                window.location.href = 'episodes.html'; // Przekierowanie na stron� z odcinkami
                break;
        }

        // Rozpocznij odtwarzanie wideo po za�adowaniu metadanych
        videoPlayer.addEventListener('loadedmetadata', function () {
            videoPlayer.play();
        });
    } else {
        // Obs�u� brak parametru "id"
        alert('Brak parametru "id".');
        window.location.href = 'episodes.html'; // Przekierowanie na stron� z odcinkami
    }
});
