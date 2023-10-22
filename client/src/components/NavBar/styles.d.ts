import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import 'index.css';

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--primary);
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  box-shadow: 0 0 8px 3px var(--pink);

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StyledHeader = styled.h1`
  display: flex;
  align-items: center;
  color: var(--secondary);
  width: 33%;
  height: 90px;
  padding-left: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 50%;
    justify-content: start;
  }
`;

const StyledLink = styled(NavLink)`
  color: var(--neutral);
  font-family: var(--font);
  text-decoration: none;
  margin: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  ${(link) =>
    link.isActive &&
    'background-color: var(--pink); border-radius: 8px; padding: 6px; color: var(--secondary);'};

  &:hover {
    background-color: var(--green);
    border-radius: 8px;
    padding: 6px;
  }

  &:active {
    background-color: var(--brown);
    border-radius: 8px;
    padding: 6px;
  }
  @media (max-width: 768px) {
    width: 70px;
  }
`;

export { NavContainer, LinkContainer, StyledLink, StyledHeader };
