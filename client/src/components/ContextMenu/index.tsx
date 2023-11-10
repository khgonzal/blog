import { EditCategoryModal } from 'modals/EditCategoryModal';
import { StyledContextMenu, StyledList, StyledOption } from './styles.d';
import { Dispatch, RefObject, SetStateAction } from 'react';
import { CategoryData } from 'components/CategoryTabs';

interface ContextMenuProps {
  setRefetchData: Dispatch<SetStateAction<boolean>>;
  isVisible: boolean;
  position: { x: number; y: number };
  selectedContextMenuOption: CategoryData | null;
  setContextMenuVisible: Dispatch<SetStateAction<boolean>>;
  contextMenuRef: RefObject<HTMLDivElement>
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  setRefetchData,
  position,
  selectedContextMenuOption,
  contextMenuRef,
  setContextMenuVisible
}) => {
  return (
    <>
      <StyledContextMenu ref={contextMenuRef} top={position.y} left={position.x}>
        <StyledList>
          <StyledOption>
            <EditCategoryModal
              setRefetchData={setRefetchData}
              category={selectedContextMenuOption}
              setContextMenuVisible={setContextMenuVisible}
            />
          </StyledOption>
        </StyledList>
      </StyledContextMenu>
    </>
  );
};

export { ContextMenu };
