import { MyFavoriteLeagueTheme } from 'styled-components';

export enum lightThemeVals {
  mainLighter = '#6CBD10',
  mainLight = '#348B06',
  mainNormal = '#2B6832',
  mainDark = '#183C37',
  mainDarker = '#0D1C33',
}

export const lightTheme: MyFavoriteLeagueTheme = {
  colors: {
    mainColorLighter: lightThemeVals.mainLighter,
    mainColorLight: lightThemeVals.mainLight,
    mainColorNormal: lightThemeVals.mainNormal,
    mainColorDark: lightThemeVals.mainDark,
    mainColorDarker: lightThemeVals.mainDarker,
    lightBackgroundColor: lightThemeVals.mainLight,
    darkBackgroundColor: lightThemeVals.mainDark,
    colorPositive: '#13CE66',
    colorNegative: '#FF4949',
    colorWarning: '#FFC82C',
    fontColorLight: '#F9FAFC',
    fontColorDark: '#1F2D3D',
  },
};

export enum darkThemeVals {
  mainLighter = '#6CBD10',
  mainLight = '#348B06',
  mainNormal = '#2B6832',
  mainDark = '#183C37',
  mainDarker = '#0D1C33',
}

export const darkTheme: MyFavoriteLeagueTheme = {
  colors: {
    mainColorLighter: darkThemeVals.mainLighter,
    mainColorLight: darkThemeVals.mainLight,
    mainColorNormal: darkThemeVals.mainNormal,
    mainColorDark: darkThemeVals.mainDark,
    mainColorDarker: darkThemeVals.mainDarker,
    lightBackgroundColor: darkThemeVals.mainLight,
    darkBackgroundColor: darkThemeVals.mainDark,
    colorPositive: '#13CE66',
    colorNegative: '#FF4949',
    colorWarning: '#FFC82C',
    fontColorLight: '#F8F8FF',
    fontColorDark: '#1F2D3D',
  },
};

export default lightTheme;
