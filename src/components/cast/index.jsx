import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { movieCredits } from 'service/movie_api';
import styles from './cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieCredits(movieId).then(data => setCast(data.data.cast));
  }, [movieId]);
  return (
    <>
      <ul className={styles.cast_list}>
        {cast.map(({ cast_id, profile_path, name, character }) => (
          <li key={cast_id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={name}
              />
            )}
            <p>{name}</p>
            <p>Character:{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
