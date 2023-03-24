import styled from 'styled-components';
import 'index.css';

export const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  box-shadow: 0 0 2px 1px var(--pink);
`;

export const StyledLink = styled.a`
  color: var(--primary);
  font-size: 14px;
  text-decoration: none;
`;
