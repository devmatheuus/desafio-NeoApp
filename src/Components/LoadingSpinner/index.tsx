import React from 'react';

import * as Styled from './styles';

export const LoadingSpinner: React.FC<Styled.ILoadingSpinner> = ({
  isOutTheButton = false,
}: Styled.ILoadingSpinner) => (
  <Styled.Spinner isOutTheButton={isOutTheButton} />
);
