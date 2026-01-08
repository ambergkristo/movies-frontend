import { useEffect, useState } from "react";
import { fetchActors, type Actor } from "../api/actors";

export function useActors() {
  const [actors, setActors] = useState<Actor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchActors()
      .then(setActors)
      .catch((err) => setError(err.message ?? "Viga näitlejate laadimisel"))
      .finally(() => setLoading(false));
  }, []);

  return { actors, loading, error };
}
