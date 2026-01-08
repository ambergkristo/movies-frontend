import { BASE_URL } from "./baseUrl";
import type { Genre } from "../types/genre";

export async function getGenres(): Promise<Genre[]> {
  const res = await fetch(`${BASE_URL}/genres`);
  if (!res.ok) throw new Error("Failed to fetch genres");
  return res.json();
}
