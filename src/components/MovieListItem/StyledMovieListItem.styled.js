import styled from 'styled-components';

export const StyledMoveListItem = styled.li`
  max-width: fit-content;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(10px);
  }

  .title {
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
  }
`;
