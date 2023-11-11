import { Link, useLocation } from 'react-router-dom';
import { StyledMoveListItem } from './StyledMovieListItem.styled';

export const MovieListItem = ({ id, title, name }) => {
  const location = useLocation();

  return (
    <StyledMoveListItem>
      <Link to={`/movies/${id}`} className="title" state={{ from: location }}>
        {!title ? name : title}
      </Link>
    </StyledMoveListItem>
  );
};
