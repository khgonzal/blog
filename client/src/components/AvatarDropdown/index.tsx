// Globals
import { useUserContext } from 'context';
import React, { useState } from 'react';

// Styles
import {
  DropdownContainer,
  StyledAvatar,
  StyledDropdown,
  StyledDropdownItem,
} from './styles.d';

const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useUserContext();
  return (
    <DropdownContainer>
      <StyledAvatar isSelected={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <StyledDropdown>
          {isAuthenticated && (
            <StyledDropdownItem to={'/'}>Create content</StyledDropdownItem>
          )}
          <StyledDropdownItem to={'/sign-in'}>
            {isAuthenticated ? 'Sign out' : 'Sign in'}
          </StyledDropdownItem>
        </StyledDropdown>
      )}
    </DropdownContainer>
  );
};

export { AvatarDropdown };
