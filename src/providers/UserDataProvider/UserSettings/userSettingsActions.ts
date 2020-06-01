import { UserSettingsAction, UserSettingsData } from '@/types';

export const fetchUserSettings = (): UserSettingsAction => {
  return {
    type: 'FETCH_SETTINGS',
  };
};

export const pushUserSettings = (): UserSettingsAction => {
  return {
    type: 'PUSH_SETTINGS',
  };
};

export const setUserSettings = (userSettings: UserSettingsData): UserSettingsAction => {
  return {
    type: 'SET_SETTINGS',
    payload: {
      useDarkTheme: userSettings.useDarkTheme,
      summonerName: userSettings.summonerName,
    },
  };
};
