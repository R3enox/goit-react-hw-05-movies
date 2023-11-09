import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/getReviews';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsDetails, setReviewsDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        await getReviews(movieId).then(results => setReviewsDetails(results));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);
  return (
    <>
      {reviewsDetails && (
        <ul>
          {reviewsDetails.map(
            ({ author_details: { name, username }, content }, idx) => {
              return (
                <li key={idx + 1}>
                  <p>Name: {name}</p>
                  <p>User Name: {username}</p>
                  <p>{content}</p>
                </li>
              );
            }
          )}
        </ul>
      )}
    </>
  );
};

export default Reviews;
