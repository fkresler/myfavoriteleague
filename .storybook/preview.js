import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/theme';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
};

export const parameters = {
  backgrounds: {
    disabled: true
  }
};

const withThemeProvider=(Story, context)=>{
  const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [
  (Story) => <div style={{ margin: '3em' }}><Story/></div>,
  withThemeProvider
];
