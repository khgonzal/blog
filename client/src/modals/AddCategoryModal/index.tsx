import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import {
  StyledAddButton,
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

interface AddCategoryProps {
    setRefetchData: Dispatch<SetStateAction<boolean>>
  }

export const AddCategoryModal = (props: AddCategoryProps) => {
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);
  const { data, loading, error, callApi } = useCallApi();

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (overlayRef.current && overlayRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [overlayRef]);

  const toggleModal = () => {
    setShowModal(!showModal);
    setCategoryName('');
  };

  const handleChange = (e: any) => {
    setCategoryName(e.target.value);
  };

  const handleSave = async () => {
    await callApi('categories', 'POST', {name: categoryName})
    props.setRefetchData(true);
    toggleModal();
    setCategoryName('');
  }

  return (
    <>
      <StyledAddButton onClick={toggleModal}>+</StyledAddButton>
      {showModal && (
        <>
          <StyledOverlay ref={overlayRef}></StyledOverlay>
          <StyledModalContainer>
            <ModalHeaderContent>
              <CloseButton onClick={toggleModal}>X</CloseButton>
            </ModalHeaderContent>
            <StyledHeader>Add a category:</StyledHeader>
            <InputContainer>
              <StyledInput
                defaultValue={categoryName}
                value={categoryName}
                name="name"
                onChange={handleChange}
              />
            </InputContainer>
            <ButtonContainer>
              <SaveButton disabled={Boolean(!categoryName)} onClick={handleSave}>Save</SaveButton>
            </ButtonContainer>
          </StyledModalContainer>
        </>
      )}
    </>
  );
};
