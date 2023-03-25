import styled, { css } from 'styled-components';

export interface ILoadingSpinner {
  isOutTheButton?: boolean;
}

export const Spinner = styled.div<ILoadingSpinner>`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 50px;
  height: 50px;

  border: 4px solid #f3f3f3;
  border-top: 3px solid ${({ theme }) => theme.colors.red};
  border-radius: 50%;
  animation: spinner 0.8s linear infinite;

  ${({ isOutTheButton }) =>
    isOutTheButton &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`;
