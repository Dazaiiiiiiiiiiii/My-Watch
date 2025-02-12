import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePg from "./pages/HomePg";
import Favorites from "./pages/Favorites";
import Navbar from "./component/Navbar";
import { MovieProvider } from "./context/MovieContext";
import Upcoming from "./pages/Upcoming";
import TopRated from "./pages/TopRated";
import TvShow from "./pages/TvShow";

export default function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/tvshow" element={<TvShow />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}
