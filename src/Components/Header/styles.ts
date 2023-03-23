import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
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
`;

export const HeaderActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
