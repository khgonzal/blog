import { useUserContext } from 'context';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledContainer, CardContainer } from './styles.d';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { toggleIsAuthenticated } = useUserContext();
  const navigate = useNavigate();

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

  const userNameMismatch =
    username === '' || username !== process.env.REACT_APP_USERNAME;
  const passwordMismatch =
    password === '' || password !== process.env.REACT_APP_PASSWORD;
  const isDisabled = userNameMismatch || passwordMismatch;

  return (
    <StyledContainer>
      <CardContainer>
        <div>Username</div>
        <input
          name="username"
          placeholder="username"
          onChange={handleUsernameChange}
          defaultValue={username}
        />
        <div>Password</div>
        <input
          name="username"
          placeholder="password"
          onChange={handlePasswordChange}
          defaultValue={password}
        />
        <button disabled={isDisabled} onClick={handleSignIn}>
          Sign In
        </button>
      </CardContainer>
    </StyledContainer>
  );
};

export { SignIn };
