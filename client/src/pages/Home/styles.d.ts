import styled from 'styled-components';
import 'index.css';

const ImageContainer = styled.div`
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.div`
  background-image: url('/images/logoSmall.png');
  background-size: 400px 400px;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  box-shadow: 0 0 8px 5px var(--pink);
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  padding-top: 12px;
  color: var(--primary);
  font-weight: bold;
`;

const StyledSubHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  padding-top: 9px;
  color: var(--primary);
  font-style: italic;
`;

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  padding: 24px 32px 64px;
  color: var(--primary);
  text-align: center;
`;

const StyledBlogSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 48px;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export {
  ImageContainer,
  StyledImage,
  StyledHeader,
  StyledSubHeader,
  StyledBody,
  StyledBlogSection,
};
