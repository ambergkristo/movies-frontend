import { Genre } from './genre';
import { Actor } from './actor';

export interface Movie {
  id: number;
  title: string;
  releaseYear: number | null;
  duration: number;
  genres: Genre[];
  actors: Actor[];
}
