// Przyk³ad interakcji w JavaScript dla strony wyszukiwania
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();

        // Tutaj mo¿esz dodaæ logikê wyszukiwania i wyœwietlania wyników
    });
});
