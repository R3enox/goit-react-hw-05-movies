import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { getMovieId } from 'services/getMovieId';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieId = async () => {
      try {
        setIsLoading(true);
        await getMovieId(movieId).then(data => setMovieDetails(data));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieId();
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <>
          <div>
            <img src={movieDetails.poster_path} alt={movieDetails.title} />
            <h2>{movieDetails.title}</h2>
            <p>User score: {movieDetails.vote_average}</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>{movieDetails.genres.map(({ name }) => `${name} `)}</p>
          </div>
          <div>
            <p>Additional information</p>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default MovieDetails;
