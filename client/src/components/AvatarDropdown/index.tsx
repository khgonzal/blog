import React, { useState } from 'react';
import {DropdownContainer, StyledAvatar, StyledDropdown } from './styles.d';

const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownContainer>
      <StyledAvatar isSelected={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <StyledDropdown>
          <div>hi</div>
        </StyledDropdown>
      )}
    </DropdownContainer>
  );
};

export { AvatarDropdown };
