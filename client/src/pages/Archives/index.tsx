// Globals
import React, { useEffect, useState } from 'react';

// Components
import { NavBar } from 'components/NavBar';
import { Body } from 'components/Body';
import { Footer } from 'components/Footer';
import { CategoryTabs } from 'components/CategoryTabs';
import { useCallApi } from 'hooks/callApi';

interface CategoryData {
  _id: string;
  name: string;
}

const Archives = () => {
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [refetchData, setRefetchData] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const { loading, error, callApi } = useCallApi();

  // Hooks
  useEffect(() => {
    fetchData();

    if (!loading && !error && categoryData) {
      setActiveCategory(categoryData[0]._id);
    }

    if (Boolean(refetchData)) {
      setRefetchData(false);
    }
  }, [loading, error, refetchData]);

  const fetchData = async () => {
    const data = await callApi('categories', 'GET');
    setCategoryData(data);
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
        <div>this is the archive page yo</div>
      </Body>
      <Footer />
    </>
  );
};

export { Archives };
