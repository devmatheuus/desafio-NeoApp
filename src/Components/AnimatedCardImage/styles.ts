import styled from 'styled-components';

export const FigureContainer = styled.figure`
  box-shadow: 0 26px 35px -15px rgba(0, 0, 0, 0.4);

  overflow: hidden;

  display: flex;
  flex-direction: column;

  gap: 2rem;

  img {
    width: 100%;
    height: 100%;

    &:hover {
      transform: scale(1.1);
    }

    transition: 0.5s;
  }
`;
