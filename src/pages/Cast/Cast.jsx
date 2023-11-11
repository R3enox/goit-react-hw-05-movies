import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/getCast';
import { Description, StyledCast } from './StyledCast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castDetails, setCastDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        await getCast(movieId).then(({ cast }) => {
          setCastDetails(cast);
        });
      } catch (error) {
        Notify.warning('Oops, something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      {isLoading && <Loader />}
      {castDetails ? (
        <StyledCast>
          {castDetails.map(({ name, profile_path, character }, idx) => {
            return (
              <li key={idx + 1} className="castListItem">
                <img
                  className="castImg"
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                />
                <p className="castName">{name}</p>
                <p className="castDesc">Character: {character}</p>
              </li>
            );
          })}
        </StyledCast>
      ) : (
        <Description> We don't have any reviews for this movie.</Description>
      )}
    </>
  );
};

export default Cast;
