import styled from 'styled-components';
import 'index.css';

const StyledCardContainer = styled.div`
  width: 400px;
  height: 500px;
  margin: 0 14px;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    margin: 12px 0;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const GradientOverlay = styled.div`
  width: 100%;
  height: 45%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 1) 90%);
`;

const StyledHeader = styled.div`
  position: absolute;
  bottom: 160px;
  left: 12px;
  padding: 6px 12px;
  font-size: 28px;
  border-radius: 6px;
  background-color: var(--white);
  color: var(--blue);
  box-shadow: 2px 2px 8px var(--blue);
`;

const StyledSubheader = styled.div`
  position: absolute;
  bottom: 80px;
  left: 18px;
  padding: 6px 12px;
  font-size: 22px;
  border-radius: 6px;
  background-color: var(--white);
  color: var(--blue);
  box-shadow: 1px 1px 6px var(--blue);
`;

export { StyledCardContainer, StyledImage, GradientOverlay, StyledHeader, StyledSubheader };
