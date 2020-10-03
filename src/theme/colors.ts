export enum ThemeColor {
  TEXT_LIGHT = '#F0F4FA',
  TEXT_DARK = '#001011',
  BRAND = '#EE6352',
  LIGHT = '#FFFFFF',
  LIGHT_SECONDARY = '#00A7E1',
  DARK = '#093A3E',
  DARK_SECONDARY = '#092234',
  GREY = '#F6F7F9',
  GREY2 = '#A4A7B5',
  GREY3 = '#D7D9E2',
  DISABLED = 'rgba(82, 95, 127, 0.15)',
  SUCCESS = '#13CE66',
  ERROR = '#FF4949',
  WARNING = '#FFC82C'
}

export const DarkToneColors: ThemeColor[] = [
  ThemeColor.LIGHT_SECONDARY,
  ThemeColor.DARK,
  ThemeColor.DARK_SECONDARY,
  ThemeColor.DISABLED,
  ThemeColor.SUCCESS,
];

export default ThemeColor;
