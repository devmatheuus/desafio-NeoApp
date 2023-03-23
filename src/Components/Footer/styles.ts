import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 7rem;
  padding: 0.8rem;

  font-size: ${({ theme }) => theme.fonts.sizes.small};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  text-align: center;

  p {
    a {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
