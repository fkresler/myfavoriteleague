import { UserSettingsAction, UserSettingsData } from '@/types';

export const fetchUserSettings = (): UserSettingsAction => ({
  type: 'FETCH_SETTINGS',
});

export const pushUserSettings = (): UserSettingsAction => ({
  type: 'PUSH_SETTINGS',
});

export const setUserSettings = (userSettings: UserSettingsData): UserSettingsAction => ({
  type: 'SET_SETTINGS',
  payload: {
    useDarkTheme: userSettings.useDarkTheme,
    summonerName: userSettings.summonerName,
  },
});

export const toggleDarkTheme = (): UserSettingsAction => ({
  type: 'TOGGLE_THEME',
});
