import { AsyncUserData } from './userData';

export type UserSettingsData = {
  useDarkTheme: boolean;
  summonerName: string;
};

export type AsyncUserSettingsData = AsyncUserData<UserSettingsData>;

export type IUserSettings = UserSettingsData & {
  dispatch: (action: UserSettingsAction) => void;
};

export type UserSettingsAction =
  | IFetchUserSettingsAction
  | IPushUserSettingsAction
  | ISetUserSettingsActions;

export type IFetchUserSettingsAction = {
  type: 'FETCH_SETTINGS';
};

export type IPushUserSettingsAction = {
  type: 'PUSH_SETTINGS';
};

export type ISetUserSettingsActions = {
  type: 'SET_SETTINGS';
  payload: {
    useDarkTheme?: boolean;
    summonerName?: string;
  };
};
