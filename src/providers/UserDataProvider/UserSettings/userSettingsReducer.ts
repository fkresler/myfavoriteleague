import { UserSettingsData, UserSettingsAction } from '@/types';

export const userSettingsReducer = (
  state: UserSettingsData,
  action: UserSettingsAction,
): UserSettingsData => {
  switch (action.type) {
    case 'SET_SETTINGS': {
      const { summonerName, useDarkTheme } = action.payload;
      return {
        ...state,
        summonerName,
        useDarkTheme,
      };
    }
    case 'TOGGLE_THEME': {
      return {
        ...state,
        useDarkTheme: !state.useDarkTheme,
      };
    }
    default:
      return { ...state };
  }
};

export default userSettingsReducer;
