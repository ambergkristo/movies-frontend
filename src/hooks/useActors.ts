import { useEffect, useState } from "react";
import { getActors } from "../api/actors";
import type { Actor } from "../types/actor";

export function useActors() {
  const [actors, setActors] = useState<Actor[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    getActors()
      .then(setActors)
      .catch(err => setError(err as Error))
      .finally(() => setLoading(false));
  }, []);

  return { actors, loading, error };
}
