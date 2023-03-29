// Globals
import React from 'react';
import { useLocation } from 'react-router-dom';

// Styles
import {
  NavContainer,
  LinkContainer,
  StyledLink,
  StyledHeader
} from './styles.d';

// Data
import { LinkData } from './data.d';

// Components
import { AvatarDropdown } from 'components/AvatarDropdown';

const NavBar = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <StyledHeader>the creative dev.</StyledHeader>
      <LinkContainer>
        {LinkData.map((item) => {
          const isActivePath: boolean = location.pathname === item.path;
          return (
            <StyledLink key={item.title} isActive={isActivePath} to={item.path}>
              {item.title}
            </StyledLink>
          );
        })}
      </LinkContainer>
      <AvatarDropdown />
    </NavContainer>
  );
};

export { NavBar };
