import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/index';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div>this is the home page</div>
      <button onClick={() => navigate('/archives')}>click</button>
    </>
  );
};

export { Home };
