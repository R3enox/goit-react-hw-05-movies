import { MovieListItem } from 'components/MovieListItem/MovieListItem';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <MovieListItem key={id} id={id} title={title} name={name} />
      ))}
    </ul>
  );
};
