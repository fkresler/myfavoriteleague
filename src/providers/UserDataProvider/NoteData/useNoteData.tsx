import React from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { NoteAction, NoteData, AsyncNoteData } from '@/types';
import * as noteActions from './noteActions';
import { noteReducer } from './noteReducer';

export const initialNoteData: AsyncNoteData = {
  hasLoaded: false,
  isLoading: true,
  isError: false,
  data: [],
};

export const useNoteData = () => {
  const Firebase = React.useContext(FirebaseContext);
  const [hasLoaded, setHasLoaded] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [state, dispatch] = React.useReducer(noteReducer, []);

  const userId = Firebase.authUser ? Firebase.authUser.uid : null;

  React.useEffect(() => {
    setHasLoaded(false);
  }, [Firebase.authUser]);

  const enhancedDispatch = async (action: NoteAction) => {
    setIsError(false);
    if (!userId) {
      setIsError(true);
    } else {
      switch (action.type) {
        case 'FETCH_NOTES': {
          try {
            setIsLoading(true);
            const snapshotData = await Firebase.Firebase.firestore
              .collection('notes')
              .doc(userId)
              .get();
            const noteData = (snapshotData.data() || {}) as { data?: NoteData[] };
            dispatch(noteActions.setNotes(noteData.data || []));
            setHasLoaded(true);
            setIsLoading(false);
          } catch {
            setIsError(true);
            setIsLoading(false);
          }
          break;
        }
        case 'PUSH_NOTES': {
          try {
            await Firebase.Firebase.firestore.collection('notes').doc(userId).set({
              data: state,
            });
          } catch (e) {
            setIsError(true);
          }
          break;
        }
        default: {
          dispatch(action);
        }
      }
    }
  };

  return {
    state: {
      hasLoaded,
      isLoading,
      isError,
      data: state,
    },
    dispatch: enhancedDispatch,
  };
};
