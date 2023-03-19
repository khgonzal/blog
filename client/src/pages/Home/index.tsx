import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>this is the home page</div>
      <button onClick={() => navigate('/archives')}>click</button>
    </>
  );
};

export { Home };

