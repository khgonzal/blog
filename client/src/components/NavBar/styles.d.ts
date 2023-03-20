import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: purple;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  display: inline;
  width: 33%;

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
  color: white;
  text-decoration: none;
  margin: 0 12px;
  ${(link) => link.isActive && 'background-color: red;'};

  &:hover {
    background-color: pink;
  }

  &:active {
    background-color: blue;
  }
`;

export { NavContainer, LinkContainer, StyledLink, ImageContainer };
