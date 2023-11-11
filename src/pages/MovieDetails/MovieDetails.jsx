import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { getMovieId } from 'services/getMovieId';
import {
  AdditionalInfoContainer,
  MovieDetailsContainer,
} from './StyledMovieDetails.styled';

const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieId = async () => {
      try {
        setIsLoading(true);
        await getMovieId(movieId).then(data => setMovieDetails(data));
      } catch (error) {
        Notify.warning('Oops, something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieId();
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      {isLoading && <Loader />}
      {movieDetails && (
        <>
          <MovieDetailsContainer>
            <Link to={backLinkRef.current} className="backLink">
              Go Back
            </Link>
            <img
              className="posterImg"
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                  : defaultImg
              }
              alt={movieDetails.title}
            />
            <h2 className="mainTitle">{movieDetails.title}</h2>
            <p className="description">
              User score: {movieDetails.vote_average}
            </p>
            <h3 className="title">Overview</h3>
            <p className="description">{movieDetails.overview}</p>
            <h3 className="title">Genres</h3>
            <p className="descriptio">
              {movieDetails.genres.map(({ name }) => `${name} `)}
            </p>
          </MovieDetailsContainer>
          <AdditionalInfoContainer>
            <p className="secondDescription">Additional information</p>
            <Link className="aditLink" to="cast">
              Cast
            </Link>
            <Link className="aditLink" to="reviews">
              Reviews
            </Link>
          </AdditionalInfoContainer>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
