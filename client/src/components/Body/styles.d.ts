import styled from 'styled-components';
import 'index.css';

const StyledBody = styled.body`
  margin: 110px 280px 0;
  position: relative;
  min-height: 100vh;

  @media (max-width: 768px) {
    margin: 110px auto 0;
  }
`;

export { StyledBody };
