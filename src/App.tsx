import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";

export default function App() {
  return (
    <BrowserRouter>
      <header
        style={{
          padding: "1rem 2rem",
          borderBottom: "1px solid #ddd",
          marginBottom: "2rem",
        }}
      >
        <nav style={{ display: "flex", gap: "1rem" }}>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Movies
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
