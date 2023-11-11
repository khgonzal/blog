// Globals
import React, { useEffect, useState } from 'react';

// Components
import { NavBar } from 'components/NavBar';
import { Body } from 'components/Body';
import { Footer } from 'components/Footer';
import { CategoryTabs } from 'components/CategoryTabs';
import { useCallApi } from 'hooks/callApi';
import { BlogCard } from 'components/BlogCard';
import { LoadingSpinner } from 'components/LoadingSpinner';

import { StyledBlogSection } from './styles.d';

interface CategoryData {
  _id: string;
  name: string;
}

interface PostData {
  _id: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  category: string;
}

const Archives = () => {
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [postData, setPostData] = useState<PostData[]>([]);
  const [refetchData, setRefetchData] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const {
    loading: categoryLoading,
    error: categoryError,
    callApi: callCategoryApi,
  } = useCallApi();
  const {
    loading: postLoading,
    error: postError,
    callApi: callPostApi,
  } = useCallApi();

  // Hooks
  useEffect(() => {
    fetchCategoryData();

    if (!activeCategory) {
      setActiveCategory('');
    }

    if (Boolean(refetchData)) {
      setRefetchData(false);
    }
  }, [refetchData, activeCategory]);

  useEffect(() => {
    fetchPostData();
  }, [activeCategory]);

  const fetchCategoryData = async () => {
    const data = await callCategoryApi('categories', 'GET');
    const categoryData = [{ _id: '', name: 'All' }, ...data];
    setCategoryData(categoryData);
  };

  const fetchPostData = async () => {
    const data = await callPostApi(`posts/${activeCategory}`, 'GET');
    setPostData(data);
  };

  const isActive = console.log(postLoading, 'postLoading');
  console.log(postError, 'postError');
  console.log(postData, 'postData');

  return (
    <>
      <NavBar />
      <Body>
        {categoryData && (
          <CategoryTabs
            data={categoryData}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            setRefetchData={setRefetchData}
          />
        )}
        <StyledBlogSection>
          {postLoading && !Boolean(postError) && <LoadingSpinner />}
          {!postLoading &&
            !postError &&
            postData &&
            postData.map((item) => {
              return <BlogCard key={item._id} data={item} />;
            })}
        </StyledBlogSection>
      </Body>
      <Footer />
    </>
  );
};

export { Archives };
