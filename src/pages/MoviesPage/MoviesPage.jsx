import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
// import Form from '../../components/Form/Form';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import { getMovieByTopic } from '../../ApiService/movie';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [debouncedQuery] = useDebounce(query, 300);

  const changeSearchQuery = (event) => {
    const newQuery = event.target.value;
    const nextSearchParams = new URLSearchParams(searchParams);

    if (newQuery !== '') {
      nextSearchParams.set('query', newQuery);
    } else {
      nextSearchParams.delete('query');
    }

    setSearchParams(nextSearchParams);
  };

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovieByTopic(debouncedQuery);
        setMovies(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [debouncedQuery]);

  return (
    <div className={css.wrap}>
      <input
        placeholder="What do you want to watch today?"
        autoComplete="off"
        autoFocus
        type="text"
        value={query}
        onChange={changeSearchQuery}
        className={css.input}
      />
      {error && <p>Oooops!.. Try again!</p>}
      {loading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
