import { ThemeColor, DarkToneColors } from './colors';

export const getTextColorByBackground = (backgroundColor: ThemeColor): ThemeColor => {
  const isDarkToneBackground = DarkToneColors.find(
    (singleColor) => singleColor === backgroundColor,
  );
  if (isDarkToneBackground) {
    return ThemeColor.TEXT_LIGHT;
  }
  return ThemeColor.TEXT_DARK;
};

export default getTextColorByBackground;
