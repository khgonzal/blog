// Globals
import { useUserContext } from 'context';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import {
  StyledContainer,
  CardContainer,
  StyledLogo,
  InputContainer,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledLink,
} from './styles.d';

const SignIn = () => {
  // State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Context
  const { isAuthenticated, toggleIsAuthenticated } = useUserContext();
  // Router
  const navigate = useNavigate();

  // Hooks
  useEffect(() => {
    if (isAuthenticated) {
      toggleIsAuthenticated();
    }
  }, []);

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    toggleIsAuthenticated();
    navigate('/');
  };

  // Vars
  const userNameMismatch =
    username === '' || username !== process.env.REACT_APP_USERNAME;
  const passwordMismatch =
    password === '' || password !== process.env.REACT_APP_PASSWORD;
  const isDisabled = userNameMismatch || passwordMismatch;

  return (
    <StyledContainer>
      <CardContainer>
        <StyledLogo />
        <InputContainer>
          <StyledLabel>username</StyledLabel>
          <StyledInput
            name="username"
            placeholder="username"
            onChange={handleUsernameChange}
            defaultValue={username}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>password</StyledLabel>
          <StyledInput
            name="username"
            placeholder="password"
            onChange={handlePasswordChange}
            defaultValue={password}
          />
        </InputContainer>
        <StyledButton disabled={isDisabled} onClick={handleSignIn}>
          Sign In
        </StyledButton>
        <StyledLink to={'/'}>go home</StyledLink>
      </CardContainer>
    </StyledContainer>
  );
};

export { SignIn };
