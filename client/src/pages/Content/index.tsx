import { StyledBackButton, FormContainer, FormWrapper } from './styles.d';
import { Body } from 'components/Body';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'context';
import { useCallApi } from 'hooks/callApi';

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
  const [contentData, setContentData] = useState<FormData>(initialData);
  const { data, loading, error, callApi } = useCallApi();
  console.log(contentData)
  const handleSave = async () => {
    await callApi('posts', 'POST', contentData)
    console.log('im here')
    setContentData(initialData)
  }

  const handleChange = (e: any) => {
    setContentData({ ...contentData, [e.target.name]: e.target.value });
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
              defaultValue={contentData.title}
              value={contentData.title}
              name="title"
              onChange={handleChange}
            />
            <div>Subtitle</div>
            <input
              defaultValue={contentData.subtitle}
              value={contentData.subtitle}
              name="subtitle"
              onChange={handleChange}
            />
            <div>Image</div>
            <input
              defaultValue={contentData.image}
              value={contentData.image}
              name="image"
              onChange={handleChange}
            />
            <div>Body</div>
            <input
              defaultValue={contentData.body}
              value={contentData.body}
              name="body"
              onChange={handleChange}
            />
            <div>Category</div>
            <input
              defaultValue={contentData.category}
              value={contentData.category}
              name="category"
              onChange={handleChange}
            />
            <button onClick={handleSave}>Save</button>
          </FormContainer>
        </FormWrapper>
      ) : (
        <div>Please log in to access this page</div>
      )}
    </Body>
  );
};

export { Content };
