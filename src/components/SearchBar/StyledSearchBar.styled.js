import styled from 'styled-components';

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 20px;
  padding: 15px;
  /* border: 1px solid #ddd; */
  /* border-radius: 8px; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */

  .lb {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  .sp {
    font-size: 16px;
    margin-bottom: 5px;
    color: #333;
  }
  .inpSearch {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .subBtn {
    padding: 10px;
    font-size: 16px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    subBtn:hover {
      background-color: #2074a0;
    }
  }
`;
