import css from './MovieInfo.module.css';

const MovieInfo = ({ movie }) => {
  if (!movie) return null;

  const {
    title,
    overview,
    genres,
    release_date,
    vote_average,
    poster_path,
    runtime,
    budget,
    revenue,
    original_language,
    status,
  } = movie;

  return (
    <div className={css.wrapper}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className={css.poster}
      />
      <div className={css.details}>
        <h2>
          {title} ({release_date?.slice(0, 4)})
        </h2>
        <p>
          <strong>User score:</strong> {Math.round(vote_average * 10)}%
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>
        <p>
          <strong>Runtime:</strong> {runtime} min
        </p>
        <p>
          <strong>Original language:</strong> {original_language.toUpperCase()}
        </p>
        <p>
          <strong>Budget:</strong> ${budget.toLocaleString()}
        </p>
        <p>
          <strong>Revenue:</strong> ${revenue.toLocaleString()}
        </p>

        <h3>Overview</h3>
        <p>{overview}</p>

        <h3>Genres</h3>
        <p>{genres.map((genre) => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
