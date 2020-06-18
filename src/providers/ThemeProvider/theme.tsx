import { MyFavoriteLeagueTheme } from 'styled-components';

export const lightTheme: MyFavoriteLeagueTheme = {
  colors: {
    lightBackgroundColor: '#FFFFFF',
    darkBackgroundColor: '#00A7E1',
    colorPositive: '#13CE66',
    colorNegative: '#FF4949',
    colorWarning: '#FFC82C',
    fontColorLight: '#F0F4FA',
    fontColorDark: '#050C24',
    borderColorLight: '#F0F4FA',
    borderColorDark: '#050C24',
  },
};

export const darkTheme: MyFavoriteLeagueTheme = {
  colors: {
    lightBackgroundColor: '#093A3E',
    darkBackgroundColor: '#001011',
    colorPositive: '#13CE66',
    colorNegative: '#FF4949',
    colorWarning: '#FFC82C',
    fontColorLight: '#F0F4FA',
    fontColorDark: '#F0F4FA',
    borderColorLight: '#F0F4FA',
    borderColorDark: '#F0F4FA',
  },
};

export default lightTheme;
