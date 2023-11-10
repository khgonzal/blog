import { StyledContextMenu, StyledList, StyledOption } from './styles.d';
import { RefObject } from 'react';

interface ContextMenuProps {
  position: { x: number; y: number };
  contextMenuRef: RefObject<HTMLDivElement>
  contextMenuOptions: { id: string; component: JSX.Element; }[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  position,
  contextMenuRef,
  contextMenuOptions
}) => {
  return (
    <>
      <StyledContextMenu ref={contextMenuRef} top={position.y} left={position.x}>
        <StyledList>
            {contextMenuOptions.map(option => (
              <StyledOption key={option.id}>
                {option.component}
              </StyledOption>
            ))}
        </StyledList>
      </StyledContextMenu>
    </>
  );
};

export { ContextMenu };
