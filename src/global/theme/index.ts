// my-theme.ts
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#0F52BA',
    black: '#000',
    white: '#FFF',
    lightGray: '#EEEEEE',
    darkGray: '#373737'
  },

  font: {
    size: {
      xxs: 10,
      xs: 12,
      sm: 14,
      md: 20,
      lg: 40,
      default: 16,
    },

    weight: {
      light: 300,
      regular: 400,
      semibold: 600,
      bold: 700,
    },

    family: 'Montserrat',
  },

  borderRadius: 8
};


export { theme };