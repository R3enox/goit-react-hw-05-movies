import { Link } from 'react-router-dom';

export const MovieListItem = ({ id, title, name }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{!title ? name : title}</Link>
    </li>
  );
};
