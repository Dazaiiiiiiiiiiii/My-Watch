import MovieCard from "../component/MovieCard";
import { getTvShows, searchTvShows } from "../Services/api";
import { useEffect, useState } from "react";

function TvShow() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tvShows, setTvShows] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTvShows = async () => {
      try {
        const tvShows = await getTvShows();
        setTvShows(tvShows);
      } catch (err) {
        console.log(err);
        setError("Failed To load Tv Shows...");
      } finally {
        setLoading(false);
      }
    };

    loadTvShows();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchTvShows(searchQuery);
      setTvShows(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to load Tv Shows");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Tv Shows..."
          className="search-input"
          // value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <h2>Tv Shows</h2>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {console.log(tvShows)}
          {tvShows.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TvShow;
