import { SearchContainer } from './StyledSearchBar.styled';

export const SearchBar = ({ onFormSubmit }) => {
  return (
    <SearchContainer onSubmit={onFormSubmit} className="searchContainer">
      <label className="lb">
        <span className="sp">Search Movie</span>
        <input
          className="inpSearch"
          type="text"
          name="searchQ"
          required
          placeholder="Search"
        />
      </label>
      <button className="subBtn" type="submit">
        Search Movie
      </button>
    </SearchContainer>
  );
};
