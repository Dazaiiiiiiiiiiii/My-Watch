import "../CSS/Favorite.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../component/MovieCard";

function Favorites() {
  const { favorite } = useMovieContext();

  return (
    <div className="favorites">
      {favorite && favorite.length > 0 ? (
        <div className="movies-grid">
          <h2>Your Favorites</h2>
          {favorite.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>No Favourite Movies/Tv Shows Yet</h2>
          <p>Start adding your Movies/Tv Shows, and they will show here.</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
