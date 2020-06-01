import 'styled-components';

declare module 'styled-components' {
  export interface MyFavoriteLeagueTheme {
    colors: {
      mainColorLighter: string;
      mainColorLight: string;
      mainColorNormal: string;
      mainColorDark: string;
      mainColorDarker: string;
      defaultBackgroundColor: string;
      colorPositive: string;
      colorNegative: string;
      colorWarning: string;
      fontColorLight: string;
      fontColorDark: string;
    };
  }
}
