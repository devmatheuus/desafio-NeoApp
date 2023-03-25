import styled from 'styled-components';

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;

  svg {
    transform: translateX(10px);
  }

  input {
    height: 3rem;
    padding: 0 1rem;
    width: 100%;
    border-radius: 4px;
    border: none;
    outline: none;

    font-size: ${({ theme }) => theme.fonts.sizes.small};
    font-weight: 500;
  }
`;
