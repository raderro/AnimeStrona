// Przyk�ad interakcji na stronie wyszukiwania
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();

        // Tutaj mo�esz doda� logik� wyszukiwania i wy�wietlania wynik�w
        // Przyk�ad: Pobierz dane z serwera i wy�wietl wyniki w #search-results
        fetch(`/search?query=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                // Wy�wietl wyniki w #search-results
                searchResults.innerHTML = '';

                data.forEach(result => {
                    const resultItem = document.createElement('div');
                    resultItem.textContent = result.title;
                    searchResults.appendChild(resultItem);
                });
            })
            .catch(error => console.error(error));
    });
});
