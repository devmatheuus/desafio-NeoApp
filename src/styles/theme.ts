import { IGlobalTheme } from '../types/IGlobalTheme';

export const theme: IGlobalTheme = {
  colors: {
    black: '#212427',
    red: ' #ED1D24',
    white: '#FFFFFF',
  },
  fonts: {
    family: {
      primary: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xSmall: '.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xLarge: '4.0rem',
      xxLarge: '4.8rem',
      huge: '5.6rem',
      xHuge: '6.4rem',
    },
  },
  media: {
    small: '(min-width: 320px) and (max-width: 480px)',
    medium: '(min-width: 769px) and (max-width: 1024px)',
    lteMedium: '(min-width: 481px) and (max-width: 768px)',
    lteLarge: '(min-width: 1025px) and (max-width: 1440px)',
    large: '(min-width: 1441px)',
  },
} as const;
