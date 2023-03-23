import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;

  width: 300px;

  font-family: ${({ theme }) => theme.fonts.family.primary};

  figure {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 0.9rem;

    img {
      width: 100%;
      min-height: 100%;
    }

    figcaption {
      color: ${({ theme }) => theme.colors.black};
      font-weight: bold;
      text-align: center;
      font-size: 1.2rem;
    }
  }
`;
