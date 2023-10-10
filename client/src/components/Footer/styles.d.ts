import styled from 'styled-components';
import 'index.css';

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  box-shadow: 0 0 4px 1px var(--pink);
  background-color: var(--white);
  opacity: 0.8;
`;

export const StyledLink = styled.a`
  color: var(--primary);
  font-size: 14px;
  text-decoration: none;

  &:hover {
    background-color: var(--secondary);
    border-radius: 8px;
    padding: 6px;
  }
`;
