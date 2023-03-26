import styled from 'styled-components';

export const ExternalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  button {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
