import { useState, useEffect } from "react";
import MovieCard from "../component/MovieCard";
import { getTopRatedMovies } from "../Services/api";

function TopRated() {
  const [toprated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const data = await getTopRatedMovies();
        setTopRated(data);
      } catch (err) {
        console.log(err);
        setError("Failed to load top-rated movies...");
      } finally {
        setLoading(false);
      }
    };

    fetchTopRated();
  }, []);

  return (
    <div className="home">
      <h2>Top Rated Movies</h2>
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {console.log(toprated)}
          {toprated.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TopRated;
