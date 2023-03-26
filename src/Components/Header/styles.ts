import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  > div {
    padding: 1rem 2rem;
    width: 100%;
    max-width: 1440px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
    font-family: ${({ theme }) => theme.fonts.family.secondary};
  }

  @media (max-width: 685px) {
    > div {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }

    h1 {
      font-size: ${({ theme }) => theme.fonts.sizes.medium};
    }
  }
`;

export const HeaderActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
