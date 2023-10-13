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

interface Category {
  name: string;
  _id: string;
}

const initialData: FormData = {
  title: '',
  subtitle: '',
  body: '',
  image: '',
  category: '',
};

const Content = () => {
  const [contentData, setContentData] = useState<FormData>(initialData);
  const [dropdownData, setDropdownData] = useState<Category[]>([]);
  const { data, loading, error, callApi } = useCallApi();

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    const fetchedData = await callApi('categories', 'GET');
    setDropdownData(fetchedData);
  };

  const handleSave = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', contentData.title);
    formData.append('subtitle', contentData.subtitle);
    formData.append('body', contentData.body);
    formData.append('category', contentData.category);
    formData.append('image', contentData.image);
    
    // using multer so can't use global callApi
    await fetch(`http://localhost:3001/posts`, {method: 'POST', body: formData});

    setContentData(initialData);
  };

  const handleChange = (e: any) => {
    if (e.target.name === 'image') {
      setContentData({ ...contentData, image: e.target.files[0] });
    } else {
      setContentData({ ...contentData, [e.target.name]: e.target.value });
    }
  };

  const isDisabled: boolean = Object.keys(contentData).some((key) => {
    const stringKey = key as keyof FormData;
    return stringKey !== 'image' && !contentData[stringKey];
  });

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
              type="file"
              name="image"
              accept="image/*"
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
            <select name="category" onChange={handleChange}>
              <option disabled selected>
                Select a category...
              </option>
              {dropdownData &&
                dropdownData.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })}
            </select>
            <button onClick={handleSave} disabled={isDisabled}>
              Save
            </button>
          </FormContainer>
        </FormWrapper>
      ) : (
        <div>Please log in to access this page</div>
      )}
    </Body>
  );
};

export { Content };
