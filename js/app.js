import jsonData from "./data/movies.json" with { type: "json" };

const genreButton = document.querySelectorAll(".movie-genre-btn");
const movieContainer = document.querySelector(".movie-cards-container");

// Logic for mapping JSON Data
function renderMovies(movies) {
  movieContainer.innerHTML = movies
    .map((movie) => {
      const { Title, Year, Genre, Plot, posterImage } = movie;

      return `<div class="movie-card">
    <div class="movie-card-img">
  <img class="movie-poster" src="${posterImage}" alt="${Title}" width="250px" />
    </div>
  <div class="movie-info">
    <span class="movie-prop">
    <h3 class="movie-title">${Title}</h3>
    <p class="movie-year"> ${Year}</p>
    </span>
  <p class="movie-genre"> ${Genre}</p>
  <p class="movie-plot">${Plot}</p>
  </div>
</div>`;
    })
    .join("");
}

renderMovies(jsonData);

function filterMovieGenre(e) {
  const selectedGenre = e.target.textContent; // Buttons containing the genre on the clientside
  const filteredMovies = jsonData.filter((movie) =>
    movie.Genre.includes(selectedGenre),
  );
  if (selectedGenre === "All genres") {
    renderMovies(jsonData);
    return;
  }

  if (filteredMovies.length === 0) {
    movieContainer.innerHTML = `<p>No movie in our collection with ${selectedGenre}</p>`;
    return;
  } else {
    renderMovies(filteredMovies);
  }
}

genreButton.forEach((btn) => {
  btn.addEventListener("click", filterMovieGenre);
});