import { useEffect, useState } from "react";
import { getGenres } from "../api/genres";
import type { Genre } from "../types/genre";

export function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    getGenres()
      .then(setGenres)
      .catch(err => setError(err as Error))
      .finally(() => setLoading(false));
  }, []);

  return { genres, loading, error };
}
