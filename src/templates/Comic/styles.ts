import styled from 'styled-components';

interface IComicContainer {
  background: string;
}

export const SubTitleContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.white};
  h3 {
    font-size: 2.2rem;
    font-weight: bold;
  }

  p {
    font-size: 1.9rem;
    font-weight: 500;
  }
`;
export const ComicContainer = styled.div<IComicContainer>`
  display: flex;
  width: 100%;
  justify-content: center;
  height: calc(100vh - 97px);
  padding: 2rem 1rem;
  gap: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(0px);
    opacity: 0.8;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 4rem 1rem;
  }
`;

export const ComicContainerImage = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 300px;

  gap: 1rem;

  figure {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  p {
    font-size: 1.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ComicContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 60%;

  h2 {
    font-size: 2.6rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};

    font-family: ${({ theme }) => theme.fonts.family.secondary};
  }

  p {
    font-size: 1.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
  }
`;
