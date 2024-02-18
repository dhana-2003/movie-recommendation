document.addEventListener('DOMContentLoaded', function () {
    const moviesContainer = document.getElementById('movies-container');

    // Sample movie data
    const movies = [
        { title: 'Inception', description: 'A mind-bending thriller about dreams within dreams.', rating: 4.5, image: 'images/inception.png' },
        { title: 'The Shawshank Redemption', description: 'A tale of hope and friendship in Shawshank State Penitentiary.', rating: 4.8, image: 'images/the shawshank redemption.png' },
        { title: 'Pulp Fiction', description: 'Quentin Tarantino\'s iconic non-linear crime film.', rating: 4.0, image: 'images/pulp fiction.png' },
        { title: 'The Dark Knight', description: 'Christopher Nolan\'s epic Batman saga with Heath Ledger as the Joker.', rating: 4.7, image: 'images/the dark knight.png' },
        { title: 'Forrest Gump', description: 'The life story of Forrest Gump, a man with a low IQ but a big heart.', rating: 4.2, image: 'images/forest gump.png' },
        { title: 'The Matrix', description: 'A sci-fi classic exploring the nature of reality.', rating: 4.3, image: 'images/matrix.png' },
        { title: 'The Godfather', description: 'A powerful crime drama about the Corleone family.', rating: 4.9, image: 'images/the godfather.png' },
        { title: 'Titanic', description: 'A romantic drama set against the backdrop of the ill-fated RMS Titanic.', rating: 4.1, image: 'images/titanic.png' },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', description: 'The first installment in the epic fantasy trilogy.', rating: 4.6, image: 'images/the lord of the rings.png' },
        // Add more movie data as needed
    ];

    // Display movies
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const image = document.createElement('img');
        image.classList.add('movie-image');
        image.src = movie.image;
        image.alt = movie.title;

        const title = document.createElement('div');
        title.classList.add('movie-title');
        title.textContent = movie.title;

        const description = document.createElement('div');
        description.classList.add('movie-description');
        description.textContent = movie.description;

        const rating = document.createElement('div');
        rating.classList.add('movie-rating');
        rating.innerHTML = `Rating: ${movie.rating} <i class="fas fa-star"></i>`;

        movieCard.appendChild(image);
        movieCard.appendChild(title);
        movieCard.appendChild(description);
        movieCard.appendChild(rating);
        moviesContainer.appendChild(movieCard);
    });
});

function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const moviesContainer = document.getElementById('movies-container');
    const movieCards = moviesContainer.getElementsByClassName('movie-card');

    for (const card of movieCards) {
        const title = card.getElementsByClassName('movie-title')[0].textContent.toLowerCase();
        const description = card.getElementsByClassName('movie-description')[0].textContent.toLowerCase();

        if (title.includes(searchInput) || description.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}
