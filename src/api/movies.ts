import { BASE_URL } from "./baseUrl";
import type { Movie, MovieFilters } from "../types/movie";

export async function getMovies(
  filters: MovieFilters = {}
): Promise<Movie[]> {
  const params = new URLSearchParams();

  if (filters.genreId) params.append("genreId", String(filters.genreId));
  if (filters.actorId) params.append("actorId", String(filters.actorId));
  if (filters.year) params.append("year", String(filters.year));

  const res = await fetch(`${BASE_URL}/movies?${params.toString()}`);

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
}
