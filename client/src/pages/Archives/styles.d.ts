import styled from 'styled-components';
import 'index.css';


const StyledBlogSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 24px;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export {
  StyledBlogSection,
};
