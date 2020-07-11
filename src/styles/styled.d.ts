import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      title: string;

      background: string;

      backgroundColor: string;
      backgroundImage: string;

      backgroundCard: string;
      backgroundCardTotal: string;
      cardText: string;
    };
  }
}
