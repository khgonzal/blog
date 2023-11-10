import styled from 'styled-components';
import 'index.css';

const StyledTabContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  border-bottom: 1px solid var(--primary);

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  padding-bottom: 6px;
  overflow-x: scroll;
  white-space: nowrap;
  max-width: 90%;
  height: 68px;
  align-items: end;
`;

const StyledTab = styled.div`
  width: 140px;
  display: flex;
  justify-content: start;
  margin-right: 16px;
  position: relative
`;

const StyledButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  color: var(--primary);
  ${(button) =>
    button.isActive &&
    'background-color: rgba(219, 154, 142, 0.25); border-radius: 8px; box-shadow: 0 0 2px 4px rgba(219, 154, 142, 0.2);'};

  &:hover {
    background-color: rgba(114, 110, 53, 0.25); 
    border-radius: 8px; 
    box-shadow: 0 0 2px 4px rgba(114, 110, 53, 0.2);
  }

  &:active {
    background-color: rgba(166, 106, 63, 0.25); 
    border-radius: 8px; 
    box-shadow: 0 0 2px 4px rgba(166, 106, 63, 0.2);
  }
`;

const StyledAddButton = styled.button`
  border: none;
  background-color: inherit;
  padding: 0 10px;
  font-size: 24px;
  cursor: pointer;
  display: inline-block;
  color: var(--primary);
  font-weight: bold;

  &:hover {
    border: 1px solid var(--primary);
  }

  &:active {
    border: 2px solid var(--primary);
  }
`;

export {
  StyledTabContainer,
  ContentContainer,
  StyledTab,
  StyledButton,
  StyledAddButton,
};
