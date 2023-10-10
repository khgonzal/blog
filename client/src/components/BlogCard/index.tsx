import React, { useEffect, useState } from 'react';

// Styles
import { StyledCardContainer } from './styles.d';

interface ImageData {
  data: ArrayBuffer;
  type: string;
}

interface BlogCardData {
  title: string;
  subtitle: string;
  body: string;
  image: ImageData;
  category: string;
}

interface BlogCard {
  data: BlogCardData;
}

const BlogCard = (props: BlogCard) => {
    console.log(props)
  const { body, title, subtitle, image } = props.data;

  return (
    <StyledCardContainer>
      {image && <img src={`${image}`} />}
    </StyledCardContainer>
  );
};

export { BlogCard };
