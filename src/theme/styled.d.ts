import 'styled-components';
import { ThemeColor } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brand: {
        main: ThemeColor;
        dark: ThemeColor;
        light: ThemeColor;
      };
      background: {
        main: ThemeColor;
        secondary: ThemeColor;
        highlight: ThemeColor;
        disabled: ThemeColor;
      };
      text: {
        light: ThemeColor;
        dark: ThemeColor;
        getTextColorByBackground: (color: ThemeColor) => ThemeColor;
      };
      action: {
        main: ThemeColor;
        active: ThemeColor;
        hover: ThemeColor;
        disabled: ThemeColor;
      };
      border: {
        main: ThemeColor;
        divider: ThemeColor;
        disabled: ThemeColor;
      };
      success: {
        main: ThemeColor;
      };
      error: {
        main: ThemeColor;
      };
      warning: {
        main: ThemeColor;
      };
    };
    shadows: {
      brand: ThemeColor;
      success: ThemeColor;
      error: ThemeColor;
      warning: ThemeColor;
      main: ThemeColor;
    };
    borderRadius: {
      main: ThemeColor;
    };
    fontSizes: {
      headlineSmall: ThemeColor;
      headlineMedium: ThemeColor;
      headlineLarge: ThemeColor;
      textSmall: ThemeColor;
      textMedium: ThemeColor;
      textLarge: ThemeColor;
    };
    margins: {
      marginSmall: ThemeColor;
      marginMedium: ThemeColor;
      marginLarge: ThemeColor;
    };
    paddings: {
      paddingSmall: ThemeColor;
      paddingMedium: ThemeColor;
      paddingLarge: ThemeColor;
    };
  }
}
