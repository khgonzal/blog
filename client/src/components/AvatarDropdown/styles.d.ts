import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import 'index.css';

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
  box-shadow: 0 0 5px 1px var(--pink);
  ${(avatar) =>
    avatar.isSelected && 'box-shadow: inset 0 0 0 2px var(--green);'};

  &:hover {
    box-shadow: 0 0 8px 1px var(--blue);
  }
`;

const StyledDropdown = styled.div`
  background-color: white;
  border-radius: 4px;
  width: 140px;
  height: 80px;
  z-index: 200;
  position: fixed;
  right: 20px;
  top: 88px;
  box-shadow: 0 0 5px 1px var(--green);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledDropdownItem = styled(NavLink)`
  color: var(--primary);
  text-decoration: none;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 8px;
  font-size: 14px;

  &:hover {
    color: var(--blue);
  }

  &:active {
    color: var(--brown);
  }
`;

export { DropdownContainer, StyledAvatar, StyledDropdown, StyledDropdownItem };
