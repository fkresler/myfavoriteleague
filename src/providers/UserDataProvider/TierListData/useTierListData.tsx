import React from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { TierListAction, TierListData, AsyncTierListData } from '@/types';
import * as tierListActions from './tierListActions';
import tierListReducer from './tierListReducer';

export const initialTierListData: AsyncTierListData = {
  hasLoaded: false,
  isLoading: true,
  isError: false,
  data: [],
};

export const useTierListData = () => {
  const Firebase = React.useContext(FirebaseContext);
  const [hasLoaded, setHasLoaded] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [state, dispatch] = React.useReducer(tierListReducer, []);

  const userId = Firebase.authUser ? Firebase.authUser.uid : null;

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
            dispatch(tierListActions.setTierLists(tierListData.data || []));
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
