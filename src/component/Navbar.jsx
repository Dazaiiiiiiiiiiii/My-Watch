import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"> <img src="/watching-a-movie.png" className="img-icon"/> My Watch</Link>
      </div>
      <div className="navbar-links">
        <Link className="navbar-link" to="/">
          Movies
        </Link>
        <Link className="navbar-link" to="/tvshow">
          Tv-Shows
        </Link>
        <Link className="navbar-link" to="/upcoming">
          Upcoming
        </Link>
        <Link className="navbar-link" to="/toprated">
          Top-Rated
        </Link>
        <Link className="navbar-link" to="/favorites">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
