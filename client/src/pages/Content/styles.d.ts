import styled from 'styled-components';
import 'index.css';

const StyledBackButton = styled.button`
  height: 40px;
  width: 40px;
  font-size: 22px;
  border-radius: 6px;
  background-color: var(--white);
  border: 1px solid var(--light-blue);
  box-shadow: 0 0 2px 1px var(--light-blue);
  color: var(--blue);

  &:hover {
    box-shadow: none;
  }

  &:active {
    box-shadow: 0 0 2px 1px var(--blue);
  }

  @media (max-width: 768px) {
    border: none;
    box-shadow: none;
    background-color: var(--neutral);
    margin-left: 8px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  height: 600px;
  background-color: var(--white);
  box-shadow: 0 0 2px 2px var(--light-blue);
  border-radius: 16px;
  flex-direction: column;

  @media (max-width: 768px) {
    box-shadow: none;
    background-color: var(--neutral);
  }
`;

export { StyledBackButton, FormContainer, FormWrapper };
