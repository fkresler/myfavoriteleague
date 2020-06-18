import { ThemeColor } from '@/types';

export const darkToneColors: ThemeColor[] = [
  ThemeColor.LIGHT_SECONDARY,
  ThemeColor.DARK,
  ThemeColor.DARK_SECONDARY,
];

export const getTextColorByBackground = (backgroundColor: ThemeColor): ThemeColor => {
  const isDarkToneBackground = darkToneColors.find(
    (singleColor) => singleColor === backgroundColor,
  );
  if (isDarkToneBackground) {
    return ThemeColor.TEXT_LIGHT;
  }
  return ThemeColor.TEXT_DARK;
};

export default getTextColorByBackground;
