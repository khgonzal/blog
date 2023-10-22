import styled from 'styled-components';
import 'index.css';

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

const StyledModalContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 450px;
  padding: 1.3rem;
  min-height: 250px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  box-shadow: 0 0 8px 1px var(--brown);
  border-radius: 15px;
  z-index: 4;
`;

const ModalHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 24px;
`;

const StyledHeader = styled.div`
  font-size: 24px;
  color: var(--primary);
`;

const CloseButton = styled.button`
  color: var(--blue);
  text-align: center;
  font-size: 20px;
  opacity: 0.4;
  background-color: inherit;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(148, 154, 224, 0.3);
    box-shadow: 0 0 2px 4px rgba(148, 154, 224, 0.25);
    border-radius: 8px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const StyledInput = styled.input`
  width: 200px;

  &:focus {
    border-color: var(--primary);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const SaveButton = styled.button`
  color: var(--secondary);
  text-align: center;
  background-color: var(--primary);
  border: none;
  cursor: pointer;
  width: 100px;
  height: 32px;
  border-radius: 12px;
  font-size: 16px;

  &:hover:not(:disabled) {
    background-color: rgba(114, 110, 53, 0.8);
    box-shadow: 0 0 2px 4px rgba(114, 110, 53, 0.75);
  }
   
  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 3;
`;

export {
  StyledAddButton,
  StyledModalContainer,
  ModalHeaderContent,
  StyledHeader,
  CloseButton,
  InputContainer,
  StyledInput,
  ButtonContainer,
  SaveButton,
  StyledOverlay,
};
