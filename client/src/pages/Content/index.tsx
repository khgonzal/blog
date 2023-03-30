import { StyledBackButton, FormContainer, FormWrapper } from './styles.d';
import { Body } from 'components/Body';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'context';
import { callApi } from 'hooks/callApi';

interface FormData {
  title: string;
  subtitle: string;
  body: string;
  image: string;
  category: string;
}

const initialData = {
  title: '',
  subtitle: '',
  body: '',
  image: '',
  category: '',
};
const Content = () => {
  const [data, setData] = useState<FormData>(initialData);

  useEffect(() => {
    callApi('posts', 'GET');
  }, []);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const { isAuthenticated } = useUserContext();
  return (
    <Body>
      <StyledBackButton onClick={() => navigate(-1)}>←</StyledBackButton>
      {isAuthenticated ? (
        <FormWrapper>
          <FormContainer>
            <div>Title</div>
            <input
              defaultValue={data.title}
              name="title"
              onChange={handleChange}
            />
          </FormContainer>
        </FormWrapper>
      ) : (
        <div>Please log in to access this page</div>
      )}
    </Body>
  );
};

export { Content };
