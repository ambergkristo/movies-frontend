import { useEffect, useState } from "react";
import { getMovies, type MovieFilters } from "../api/movies";
import type { Movie } from "../types/movie";

export function useMovies(filters?: MovieFilters) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getMovies(filters)
      .then(setMovies)
      .catch((err) => setError(err.message ?? "Viga filmide laadimisel"))
      .finally(() => setLoading(false));
  }, [JSON.stringify(filters)]);

  return { movies, loading, error };
}
