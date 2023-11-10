import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import {
  StyledButton,
  StyledModalContainer,
  ModalHeaderContent,
  StyledHeader,
  CategoryContainer,
  CloseButton,
  ButtonContainer,
  DeleteButton,
  StyledOverlay,
} from './styles.d';
import { useCallApi } from 'hooks/callApi';
import { CategoryData } from 'components/CategoryTabs';

interface DeleteCategoryProps {
  setRefetchData: Dispatch<SetStateAction<boolean>>;
  category: CategoryData | null;
  setContextMenuVisible: Dispatch<SetStateAction<boolean>>;
}

export const DeleteCategoryModal = ({setRefetchData, category, setContextMenuVisible}: DeleteCategoryProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { data, loading, error, callApi } = useCallApi();

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (overlayRef.current && overlayRef.current.contains(event.target)) {
        setShowDeleteModal(false);
        setContextMenuVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [overlayRef, setContextMenuVisible]);

  const toggleModal = () => {
    if (showDeleteModal) {
      setContextMenuVisible(false);
    }
    setShowDeleteModal(!showDeleteModal);
  };

  const handleDelete = async () => {
    await callApi('categories', 'DELETE', { _id: category?._id });
    setRefetchData(true);
    setContextMenuVisible(false);
    toggleModal();
  };

  return (
    <>
      <StyledButton onClick={toggleModal}>Delete</StyledButton>
      {showDeleteModal && (
        <>
          <StyledOverlay ref={overlayRef}></StyledOverlay>
          <StyledModalContainer>
            <ModalHeaderContent>
              <CloseButton onClick={toggleModal}>X</CloseButton>
            </ModalHeaderContent>
            <StyledHeader>Are you sure you want to delete this category?</StyledHeader>
            <CategoryContainer>
              {category?.name}
            </CategoryContainer>
            <ButtonContainer>
              <DeleteButton
                onClick={handleDelete}
              >
                Delete
              </DeleteButton>
            </ButtonContainer>
          </StyledModalContainer>
        </>
      )}
    </>
  );
};
