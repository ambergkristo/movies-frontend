import { apiFetch } from "./client";
import type { Genre } from "../types/genre";

export function getGenres() {
  return apiFetch<Genre[]>("/genres");
}
