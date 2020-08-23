import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/providers/ThemeProvider/theme';

export const renderWithTheme = (children: React.ReactNode) => {
  return render(<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>);
};

export default renderWithTheme;
