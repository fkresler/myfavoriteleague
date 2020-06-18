import { MyFavoriteLeagueTheme } from 'styled-components';
import { ThemeColor } from '@/types';
import { lighten, darken } from 'polished';
import { getTextColorByBackground } from './colors';

export const lightTheme: MyFavoriteLeagueTheme = {
  colors: {
    brand: {
      main: ThemeColor.BRAND,
      dark: darken(0.25, ThemeColor.BRAND),
      light: lighten(0.25, ThemeColor.BRAND),
    },
    background: {
      main: ThemeColor.LIGHT,
      secondary: ThemeColor.LIGHT_SECONDARY,
      highlight: darken(0.15, ThemeColor.LIGHT_SECONDARY),
      disabled: ThemeColor.GREY,
    },
    text: {
      light: ThemeColor.TEXT_LIGHT,
      dark: ThemeColor.TEXT_DARK,
      getTextColorByBackground,
    },
    action: {
      main: ThemeColor.LIGHT_SECONDARY,
      active: darken(0.25, ThemeColor.LIGHT_SECONDARY),
      hover: darken(0.15, ThemeColor.LIGHT_SECONDARY),
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
    brand: `0 0 4px ${lighten(0.25, ThemeColor.BRAND)}`,
    success: `0 0 4px ${lighten(0.25, ThemeColor.SUCCESS)}`,
    error: `0 0 4px ${lighten(0.25, ThemeColor.ERROR)}`,
    warning: `0 0 4px ${lighten(0.25, ThemeColor.WARNING)}`,
    main: `0 0 4px 0 ${lighten(0.25, ThemeColor.DARK)}`,
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
      dark: darken(0.25, ThemeColor.BRAND),
      light: lighten(0.25, ThemeColor.BRAND),
    },
    background: {
      main: ThemeColor.DARK,
      secondary: ThemeColor.DARK_SECONDARY,
      highlight: lighten(0.15, ThemeColor.DARK_SECONDARY),
      disabled: ThemeColor.GREY,
    },
    text: {
      light: ThemeColor.TEXT_LIGHT,
      dark: ThemeColor.TEXT_DARK,
      getTextColorByBackground,
    },
    action: {
      main: ThemeColor.DARK_SECONDARY,
      active: lighten(0.25, ThemeColor.DARK_SECONDARY),
      hover: lighten(0.15, ThemeColor.DARK_SECONDARY),
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
    brand: `0 0 4px ${darken(0.25, ThemeColor.BRAND)}`,
    success: `0 0 4px ${darken(0.25, ThemeColor.SUCCESS)}`,
    error: `0 0 4px ${darken(0.25, ThemeColor.ERROR)}`,
    warning: `0 0 4px ${darken(0.25, ThemeColor.WARNING)}`,
    main: `0 0 4px 0 ${darken(0.25, ThemeColor.LIGHT)}`,
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
