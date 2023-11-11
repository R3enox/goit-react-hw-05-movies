import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import { StyledMoveList } from './StyledMovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <StyledMoveList>
      {movies.map(({ id, title, name }) => (
        <MovieListItem key={id} id={id} title={title} name={name} />
      ))}
    </StyledMoveList>
  );
};
