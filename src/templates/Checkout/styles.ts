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
  gap: 1rem;
`;

export const CheckoutList = styled.ul`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  width: 50%;
  max-height: 400px;
  overflow-y: auto;
  border-radius: 8px 8px 0px 0px;

  background-color: ${({ theme }) => theme.colors.white};
  ::-webkit-scrollbar {
    width: 3px;
    height: 2px;
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
  padding: 1rem;
  border-top: 1px solid #c3c3c3;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;

  > div {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    width: 80%;

    h2 {
      font-size: 2rem;
      white-space: pre-wrap;
      color: ${({ theme }) => theme.colors.black};
      font-weight: bold;
    }

    p {
      font-size: ${({ theme }) => theme.fonts.sizes.small};
      color: ${({ theme }) => theme.colors.black};
      font-weight: bold;
    }

    div {
      display: flex;
      align-items: flex-end;
      gap: 1rem;
      margin-top: 1rem;

      > button:nth-child(2) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 31px;
        gap: 1rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.red};
        cursor: pointer;

        span {
          font-size: 1.1rem;
        }
      }
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

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 0px 0px 8px 8px;
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

export const NoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 117px);
  width: 100%;
  max-width: 1440px;
  margin: 1rem auto;
  gap: 2rem;
  padding: 1rem;

  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    text-align: center;
  }

  button {
    background: ${({ theme }) => theme.colors.black};
  }
`;
