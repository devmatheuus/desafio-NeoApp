import React from 'react';

import * as Styled from './styles';

export const Footer: React.FC = () => {
  return (
    <Styled.FooterContainer>
      <p>
        Feito com ❤️ por{' '}
        <a
          href="https://www.linkedin.com/in/devmatheuus/"
          target="_blank"
          rel="noreferrer"
        >
          Matheus
        </a>
      </p>
    </Styled.FooterContainer>
  );
};
