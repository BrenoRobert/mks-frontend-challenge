import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      black: string,
      white: string,
      lightGray: string,
      darkGray: string
    },

    font: {
      size: {
        xxs: number,
        xs: number,
        sm: number,
        md: number,
        lg: number
        default: number,
      };
      weight: {
        light: number,
        regular: number,
        semibold: number,
        bold: number,
      };
      family: string
    },

    borderRadius: number
  }
}