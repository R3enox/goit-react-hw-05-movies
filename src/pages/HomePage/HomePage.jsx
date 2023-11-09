import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrendMovies } from 'services/getTrendMovies';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        await getTrendMovies().then(movies => setMovies(movies));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);
  return <>{movies && <MovieList movies={movies} />}</>;
};

export default HomePage;
