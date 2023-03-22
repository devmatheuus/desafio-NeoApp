import { createGlobalStyle } from 'styled-components';

import { IGlobalTheme } from '../interfaces/globalTheme';

type GlobalStyleType = { theme: IGlobalTheme };

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
        font-family: ${({ theme }) => theme.fonts.family.primary} 
    }
`;
