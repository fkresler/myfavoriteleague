import { UserSettingsData, UserSettingsAction } from '@/types';

export const userSettingsReducer = (
  state: UserSettingsData,
  action: UserSettingsAction,
): UserSettingsData => {
  switch (action.type) {
    case 'SET_SETTINGS': {
      const { summonerName = '', useDarkTheme = false } = action.payload;
      return {
        summonerName,
        useDarkTheme,
      };
    }
    default:
      return { ...state };
  }
};

export default userSettingsReducer;
