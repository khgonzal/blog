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

const StyledBlogContainer = styled.div`
  margin: 16px 8px;
`;

const PaginationSection = styled.div`
  min-width: 85%;
  margin: 24px;
  display: flex;
`;

const PaginationButton = styled.button`
  color: var(--primary);
  margin: 8px;
`;

export {
  StyledBlogSection,
  StyledBlogContainer,
  PaginationSection,
  PaginationButton
};
