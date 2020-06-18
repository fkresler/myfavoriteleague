import { MyFavoriteLeagueTheme } from 'styled-components';
import { ThemeColor } from '@/types';
import { getTextColorByBackground } from './colors';

export const lightTheme: MyFavoriteLeagueTheme = {
  colors: {
    brand: {
      main: ThemeColor.BRAND,
      dark: `darken(${ThemeColor.BRAND}, 50%)`,
      light: `lighten(${ThemeColor.BRAND}, 50%)`,
    },
    background: {
      main: ThemeColor.LIGHT,
      secondary: ThemeColor.LIGHT_SECONDARY,
      highlight: `darken(${ThemeColor.LIGHT_SECONDARY}, 25%)`,
      disabled: ThemeColor.GREY,
    },
    text: {
      light: ThemeColor.TEXT_LIGHT,
      dark: ThemeColor.TEXT_DARK,
      getTextColorByBackground,
    },
    action: {
      main: ThemeColor.LIGHT_SECONDARY,
      active: `darken(${ThemeColor.LIGHT_SECONDARY}, 25%)`,
      hover: `darken(${ThemeColor.LIGHT_SECONDARY}, 15%)`,
      disabled: ThemeColor.GREY,
    },
    border: {
      main: ThemeColor.GREY2,
      divider: ThemeColor.GREY3,
      disabled: ThemeColor.DISABLED,
    },
    success: {
      main: ThemeColor.SUCCESS,
    },
    error: {
      main: ThemeColor.ERROR,
    },
    warning: {
      main: ThemeColor.WARNING,
    },
  },
  shadows: {
    brand: `0 0 2px ${ThemeColor.BRAND}`,
    success: `0 0 2px ${ThemeColor.SUCCESS}`,
    error: `0 0 2px ${ThemeColor.ERROR}`,
    warning: `0 0 2px ${ThemeColor.WARNING}`,
    main: `0 0 2px 0 ${ThemeColor.DARK}`,
  },
  borderRadius: {
    main: '0.3rem',
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

export const darkTheme: MyFavoriteLeagueTheme = {
  colors: {
    brand: {
      main: ThemeColor.BRAND,
      dark: `lighten(${ThemeColor.BRAND}, 50%)`,
      light: `darken(${ThemeColor.BRAND}, 50%)`,
    },
    background: {
      main: ThemeColor.LIGHT,
      secondary: ThemeColor.DARK_SECONDARY,
      highlight: `lighten(${ThemeColor.DARK_SECONDARY}, 25%)`,
      disabled: ThemeColor.GREY,
    },
    text: {
      light: ThemeColor.TEXT_LIGHT,
      dark: ThemeColor.TEXT_DARK,
      getTextColorByBackground,
    },
    action: {
      main: ThemeColor.DARK_SECONDARY,
      active: `lighten(${ThemeColor.DARK_SECONDARY}, 25%)`,
      hover: `lighten(${ThemeColor.DARK_SECONDARY}, 15%)`,
      disabled: ThemeColor.GREY,
    },
    border: {
      main: ThemeColor.GREY2,
      divider: ThemeColor.GREY3,
      disabled: ThemeColor.DISABLED,
    },
    success: {
      main: ThemeColor.SUCCESS,
    },
    error: {
      main: ThemeColor.ERROR,
    },
    warning: {
      main: ThemeColor.WARNING,
    },
  },
  shadows: {
    brand: `0 0 2px ${ThemeColor.BRAND}`,
    success: `0 0 2px ${ThemeColor.SUCCESS}`,
    error: `0 0 2px ${ThemeColor.ERROR}`,
    warning: `0 0 2px ${ThemeColor.WARNING}`,
    main: `0 0 2px 0 ${ThemeColor.DARK}`,
  },
  borderRadius: {
    main: '0.3rem',
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
