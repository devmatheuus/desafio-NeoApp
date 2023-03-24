import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
  gap: 1.5rem;

  font-family: ${({ theme }) => theme.fonts.family.primary};

  figure {
    box-shadow: 0 26px 35px -15px rgba(0, 0, 0, 0.4);

    overflow: hidden;
    max-height: 300px;

    display: flex;
    flex-direction: column;

    width: 200px;
    gap: 2rem;

    img {
      width: 100%;
      height: 100%;

      &:hover {
        transform: scale(1.1);
      }

      transition: 0.5s;
    }
  }
  p {
    color: ${({ theme }) => theme.colors.black};
    text-align: start;

    font-weight: bold;
    font-size: 1.4rem;
  }
`;
