import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  width: 33%;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
const StyledAvatar = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: fixed;
  top: 14px;
  right: 12px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  ${(isSelected) => isSelected.isSelected && 'border: 1px solid teal;'};
`;

const StyledDropdown = styled.div`
  background-color: white;
  border-radius: 12px;
  width: 200px;
  height: 200px;
  z-index: 200;
  position: fixed;
  right: 10px;
  top: 56px;
  box-shadow: 0 0 5px 1px gray;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

export { DropdownContainer, StyledAvatar, StyledDropdown };
