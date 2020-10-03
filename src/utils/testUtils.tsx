import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/theme';
import { StaticLeagueProvider, IStaticLeagueProvider } from '@/providers/StaticLeagueProvider';

export const renderWithTheme = (children: React.ReactNode) => render(<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>);

export const renderWithStaticData = (children: React.ReactNode, data: IStaticLeagueProvider) => renderWithTheme(<StaticLeagueProvider mockData={data}>{children}</StaticLeagueProvider>);

export default renderWithTheme;
