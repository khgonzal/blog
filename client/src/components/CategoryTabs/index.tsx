// Styled Components
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import {
  StyledTabContainer,
  ContentContainer,
  StyledTab,
  StyledButton,
} from './styles.d';
import { AddCategoryModal } from 'modals/AddCategoryModal';
import { ContextMenu } from 'components/ContextMenu';
import { EditCategoryModal } from 'modals/EditCategoryModal';

export interface CategoryData {
  _id: string;
  name: string;
}

interface Category {
  data: CategoryData[];
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
  setRefetchData: Dispatch<SetStateAction<boolean>>;
}

const CategoryTabs = (props: Category) => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [selectedContextMenuOption, setSelectedContextMenuOption] =
    useState<CategoryData | null>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const { data, activeCategory, setActiveCategory, setRefetchData } = props;
  const handleTabSelection = (name: string) => {
    setActiveCategory(name);
  };

  const handleContextMenu = (
    e: React.MouseEvent,
    option: SetStateAction<CategoryData | null>
  ) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    setContextMenuPosition({ x, y });
    setSelectedContextMenuOption(option);
    setContextMenuVisible(true);
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(event.target)
      ) {
        setContextMenuVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contextMenuRef]);

  return (
    <StyledTabContainer>
      <ContentContainer>
        {data.map((item) => {
          return (
            <>
              <StyledTab
                onContextMenu={(e: React.MouseEvent) =>
                  handleContextMenu(e, item)
                }
                key={`tab -${item._id}`}
              >
                <StyledButton
                  key={`button -${item._id}`}
                  onClick={() => handleTabSelection(item.name)}
                  isActive={Boolean(item.name === activeCategory)}
                >
                  {item.name}
                </StyledButton>
              </StyledTab>
              {contextMenuVisible && (
                <ContextMenu
                  contextMenuRef={contextMenuRef}
                  key={`context menu - ${item._id}`}
                  setRefetchData={setRefetchData}
                  setContextMenuVisible={setContextMenuVisible}
                  isVisible={contextMenuVisible}
                  position={contextMenuPosition}
                  selectedContextMenuOption={selectedContextMenuOption}
                />
              )}
            </>
          );
        })}
      </ContentContainer>
      <AddCategoryModal setRefetchData={setRefetchData} />
    </StyledTabContainer>
  );
};

export { CategoryTabs };