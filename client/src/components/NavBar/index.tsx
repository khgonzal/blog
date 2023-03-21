// Globals
import React from 'react';
import { useLocation } from 'react-router-dom';

// Styles
import {
  NavContainer,
  LinkContainer,
  StyledLink,
  ImageContainer
} from './styles.d';

// Data
import { LinkData } from './data.d';

// Components
import { AvatarDropdown } from 'components/AvatarDropdown';

const NavBar = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <ImageContainer>this will be an image</ImageContainer>
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
