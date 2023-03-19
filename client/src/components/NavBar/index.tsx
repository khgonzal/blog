import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  NavContainer,
  LinkContainer,
  StyledLink,
  StyledAvatar,
} from './styles.d';
import { LinkData } from './data.d';

const NavBar = () => {
  const location = useLocation();

  return (
    <NavContainer>
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
        <StyledAvatar />
    </NavContainer>
  );
};

export { NavBar };
