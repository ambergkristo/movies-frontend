import { useEffect, useState } from "react";
import { getMovies } from "../api/movies";
import { getGenres } from "../api/genres";
import { getActors } from "../api/actors";
import type { Movie } from "../types/movie";
import type { Genre } from "../types/genre";
import type { Actor } from "../types/actor";

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [actors, setActors] = useState<Actor[]>([]);

  const [genreId, setGenreId] = useState<number | undefined>();
  const [actorId, setActorId] = useState<number | undefined>();
  const [year, setYear] = useState<number | undefined>();

  useEffect(() => {
    Promise.all([getGenres(), getActors()]).then(([g, a]) => {
      setGenres(g);
      setActors(a);
    });
  }, []);

  useEffect(() => {
    getMovies({ genreId, actorId, year }).then(setMovies);
  }, [genreId, actorId, year]);

  const years = Array.from(
    new Set(movies.map(m => m.releaseYear))
  ).sort((a, b) => b - a);

  const resetFilters = () => {
    setGenreId(undefined);
    setActorId(undefined);
    setYear(undefined);
  };

  return (
    <div className="page">
      <header className="page-header">
        <div className="task-card">
          <span className="task-label">Mandatory group task</span>
          <h1 className="task-title">movies-api</h1>
          <p className="task-desc">
            REST API ja frontend filmide andmebaasi haldamiseks
            (Spring Boot · JPA · React · TypeScript)
          </p>

          <div className="team">
            <div>
              <span className="team-role">LEADER</span>
              <span className="team-name">Kristo Amberg</span>
            </div>
            <div>
              <span className="team-role">MEMBER</span>
              <span className="team-name">Kristo Leier</span>
            </div>
          </div>
        </div>
      </header>

      <section className="filters">
        <select
          value={genreId ?? ""}
          onChange={e =>
            setGenreId(e.target.value ? Number(e.target.value) : undefined)
          }
        >
          <option value="">Kõik žanrid</option>
          {genres.map(g => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))}
        </select>

        <select
          value={actorId ?? ""}
          onChange={e =>
            setActorId(e.target.value ? Number(e.target.value) : undefined)
          }
        >
          <option value="">Kõik näitlejad</option>
          {actors.map(a => (
            <option key={a.id} value={a.id}>{a.name}</option>
          ))}
        </select>

        <select
          value={year ?? ""}
          onChange={e =>
            setYear(e.target.value ? Number(e.target.value) : undefined)
          }
        >
          <option value="">Kõik aastad</option>
          {years.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>

        <button className="btn-secondary" onClick={resetFilters}>
          Reset
        </button>
      </section>

      <section className="movies-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <div className="movie-header">
              <h3>{movie.title}</h3>
              <span className="year">{movie.releaseYear}</span>
            </div>

            <div className="meta">
              <div>
                <strong>Žanrid:</strong>{" "}
                {movie.genres.map(g => (
                  <span key={g.id} className="badge">{g.name}</span>
                ))}
              </div>

              <div>
                <strong>Näitlejad:</strong>{" "}
                {movie.actors.map(a => a.name).join(", ")}
              </div>
            </div>
          </div>
        ))}
      </section>

      {movies.length === 0 && (
        <div className="empty">
          Ühtegi filmi ei leitud valitud filtritega.
        </div>
      )}
    </div>
  );
}
