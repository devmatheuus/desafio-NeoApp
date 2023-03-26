import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
  gap: 1.5rem;

  font-family: ${({ theme }) => theme.fonts.family.primary};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  p {
    text-align: start;

    font-weight: bold;
    font-size: 1.4rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.red};
    transition: 0.5s;
  }
`;
