document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.getElementById('video-player');

    // Funkcja do odczytywania parametru "id" z adresu URL
    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Pobierz wartoœæ parametru "id"
    const episodeId = getParameterByName('id');

    // Ustaw Ÿród³o wideo na podstawie parametru "id"
    if (episodeId) {
        // W przyk³adzie u¿ywamy sta³ych œcie¿ek dla odcinków, ale mo¿esz dostosowaæ to do swoich potrzeb
        switch (episodeId) {
            case '1':
                videoPlayer.src = 'odcinki/kira.mp4';
                break;
            case '2':
                videoPlayer.src = 'odcinki/kira2.mp4';
                break;
            case '3':
                videoPlayer.src = 'œcie¿ka_do_twojego_trzeciego_wideo.mp4';
                break;
            // Dodaj kolejne przypadki dla innych odcinków
            default:
                // W przypadku nieznanego odcinka mo¿esz wyœwietliæ komunikat b³êdu lub przekierowaæ gdzie indziej
                alert('Nieznany odcinek.');
                window.location.href = 'episodes.html'; // Przekierowanie na stronê z odcinkami
                break;
        }

        // Rozpocznij odtwarzanie wideo po za³adowaniu metadanych
        videoPlayer.addEventListener('loadedmetadata', function () {
            videoPlayer.play();
        });
    } else {
        // Obs³u¿ brak parametru "id"
        alert('Brak parametru "id".');
        window.location.href = 'episodes.html'; // Przekierowanie na stronê z odcinkami
    }
});
