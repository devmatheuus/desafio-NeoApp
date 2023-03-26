import styled from 'styled-components';

interface ISlider {
  background: string;
}

export const Slider = styled.div<ISlider>`
  width: 100%;
  height: 80vh;
  position: relative;

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
    opacity: 0.8;
    z-index: -1;
    transition: background-image 4s;
  }
`;
