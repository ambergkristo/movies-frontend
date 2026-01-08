import { BASE_URL } from "./baseUrl";
import type { Actor } from "../types/actor";

export async function getActors(): Promise<Actor[]> {
  const res = await fetch(`${BASE_URL}/actors`);
  if (!res.ok) throw new Error("Failed to fetch actors");
  return res.json();
}
