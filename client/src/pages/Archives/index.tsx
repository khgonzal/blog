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

import {
  StyledBlogSection,
  StyledBlogContainer,
  PaginationSection,
  PaginationButton,
} from './styles.d';

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

const pageSize = 6;

const Archives = () => {
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [postData, setPostData] = useState<PostData[]>([]);
  const [refetchData, setRefetchData] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [pages, setPages] = useState<number[]>([]);
  const [activePage, setActivePage] = useState<number>(1);

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

  const {
    loading: countLoading,
    error: countError,
    callApi: callPostCountApi,
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

  useEffect(() => {
    generatePages(numberOfPages);
  }, [activeCategory, numberOfPages]);

  const fetchCategoryData = async () => {
    const data = await callCategoryApi('categories', 'GET');
    const categoryData = [{ _id: '', name: 'All' }, ...data];
    setCategoryData(categoryData);
  };

  const fetchPostData = async () => {
    const countData = await callPostCountApi(`posts/count`, 'GET');
    console.log(countData)
    const pages = Math.ceil(countData / pageSize);
    setNumberOfPages(pages);
    console.log(pages)

    console.log(activePage, 'activePage')
    const data = await callPostApi(`posts/${activeCategory}?page=${activePage}&limit=${pageSize}`, 'GET');
    setPostData(data);
  };

  const generatePages = (numberOfPages: number) => {
    let pagesArray = [];

    for (let i = 1; i <= numberOfPages; i++) {
      pagesArray.push(i);
    }

    setPages(pagesArray);
  };

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
          <>
            {!postLoading &&
              !postError &&
              postData &&
              !countError &&
              !countLoading &&
              postData.map((item) => {
                return (
                  <StyledBlogContainer>
                    <BlogCard key={item._id} data={item} />
                  </StyledBlogContainer>
                );
              })}
            <PaginationSection>
              {pages.map((page) => (
                <PaginationButton key={page} onClick={() => setActivePage(page)}>{page}</PaginationButton>
              ))}
            </PaginationSection>
          </>
        </StyledBlogSection>
      </Body>
      <Footer />
    </>
  );
};

export { Archives };
