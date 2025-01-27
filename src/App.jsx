import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePg from "./pages/HomePg";
import Favorites from "./pages/Favorites";
import Navbar from "./component/Navbar";
import { MovieProvider } from "./context/MovieContext";

export default function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}
