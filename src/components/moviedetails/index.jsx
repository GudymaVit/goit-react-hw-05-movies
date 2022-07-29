import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { movieDetails } from 'service/movie_api';
import styles from './moviedetail.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    movieDetails(movieId).then(data => {
      setMovie(data.data);
      setGenres(() => data.data.genres.map(genre => genre.name).join(' '));
    });
  }, [movieId]);

  return (
    <>
      <Link to={location?.state?.from ?? '/'}>
        <button type="button">Go back</button>
      </Link>

      <div className={styles.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title}
        />

        <div>
          <h1>{movie.original_title}</h1>
          <p>Use score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: location?.state?.from ?? '/' }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location?.state?.from ?? '/' }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
