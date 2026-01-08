import type { Genre } from "./genre";
import type { Actor } from "./actor";

export interface Movie {
  id: number;
  title: string;
  releaseYear: number;
  duration: number;
  genres: Genre[];
  actors: Actor[];
}

export interface MovieFilters {
  genreId?: number;
  actorId?: number;
  year?: number;
}
