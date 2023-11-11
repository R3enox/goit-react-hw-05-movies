import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/getReviews';
import { Description, ReviewsList } from './StyledReviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsDetails, setReviewsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        await getReviews(movieId).then(results => setReviewsDetails(results));
      } catch (error) {
        Notify.warning('Oops, something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {reviewsDetails.length !== 0 ? (
        <ReviewsList>
          {reviewsDetails.map(
            ({ author_details: { name, username }, content }, idx) => {
              return (
                <li className="reviewsItem" key={idx + 1}>
                  <p className="reviewsName">Name: {name}</p>
                  <p className="reviewsUserName">User Name: {username}</p>
                  <p className="reviewsContent">{content}</p>
                </li>
              );
            }
          )}
        </ReviewsList>
      ) : (
        <Description className="reviewsDesc">
          We don't have any reviews for this movie.
        </Description>
      )}
    </div>
  );
};

export default Reviews;
