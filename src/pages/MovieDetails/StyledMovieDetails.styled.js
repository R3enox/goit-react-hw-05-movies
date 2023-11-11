import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;

  .backLink {
    text-decoration: none;
    color: #3498db;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .backLink:hover {
    text-decoration: underline;
  }

  .poste-img {
    width: 250px;
    border-radius: 8px;
  }
  .main-title {
    color: #333;
    margin-bottom: 10px;
    font-size: 24px;
  }
  .description {
    color: #555;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .title {
    color: #333;
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

export const AdditionalInfoContainer = styled.div`
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .secondDescription {
    font-size: 18px;
    color: #333;
    margin-right: 10px;
  }

  .aditLink {
    text-decoration: none;
    color: #3498db;
    font-size: 16px;
  }

  .aditLink:hover {
    text-decoration: underline;
  }
`;
