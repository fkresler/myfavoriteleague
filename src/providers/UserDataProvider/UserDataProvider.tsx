import React from 'react';
import {
  AsyncTierListData,
  AsyncNoteData,
  AsyncUserSettingsData,
  TierListAction,
  NoteAction,
  UserSettingsAction,
} from '@/types';
import { useTierListData, initialAsyncTierListData } from './TierListData';
import { useNoteData, initialNoteData } from './NoteData';
import { useUserSettingsData, initialAsyncUserSettingsData } from './UserSettings';

export interface UserData {
  tierlists: {
    state: AsyncTierListData;
    dispatch: (action: TierListAction) => void;
  };
  notes: {
    state: AsyncNoteData;
    dispatch: (action: NoteAction) => void;
  };
  usersettings: {
    state: AsyncUserSettingsData;
    dispatch: (action: UserSettingsAction) => void;
  };
}

export const UserDataContext = React.createContext<UserData>({
  tierlists: {
    state: initialAsyncTierListData,
    dispatch: () => {},
  },
  notes: {
    state: initialNoteData,
    dispatch: () => {},
  },
  usersettings: {
    state: initialAsyncUserSettingsData,
    dispatch: () => {},
  },
});

export const UserDataProvider: React.FC<Partial<UserData>> = ({
  tierlists,
  notes,
  usersettings,
  children,
}) => {
  const { state: tierListState, dispatch: tierListDispatch } = useTierListData();
  const { state: noteState, dispatch: noteDispatch } = useNoteData();
  const { state: userSettingsState, dispatch: userSettingsDispatch } = useUserSettingsData();

  return (
    <UserDataContext.Provider
      value={{
        tierlists: tierlists || {
          state: tierListState,
          dispatch: tierListDispatch,
        },
        notes: notes || {
          state: noteState,
          dispatch: noteDispatch,
        },
        usersettings: usersettings || {
          state: userSettingsState,
          dispatch: userSettingsDispatch,
        },
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
