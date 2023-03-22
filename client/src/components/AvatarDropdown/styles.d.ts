import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const DropdownContainer = styled.div`
  position: relative;
  width: 33%;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
const StyledAvatar = styled.div`
  background-image: url('/images/logoSmall.png');
  background-size: 70px 70px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: fixed;
  top: 14px;
  right: 16px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  box-shadow: 0 0 5px 1px gray;
  ${(isSelected) => isSelected.isSelected && 'box-shadow: inset 0 0 0 1px teal;'};
`;

const StyledDropdown = styled.div`
  background-color: white;
  border-radius: 4px;
  width: 200px;
  height: 200px;
  z-index: 200;
  position: fixed;
  right: 20px;
  top: 88px;
  box-shadow: 0 0 5px 1px gray;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const StyledDropdownItem = styled(NavLink)`
  color: black;
  text-decoration: none;

  &:hover {
    background-color: pink;
  }

  &:active {
    background-color: blue;
  }
`;

export { DropdownContainer, StyledAvatar, StyledDropdown, StyledDropdownItem };
