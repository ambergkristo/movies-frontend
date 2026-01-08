import { apiFetch } from "./client";
import type { Movie } from "../types/movie";

export function getMovies() {
  return apiFetch<Movie[]>("/movies");
}
