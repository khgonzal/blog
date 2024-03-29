// Globals
import { useEffect, useState } from 'react';

// Hooks
import { useCallApi } from 'hooks/callApi';

// Components
import { Body } from 'components/Body';
import { BlogCard } from 'components/BlogCard';
import { NavBar } from 'components/NavBar';
import { Footer } from 'components/Footer';

// Styles
import {
  ImageContainer,
  StyledImage,
  StyledHeader,
  StyledSubHeader,
  StyledBody,
  StyledBlogSection,
  LinkContainer,
  StyledLink,
} from './styles.d';
import { LoadingSpinner } from 'components/LoadingSpinner';

interface FormData {
  _id: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  category: string;
}

const Home = () => {
  const [postData, setPostData] = useState<FormData[]>([]);
  const { loading, error, callApi } = useCallApi();

  // Hooks
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await callApi('posts', 'GET');
    setPostData(data);
  };

  return (
    <>
      <NavBar />
      <Body>
        <ImageContainer>
          <StyledImage />
        </ImageContainer>
        <StyledHeader>Hi! I'm Katherine Gonzalez</StyledHeader>
        <StyledSubHeader>Welcome to The Creative Dev</StyledSubHeader>
        <StyledBody>
          <p>
            This is a website that was designed and created by me 🙂 I am a
            full-stack engineer located outside of Boston, MA that loves
            building cool stuff on the internet.
          </p>
          <p>
            This website was built using React, Node, Express and MongoDB. All
            of the components were styled and built by me.
          </p>
          <p>
            Take a look around! You'll find blog posts about random thoughts
            that I have. And if you navigate to the footer you can shoot me an
            email. I'd love to hear from you!
          </p>
        </StyledBody>
      </Body>
      <StyledBlogSection>
        {loading && !Boolean(error) && <LoadingSpinner />}
        {!loading &&
          !error &&
          postData &&
          postData.slice(0, 3).map((item) => {
            return <BlogCard key={item._id} data={item} />;
          })}
      </StyledBlogSection>
      <LinkContainer>
        <StyledLink to={'/archives/all'}>→ check out more</StyledLink>
      </LinkContainer>
      <Footer />
    </>
  );
};

export { Home };
