import { useEffect, useState } from "react";
import { getMovies } from "../api/movies";
import type { Movie, MovieFilters } from "../types/movie";

export function useMovies(filters: MovieFilters) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getMovies(filters)
      .then(setMovies)
      .catch(err => setError(err as Error))
      .finally(() => setLoading(false));
  }, [filters.genreId, filters.actorId, filters.year]);

  return { movies, loading, error };
}
