import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'service/movie_api';
import styles from '../movies/movies.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.data.results));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul className={styles.movies_list}>
        {movies &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
