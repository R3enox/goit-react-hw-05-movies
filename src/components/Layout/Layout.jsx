import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavLink className="header- ink" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="movies">
          Movies
        </NavLink>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
