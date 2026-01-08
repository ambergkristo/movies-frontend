import { useEffect, useState } from "react";
import { fetchGenres, type Genre } from "../api/genres";

export function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGenres()
      .then(setGenres)
      .catch((err) => setError(err.message ?? "Viga žanrite laadimisel"))
      .finally(() => setLoading(false));
  }, []);

  return { genres, loading, error };
}
