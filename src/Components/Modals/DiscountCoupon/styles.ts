import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContent = styled.div`
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

export const ModalCloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  color: #000;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const ModalLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ModalInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

export const ModalButtonContainer = styled.div`
  margin-top: 20px;

  display: flex;
  width: 100%;
  justify-content: space-evenly;

  gap: 1rem;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 20px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.red};
  }

  button:last-child {
    background-color: green;
  }

  @media (max-width: 950px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;
