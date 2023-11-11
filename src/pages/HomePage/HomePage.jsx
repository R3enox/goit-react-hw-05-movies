import Loader from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { getTrendMovies } from 'services/getTrendMovies';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        await getTrendMovies().then(movies => setMovies(movies));
      } catch (error) {
        Notify.warning('Oops, something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {movies && (
        <div>
          <h1>Trending today</h1>
          <MovieList movies={movies} />{' '}
        </div>
      )}
    </>
  );
};

export default HomePage;
