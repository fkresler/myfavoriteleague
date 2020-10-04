import React from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { TierListAction, TierListData } from '@/types';
import * as tierListActions from './tierListActions';
import { tierListReducer } from './tierListReducer';
import { createDefaultTierListData } from './initialTierListData';

export const useTierListData = () => {
  const Firebase = React.useContext(FirebaseContext);
  const userId = Firebase.authUser ? Firebase.authUser.uid : null;
  const [hasLoaded, setHasLoaded] = React.useState<boolean>(false);
  const [hasChanged, setHasChanged] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [state, dispatch] = React.useReducer(tierListReducer, []);

  React.useEffect(() => {
    setHasLoaded(false);
  }, [Firebase.authUser]);

  const enhancedDispatch = async (action: TierListAction) => {
    setIsError(false);
    if (!userId) {
      setIsError(true);
    } else {
      switch (action.type) {
        case 'FETCH_TIERLISTS': {
          try {
            setIsLoading(true);
            const snapshotData = await Firebase.Firebase.firestore
              .collection('tierlists')
              .doc(userId)
              .get();
            const tierListData = (snapshotData.data() || {}) as { data?: TierListData[] };
            if (tierListData.data) {
              dispatch(tierListActions.setTierLists(tierListData.data));
            } else {
              const initialTierListData = userId ? createDefaultTierListData(userId) : [];
              dispatch(tierListActions.setTierLists(initialTierListData));
            }
            setHasLoaded(true);
            setIsLoading(false);
          } catch {
            setIsError(true);
            setIsLoading(false);
          }
          break;
        }
        case 'PUSH_TIERLISTS': {
          try {
            await Firebase.Firebase.firestore.collection('tierlists').doc(userId).set({
              data: state,
            });
            setHasChanged(false);
          } catch (e) {
            setIsError(true);
          }
          break;
        }
        default: {
          dispatch(action);
          setHasChanged(true);
        }
      }
    }
  };

  return {
    state: {
      hasLoaded,
      hasChanged,
      isLoading,
      isError,
      data: state,
    },
    dispatch: enhancedDispatch,
  };
};

export default useTierListData;
