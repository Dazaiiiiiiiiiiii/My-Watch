import { useState, useEffect } from "react";
import { getUpcoming } from "../Services/api";
import MovieCard from "../component/MovieCard";

function Upcoming() {
  const [upcoming, setUpcoming] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUpcoming = async () => {
      try {
        const data = await getUpcoming();
        setUpcoming(data);
      } catch (err) {
        console.log(err);
        setError("Failed to load Upcoming Movies");
      } finally {
        setLoading(false);
      }
    };

    loadUpcoming();
  }, []);

  return (
    <div className="home">
      <h2>Upcoming Movies</h2>
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {console.log(upcoming)}
          {upcoming.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Upcoming;
