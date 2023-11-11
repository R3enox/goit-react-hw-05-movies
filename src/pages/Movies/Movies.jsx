import Loader from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from 'services/getMovie';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovie, setSearchMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const movieValue = searchParams.get('query');

  const onFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const value = form.elements.searchQ.value.trim();
    setSearchParams({ query: value });
    form.reset();
  };

  useEffect(() => {
    if (!movieValue) return;
    const fetchSearchMovie = async () => {
      try {
        setIsLoading(true);
        await getMovie(movieValue).then(({ results, total_results }) => {
          setSearchMovie(results);
          if (total_results === 0) {
            return Notify.failure(
              'Sorry, there are no mavies matching your search query. Please try again.'
            );
          }
        });
      } catch (error) {
        Notify.warning('Oops, something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchMovie();
  }, [movieValue]);

  return (
    <>
      <SearchBar onFormSubmit={onFormSubmit} />
      {isLoading && <Loader />}
      {searchMovie && <MovieList movies={searchMovie} />}
    </>
  );
};

export default Movies;
