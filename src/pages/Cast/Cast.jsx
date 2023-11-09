import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/getCast';

const Cast = () => {
  const { movieId } = useParams();
  const [castDetails, setCastDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        await getCast(movieId).then(cast => setCastDetails(cast));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <>
      {castDetails && (
        <ul>
          {castDetails.map(({ name, profile_path, character }, idx) => {
            return (
              <li key={idx + 1}>
                <img src={profile_path} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
