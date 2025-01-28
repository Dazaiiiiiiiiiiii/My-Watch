import "../CSS/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onLikeClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorite(movie.id);
    else addToFavorite(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`like-btn ${favorite ? "active" : ""}`}
            onClick={onLikeClick}
          >
            ❤
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
