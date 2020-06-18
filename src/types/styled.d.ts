import 'styled-components';
import { ThemeColor } from './colors';

declare module 'styled-components' {
  export interface MyFavoriteLeagueTheme {
    colors: {
      brand: {
        main: string;
        dark: string;
        light: string;
      };
      background: {
        main: string;
        secondary: string;
        highlight: string;
        disabled: string;
      };
      text: {
        light: string;
        dark: string;
        getTextColorByBackground: (color: ThemeColor) => ThemeColor;
      };
      action: {
        main: string;
        active: string;
        hover: string;
        disabled: string;
      };
      border: {
        main: string;
        divider: string;
        disabled: string;
      };
      success: {
        main: string;
      };
      error: {
        main: string;
      };
      warning: {
        main: string;
      };
    };
    shadows: {
      brand: string;
      success: string;
      error: string;
      warning: string;
      main: string;
    };
    borderRadius: {
      main: string;
    };
    fontSizes: {
      headlineSmall: string;
      headlineMedium: string;
      headlineLarge: string;
      textSmall: string;
      textMedium: string;
      textLarge: string;
    };
    margins: {
      marginSmall: string;
      marginMedium: string;
      marginLarge: string;
    };
    paddings: {
      paddingSmall: string;
      paddingMedium: string;
      paddingLarge: string;
    };
  }
}
