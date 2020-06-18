import 'styled-components';

declare module 'styled-components' {
  export interface MyFavoriteLeagueTheme {
    colors: {
      lightBackgroundColor: string;
      darkBackgroundColor: string;
      colorPositive: string;
      colorNegative: string;
      colorWarning: string;
      fontColorLight: string;
      fontColorDark: string;
      borderColorLight: string;
      borderColorDark: string;
    };
  }
}
