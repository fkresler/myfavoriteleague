import 'styled-components';
import { ThemeColor, TextColor } from './colors';

declare module 'styled-components' {
  export interface ColorGroup {
    default: ThemeColor;
    text: TextColor;
  }
  export interface DefaultTheme {
    colors: {
      brand: ColorGroup;
      base: ColorGroup;
      primary: ColorGroup;
      highlight: ColorGroup;
      disabled: ColorGroup;
      greyNormal: ColorGroup;
      greyLight: ColorGroup;
      greyDark: ColorGroup;
      success: ColorGroup;
      error: ColorGroup;
      warning: ColorGroup;
    };
    borders: {
      default: string;
      highlight: string;
      active: string;
      success: string;
      error: string;
      warning: string;
    };
    shadows: {
      default: string;
      brand: string;
      success: string;
      error: string;
      warning: string;
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
