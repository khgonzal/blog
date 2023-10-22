// Styled Components
import { Dispatch, SetStateAction } from 'react';
import {
  StyledTabContainer,
  ContentContainer,
  StyledTab,
  StyledButton,
  StyledAddButton,
} from './styles.d';
import { AddCategoryModal } from 'modals/AddCategoryModal';

interface CategoryData {
  _id: string;
  name: string;
}

interface Category {
  data: CategoryData[];
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
  setRefetchData: Dispatch<SetStateAction<boolean>>
}

const CategoryTabs = (props: Category) => {
  const { data, activeCategory, setActiveCategory, setRefetchData } = props;
  const handleTabSelection = (name: string) => {
    setActiveCategory(name);
  };
  return (
    <StyledTabContainer>
      <ContentContainer>
        {data.map((item) => {
          return (
            <StyledTab onContextMenu={(e: any) => e.preventDefault()} key={item._id}>
              <StyledButton
                onClick={() => handleTabSelection(item.name)}
                isActive={Boolean(item.name === activeCategory)}
              >
                {item.name}
              </StyledButton>
            </StyledTab>
          );
        })}
      </ContentContainer>
      <AddCategoryModal setRefetchData={setRefetchData} />
    </StyledTabContainer>
  );
};

export { CategoryTabs };
