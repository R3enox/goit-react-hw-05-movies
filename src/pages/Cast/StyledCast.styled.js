import styled from 'styled-components';

export const StyledCast = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .castListItem {
    width: 200px;
    margin-bottom: 20px;
    text-align: center;
  }
  .castImg {
    width: 100%;
    border-radius: 8px;
  }
  .castName {
    color: #333;
    font-weight: bold;
    margin: 10px 0;
  }
  .castDesc {
    color: #555;
    margin-bottom: 5px;
  }
`;

export const Description = styled.p`
  color: #333;
  font-size: 24px;
  font-weight: bold;
`;
