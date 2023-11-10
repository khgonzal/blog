import styled from 'styled-components';
import 'index.css';

const StyledContextMenu = styled.div`
  background-color: var(--white);
  border-radius: 4px;
  position: fixed;
  ${({ top }) => `top: ${top}px;`}
  ${({ left }) => `left: ${left}px;`}
  box-shadow: 0 0 1px 0 var(--blue);
  opacity: 0.2;

  &:hover {
    opacity: 0.8;
    box-shadow: 0 0 1px 1px var(--blue);
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 4px 6px;
  margin: 8px;
`;

const StyledOption = styled.li`
  padding: 4px 2px;
`;

export { StyledContextMenu, StyledList, StyledOption };
