import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);

  .headerLink {
    text-decoration: none;
    color: #fff;
    margin-right: 15px;
    font-size: 16px;
    font-weight: bold;
  }

  .headerLink.active {
    border-bottom: 2px solid #fff;
  }
`;
