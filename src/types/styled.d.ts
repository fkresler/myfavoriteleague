import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainColorLighter: string;
      mainColorLight: string;
      mainColorNormal: string;
      mainColorDark: string;
      mainColorDarker: string;
      productColor: string;
      colorPositive: string;
      colorNegative: string;
      colorWarning: string;
      fontColorLight: string;
      fontColorDark: string;
    };
  }
}
