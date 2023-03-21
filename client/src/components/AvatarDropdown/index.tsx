// Globals
import React, { useState } from 'react';

// Styles
import {DropdownContainer, StyledAvatar, StyledDropdown, StyledDropdownItem } from './styles.d';

const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownContainer>
      <StyledAvatar isSelected={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <StyledDropdown>
          <StyledDropdownItem to={'/sign-in'}>Sign in</StyledDropdownItem>
        </StyledDropdown>
      )}
    </DropdownContainer>
  );
};

export { AvatarDropdown };
