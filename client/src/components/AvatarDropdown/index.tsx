// Globals
import { useUserContext } from 'context';
import React, { useEffect, useRef, useState } from 'react';

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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <DropdownContainer>
      <StyledAvatar isSelected={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <StyledDropdown ref={dropdownRef}>
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
