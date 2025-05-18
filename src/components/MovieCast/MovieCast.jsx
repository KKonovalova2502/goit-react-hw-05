import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../ApiService/movie';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovieInfoCast() {
      try {
        setLoading(true);
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieInfoCast();
  }, [movieId]);
  return (
    <div className={css.wrapper}>
      {loading && <Loader />}
      {cast.length === 0 ? (
        <p>No cast information available.</p>
      ) : (
        <ul className={css.grid}>
          {cast.map(({ cast_id, profile_path, name, character }) => (
            <li key={cast_id} className={css.card}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : 'https://placehold.co/100x150?text=No+Photo'
                }
                alt={name}
                className={css.image}
              />
              <h3 className={css.name}>{name}</h3>
              <p className={css.character}>as {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
