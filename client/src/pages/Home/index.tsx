// Globals
import { useNavigate } from 'react-router-dom';

// Components
import { Body } from 'components/Body';
import { NavBar } from 'components/NavBar';
import { Footer } from 'components/Footer';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Body>
        <div>this is the home page</div>
        <button onClick={() => navigate('/archives')}>click</button>
      </Body>
      <Footer />
    </>
  );
};

export { Home };
