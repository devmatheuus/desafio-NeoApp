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

export const RareCardContainer = styled.div`
  background-image: linear-gradient(
    145.58deg,
    rgb(0, 132, 255) 0%,
    rgb(255, 21, 141) 100%
  );

  width: 201px;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
  height: 350px;
  gap: 1.5rem;
  position: relative;

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

export const RareCardText = styled.p`
  text-align: start;

  font-weight: bold;
  font-size: 1.4rem;
  background: linear-gradient(
    145.58deg,
    rgb(0, 132, 255) 0%,
    rgb(255, 21, 141) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
