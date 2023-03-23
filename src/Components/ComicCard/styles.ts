import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 300px;
  margin: 3.5rem 0;

  font-family: ${({ theme }) => theme.fonts.family.primary};
  box-shadow: 0 20px 35px -15px rgba(0, 0, 0, 0.4);

  figure {
    width: 200px;
    height: 100%;

    display: flex;
    flex-direction: column;

    gap: 2rem;

    img {
      width: 100%;
      height: 100%;
    }

    figcaption {
      color: ${({ theme }) => theme.colors.black};
      font-weight: bold;
      text-align: start;
      font-size: 1.4rem;
    }
  }
`;
