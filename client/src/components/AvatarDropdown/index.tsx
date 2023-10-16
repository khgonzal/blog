// Globals
import { useUserContext } from 'context';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import {
  DropdownContainer,
  StyledAvatar,
  StyledDropdown,
  StyledDropdownItem,
} from './styles.d';

const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useUserContext();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        dropdownRef.current &&
        avatarRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !avatarRef.current.contains(event.target)
      ) {
        console.log(dropdownRef.current.contains(event.target));
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleClick = () => {
    if (isAuthenticated) {
      logout()
    }
  }

  return (
    <DropdownContainer>
      <StyledAvatar ref={avatarRef} isSelected={isOpen} onClick={handleOpen} />
      {isOpen && (
        <StyledDropdown ref={dropdownRef}>
          {/* link to create content if signed in */}
          {isAuthenticated && (
            <StyledDropdownItem to={'/create-content'}>Create content</StyledDropdownItem>
          )}
          {/* sign in/sign out */}
          <StyledDropdownItem onClick={handleClick} to={'/sign-in'}>
            {isAuthenticated ? 'Sign out' : 'Sign in'}
          </StyledDropdownItem>
        </StyledDropdown>
      )}
    </DropdownContainer>
  );
};

export { AvatarDropdown };
