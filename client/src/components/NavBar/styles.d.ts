import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: purple;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const LinkContainer = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  ${(link) => link.isActive && 'background-color: red;'};

  &:hover {
    background-color: pink;
  }

  &:active {
    background-color: blue;
  }
`;

const StyledAvatar = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 12px;
`;

export { NavContainer, LinkContainer, StyledLink, StyledAvatar };
