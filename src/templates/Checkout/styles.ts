import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 117px);
  max-width: 1440px;
  margin: 1rem auto;
  padding: 0 1rem;
  gap: 2.5rem;
`;

export const CheckoutList = styled.ul`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  width: 50%;
  max-height: 400px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #eee;
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const CheckoutItem = styled.li`
  display: flex;
  gap: 3rem;
  padding: 1rem 2rem;
  width: 80%;
  border-top: 1px solid #c3c3c3;

  > div {
    gap: 1rem;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.black};
      font-weight: bold;
    }
  }

  @media (max-width: 950px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    > div {
      justify-content: center;
      h2 {
        font-size: 1.4rem;
      }
    }
  }
`;

export const CheckoutInfos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 1rem 2rem;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const CheckoutInfosDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
`;

export const CheckoutInfosPrice = styled(CheckoutInfosDescription)`
  align-items: flex-end;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  gap: 1rem;

  > button {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.black};
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
