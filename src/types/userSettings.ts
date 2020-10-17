import { AsyncUserData } from './userData';

export type UserSettingsData = {
  useDarkTheme?: boolean;
  summonerName?: string;
};

export type AsyncUserSettingsData = AsyncUserData<UserSettingsData>;

export type IUserSettings = UserSettingsData & {
  dispatch: (action: UserSettingsAction) => void;
};

export type UserSettingsAction =
  | IFetchUserSettingsAction
  | IPushUserSettingsAction
  | ISetUserSettingsAction
  | IToggleDarkThemeAction;

export type IFetchUserSettingsAction = {
  type: 'FETCH_SETTINGS';
};

export type IPushUserSettingsAction = {
  type: 'PUSH_SETTINGS';
};

export type ISetUserSettingsAction = {
  type: 'SET_SETTINGS';
  payload: {
    useDarkTheme?: boolean;
    summonerName?: string;
  };
};

export type IToggleDarkThemeAction = {
  type: 'TOGGLE_THEME';
};
