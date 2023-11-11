import React, { useEffect, useState } from 'react';

// Styles
import { GradientOverlay, StyledCardContainer, StyledImage, StyledHeader, StyledSubheader } from './styles.d';

interface BlogCardData {
  title: string;
  subtitle: string;
  body: string;
  image: string;
  category: string;
}

interface BlogCard {
  data: BlogCardData;
}

const BlogCard = (props: BlogCard) => {
  const { body, title, subtitle, image } = props.data;

  return (
    <StyledCardContainer>
      {image && (
        <>
          <StyledImage loading="lazy" src={`${image}`} /> 
          <GradientOverlay />
          <StyledHeader>{title}</StyledHeader>
          <StyledSubheader>{subtitle}</StyledSubheader>
        </>
      )}
    </StyledCardContainer>
  );
};

export { BlogCard };
