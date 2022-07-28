import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { movieReviews } from 'service/movie_api';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieReviews(movieId).then(data => {
      setReviews(data.data);
    });
  }, [movieId]);

  return (
    <>
      {reviews &&
        (reviews.results.length > 0 ? (
          <ul>
            {reviews.results.map(({ id, author, content }) => (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p> {content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No rewiews for this movie</p>
        ))}
    </>
  );
};

export default Reviews;
