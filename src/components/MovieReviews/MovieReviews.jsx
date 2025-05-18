import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../ApiService/movie';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovieInfoReviews() {
      try {
        setLoading(true);
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieInfoReviews();
  }, [movieId]);
  return (
    <div className={css.wrapper}>
      {loading && <Loader />}
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul className={css.grid}>
          {reviews.map(({ id, author, content, created_at }) => (
            <li key={id} className={css.card}>
              <h3 className={css.author}>{author}</h3>
              <p className={css.date}>
                {new Date(created_at).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className={css.content}>
                {content.length > 500 ? content.slice(0, 500) + '...' : content}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
