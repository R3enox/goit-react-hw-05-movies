import { NavLink } from 'react-router-dom';
import { StyledLayout } from './StyledLayout.styled';

const Layout = ({ children }) => {
  return (
    <>
      <StyledLayout>
        <NavLink className="headerLink" to="/">
          Home
        </NavLink>
        <NavLink className="headerLink" to="movies">
          Movies
        </NavLink>
      </StyledLayout>
      <main>{children}</main>
    </>
  );
};

export default Layout;
