import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};

  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 2rem;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.family.secondary};
`;
