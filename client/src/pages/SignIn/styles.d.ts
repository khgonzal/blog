import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import 'index.css';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background-color: var(--primary);

  @media (max-width: 768px) {
    background-color: var(--neutral);
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: var(--neutral);
  box-shadow: 0 0 5px 4px var(--brown);
  border-radius: 16px;
  flex-direction: column;

  @media (max-width: 768px) {
    box-shadow: none;
  }
`;

const StyledLogo = styled.div`
  background-image: url('/images/logoSmall.png');
  background-size: 160px 160px;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  margin: 70px 0 30px;
  @media (max-width: 768px) {
    margin: 40px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 250px;
  padding: 18px;
`;

const StyledLabel = styled.label`
  color: var(--brown);
`;

const StyledInput = styled.input`
  margin: 0 12px;
  border-radius: 3px;
  border: 1px solid var(--green);
  padding: 0 6px 2px;

  &:focus {
    box-shadow: 0 0 5px var(--green);
    outline: none;
  }
`;

const StyledButton = styled.button`
  margin: 12px;
  border-radius: 3px;
  width: 120px;
  background-color: var(--pink);
  border: 1px solid var(--brown);
  box-shadow: 0 0 2px var(--brown);
  padding: 2px 4px;
  outline: none;

  &:disabled {
    box-shadow: none;
  }
`;

const StyledLink = styled(NavLink)`
  color: var(--green);
  text-decoration: none;
  font-size: 12px;

  &:hover {
    color: var(--blue);
  }

  &:active {
    color: var(--primary);
  }
`;

export {
  StyledContainer,
  CardContainer,
  StyledLogo,
  InputContainer,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledLink
};
