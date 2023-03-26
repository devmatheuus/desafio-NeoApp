import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 0.4rem 1rem;

  button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }

  span {
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  }
`;
