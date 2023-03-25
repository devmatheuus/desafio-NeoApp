import { createGlobalStyle } from 'styled-components';

import { GlobalStyleType } from '../types/globalStyle';

export const GlobalStyles = createGlobalStyle<GlobalStyleType>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.fonts.family.primary}; 
        position: relative;
    }
`;
