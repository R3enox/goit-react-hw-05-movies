import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;

  .reviewsItem {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
  }

  .reviewsName {
    color: #333;
    font-weight: bold;
    margin: 5px 0;
  }

  .reviewsUserName {
    color: #555;
    margin: 5px 0;
  }
  .reviewsContent {
    color: #777;
    margin-top: 10px;
  }
`;

export const Description = styled.p`
  color: #333;
  font-size: 24px;
  font-weight: bold;
`;
