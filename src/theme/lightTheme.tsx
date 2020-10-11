import { DefaultTheme } from 'styled-components';
import { TextColor, ThemeColor } from './colors';

export const lightTheme: DefaultTheme = {
  colors: {
    brand: {
      default: ThemeColor.BRAND,
      text: TextColor.TEXT_DARK,
    },
    base: {
      default: ThemeColor.BASE_LIGHT,
      text: TextColor.TEXT_DARK,
    },
    primary: {
      default: ThemeColor.PRIMARY_LIGHT,
      text: TextColor.TEXT_LIGHT,
    },
    highlight: {
      default: ThemeColor.PRIMARY_LIGHT,
      text: TextColor.TEXT_LIGHT,
    },
    disabled: {
      default: ThemeColor.GREY_DARK,
      text: TextColor.TEXT_DARK_TRANSPARENT,
    },
    greyNormal: {
      default: ThemeColor.GREY,
      text: TextColor.TEXT_DARK,
    },
    greyLight: {
      default: ThemeColor.GREY_LIGHT,
      text: TextColor.TEXT_DARK,
    },
    greyDark: {
      default: ThemeColor.GREY_DARK,
      text: TextColor.TEXT_LIGHT,
    },
    success: {
      default: ThemeColor.SUCCESS,
      text: TextColor.TEXT_LIGHT,
    },
    error: {
      default: ThemeColor.ERROR,
      text: TextColor.TEXT_DARK,
    },
    warning: {
      default: ThemeColor.WARNING,
      text: TextColor.TEXT_DARK,
    },
  },
  borders: {
    default: ThemeColor.GREY,
    highlight: ThemeColor.GREY_DARK,
    active: ThemeColor.BRAND,
    success: ThemeColor.SUCCESS,
    error: ThemeColor.ERROR,
    warning: ThemeColor.WARNING,
  },
  shadows: {
    default: `0 0 4px ${ThemeColor.GREY}`,
    brand: `0 0 4px ${ThemeColor.BRAND}`,
    success: `0 0 4px ${ThemeColor.SUCCESS}`,
    error: `0 0 4px ${ThemeColor.ERROR}`,
    warning: `0 0 4px ${ThemeColor.WARNING}`,
  },
  fontSizes: {
    headlineSmall: '1rem',
    headlineMedium: '1.25rem',
    headlineLarge: '1.5rem',
    textSmall: '0.75rem',
    textMedium: '0.875rem',
    textLarge: '1rem',
  },
  margins: {
    marginSmall: '0.75rem',
    marginMedium: '1rem',
    marginLarge: '1.25rem',
  },
  paddings: {
    paddingSmall: '0.25rem',
    paddingMedium: '0.5rem',
    paddingLarge: '1rem',
  },
};

export default lightTheme;
