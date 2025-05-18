import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from '../../ApiService/movie';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import Loader from '../../components/Loader/Loader';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const location = useLocation();
  const backlinkRef = useRef(location.state ?? '/movies');

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovieInfo() {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieInfo();
  }, [movieId]);

  return (
    <div className={css.container}>
      <Link to={backlinkRef.current} className={css.goBackBtn}>
        Go back
      </Link>
      {loading && <Loader />}
      {movie && <MovieInfo movie={movie} />}
      <p className={css.infoTitle}>Additional information</p>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            to="cast"
            className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          >
            Cast
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to="reviews"
            className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
