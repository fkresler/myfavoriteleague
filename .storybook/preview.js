import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { lightTheme, darkTheme } from '@/theme';

const themes = [lightTheme, darkTheme];
addDecorator(withThemesProvider(themes));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
