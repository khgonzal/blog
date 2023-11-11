import styled, { keyframes } from 'styled-components';
import 'index.css';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const changeColor = keyframes`
  0%, 100% {
    border-top-color: var(--primary);
  }
  25% {
    border-top-color: var(--secondary);
  }
  50% {
    border-top-color: var(--green);
  }
  75% {
    border-top-color: var(--blue);
  }
`;

const StyledSpinner = styled.div`
  border: 4px solid transparent;
  border-top: 4px solid var(--primary);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s ease-out infinite, ${changeColor} 4s ease-out infinite;;
`;

export { StyledSpinner };
