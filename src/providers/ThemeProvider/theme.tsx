import { MyFavoriteLeagueTheme } from 'styled-components';

export const lightTheme: MyFavoriteLeagueTheme = {
  colors: {
    brand: {
      main: '#01b6f5',
      dark: '',
      light: '',
    },
    background: {
      main: '#FFFFFF',
      secondary: '#00A7E1',
      highlight: '',
      disabled: '#F6F7F9',
    },
    text: {
      main: '#050C24',
      disabled: '#D7D9E2',
    },
    action: {
      main: '#01b6f5',
      active: '#F6F7F9',
      hover: '#F6F7F9',
      disabled: '#F6F7F9',
    },
    border: {
      main: '#A4A7B5',
      divider: '#D7D9E2',
      disabled: 'rgba(82, 95, 127, 0.15)',
    },
    success: {
      main: '#13CE66',
    },
    error: {
      main: '#FF4949',
    },
    warning: {
      main: '#FFC82C',
    },
  },
  shadows: {
    brand: '0 0 2px #01b6f5',
    success: '0 0 2px #13CE66',
    error: '0 0 2px #FF4949',
    warning: '0 0 2px #FFC82C',
    main: '0 0 2px 0 #A4A7B5',
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
      main: '#01b6f5',
      dark: '',
      light: '',
    },
    background: {
      main: '093A3E',
      secondary: '#001011',
      highlight: '',
      disabled: '#F6F7F9',
    },
    text: {
      main: '#F0F4FA',
      disabled: '#D7D9E2',
    },
    action: {
      main: '#01b6f5',
      active: '#F6F7F9',
      hover: '#F6F7F9',
      disabled: '#F6F7F9',
    },
    border: {
      main: '#A4A7B5',
      divider: '#D7D9E2',
      disabled: 'rgba(82, 95, 127, 0.15)',
    },
    success: {
      main: '#13CE66',
    },
    error: {
      main: '#FF4949',
    },
    warning: {
      main: '#FFC82C',
    },
  },
  shadows: {
    brand: '0 0 2px #01b6f5',
    success: '0 0 2px #13CE66',
    error: '0 0 2px #FF4949',
    warning: '0 0 2px #FFC82C',
    main: '0 0 2px 0 #A4A7B5',
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
