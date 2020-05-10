import React from 'react';
import { AsyncTierListData, AsyncNoteData, TierListAction, NoteAction } from '@/types';
import { useTierListData, initialTierListData } from './TierListData';
import { initialNoteData, noteReducer } from './NoteData';

type UserData = {
  tierlists: {
    state: AsyncTierListData;
    dispatch: (action: TierListAction) => void;
  };
  notes: {
    state: AsyncNoteData;
    dispatch: (action: NoteAction) => void;
  };
};

export const UserDataContext = React.createContext<UserData>({
  tierlists: {
    state: initialTierListData,
    dispatch: () => {},
  },
  notes: {
    state: initialNoteData,
    dispatch: () => {},
  },
});

export const UserDataProvider: React.FC = ({ children }) => {
  const { state: tierListState, dispatch: tierListDispatch } = useTierListData();
  const [noteState, noteDispatch] = React.useReducer(noteReducer, initialNoteData);

  return (
    <UserDataContext.Provider
      value={{
        tierlists: {
          state: tierListState,
          dispatch: tierListDispatch,
        },
        notes: {
          state: noteState,
          dispatch: noteDispatch,
        },
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
