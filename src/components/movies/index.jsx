import { useState, useEffect } from 'react';
import { searchMovie } from 'service/movie_api';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import SearchForm from './searchForm';
import styles from './movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFormSubmit = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    const query = searchParams.get('query');

    if (query) {
      searchMovie(query).then(data => {
        if (data.data.total_results === 0) {
          alert(`not found "${query}" movie, try something alse`);
          return;
        }
        setMovies(data.data.results);
      });
    }
  }, [searchParams]);

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {movies.length > 0 && (
        <>
          <ul className={styles.movies_list}>
            {movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    {movie.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default Movies;
