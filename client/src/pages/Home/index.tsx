// Globals
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { Body } from 'components/Body';
import { NavBar } from 'components/NavBar';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Body>
        <div>this is the home page</div>
        <button onClick={() => navigate('/archives')}>click</button>
      </Body>
    </>
  );
};

export { Home };
