import { useEffect, useState } from "react";
import { getMovies } from "../api/movies";
import type { Movie } from "../types/movie";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .catch(() => setError("Filme ei õnnestunud laadida"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Laen filme…</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Filmide andmebaas</h1>

      <p>
        Kokku filme: <strong>{movies.length}</strong>
      </p>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.releaseYear})
          </li>
        ))}
      </ul>

      <p style={{ marginTop: "1rem", opacity: 0.7 }}>
        Ava filmide leht, et kasutada filtreid ja näha kõiki filme.
      </p>
    </div>
  );
}
