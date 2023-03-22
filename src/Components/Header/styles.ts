import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;
  height: 5rem;

  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};

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
