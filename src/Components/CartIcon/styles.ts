import styled from 'styled-components';

export const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  position: fixed;
  top: calc(100vh - 80px);
  left: 0;
  margin: 0 0px 45px 5px;
  transition: background-color 0.4s;

  > div {
    position: absolute;
    span {
      position: absolute;
      top: -25px;
      right: -20px;
      font-size: 0.9rem;
      font-family: ${({ theme }) => theme.fonts.family.secondary};
    }
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.red};
    transition: background-color 0.4s;
  }
`;
