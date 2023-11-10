import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import {
  StyledButton,
  StyledModalContainer,
  ModalHeaderContent,
  StyledHeader,
  InputContainer,
  StyledInput,
  CloseButton,
  ButtonContainer,
  SaveButton,
  StyledOverlay,
} from './styles.d';
import { useCallApi } from 'hooks/callApi';
import { CategoryData } from 'components/CategoryTabs';

interface AddCategoryProps {
  setRefetchData: Dispatch<SetStateAction<boolean>>;
  category: CategoryData | null;
  setContextMenuVisible: Dispatch<SetStateAction<boolean>>;
}

export const EditCategoryModal = ({setRefetchData, category, setContextMenuVisible}: AddCategoryProps) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [categoryName, setCategoryName] = useState<string | null>(
    category?.name ?? null
  );
  const overlayRef = useRef<HTMLDivElement>(null);
  const { data, loading, error, callApi } = useCallApi();

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (overlayRef.current && overlayRef.current.contains(event.target)) {
        setShowEditModal(false);
        setContextMenuVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [overlayRef]);

  const toggleModal = () => {
    setShowEditModal(!showEditModal);
    console.log(showEditModal, 'hey');
  };

  const handleChange = (e: any) => {
    setCategoryName(e.target.value);
  };

  const handleSave = async () => {
    await callApi('categories', 'PUT', { _id: category?._id, name: categoryName });
    setRefetchData(true);
    setContextMenuVisible(false);
    toggleModal();
  };

  return (
    <>
      <StyledButton onClick={toggleModal}>Edit</StyledButton>
      {showEditModal && (
        <>
          <StyledOverlay ref={overlayRef}></StyledOverlay>
          <StyledModalContainer>
            <ModalHeaderContent>
              <CloseButton onClick={toggleModal}>X</CloseButton>
            </ModalHeaderContent>
            <StyledHeader>Edit category:</StyledHeader>
            <InputContainer>
              <StyledInput
                value={categoryName}
                name="name"
                onChange={handleChange}
              />
            </InputContainer>
            <ButtonContainer>
              <SaveButton
                disabled={Boolean(!categoryName)}
                onClick={handleSave}
              >
                Save
              </SaveButton>
            </ButtonContainer>
          </StyledModalContainer>
        </>
      )}
    </>
  );
};
