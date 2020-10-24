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
    disable: true,
  },
};

const withThemeProvider = (Story, context) => {
  const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;
  const styles = {
    display: 'block',
    padding: '3rem',
    backgroundColor: theme.colors.base.default,
    color: theme.colors.base.text,
  };
  return (
    <div style={styles}>
      <ThemeProvider theme={theme}>
        <Story {...context} />
      </ThemeProvider>
    </div>
  );
};

export const decorators = [withThemeProvider];
