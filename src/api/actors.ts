import { apiFetch } from "./client";
import type { Actor } from "../types/actor";

export function getActors() {
  return apiFetch<Actor[]>("/actors");
}
