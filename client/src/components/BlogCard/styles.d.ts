import styled from 'styled-components';
import 'index.css';

const StyledCardContainer = styled.div`
  width: 400px;
  height: 500px;
  margin: 0 14px;
  background-color: var(--white);
  border-radius: 12px;

  @media (max-width: 768px) {
    margin: 12px 0;
  }
`;

export { StyledCardContainer };