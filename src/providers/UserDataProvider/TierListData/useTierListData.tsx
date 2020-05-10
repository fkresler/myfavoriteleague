import React from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { TierListAction, TierListData, AsyncTierListData } from '@/types';
import * as tierListActions from './tierListActions';
import tierListReducer from './tierListReducer';

export const initialTierListData: AsyncTierListData = {
  isLoading: true,
  isError: false,
  data: [],
};

export const useTierListData = () => {
  const Firebase = React.useContext(FirebaseContext);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [state, dispatch] = React.useReducer(tierListReducer, []);
  const [toBeDeletedLists, setToBeDeletedLists] = React.useState<string[]>([]);

  const userId = Firebase.authUser ? Firebase.authUser.uid : null;

  const enhancedDispatch = async (action: TierListAction) => {
    setIsError(false);
    if (!userId) {
      setIsError(true);
    } else {
      switch (action.type) {
        case 'FETCH_TIERLISTS': {
          try {
            setIsLoading(true);
            const fetchedTierListData: TierListData[] = [];
            const snapshotData = await Firebase.Firebase.firestore
              .collection('users')
              .doc(userId)
              .collection('tierlists')
              .get();
            snapshotData.forEach((doc) => {
              const documentData = doc.data() as TierListData;
              fetchedTierListData.push({
                tierListId: doc.id,
                ...documentData,
              });
            });
            dispatch(tierListActions.setTierLists(fetchedTierListData));
            setIsLoading(false);
          } catch {
            setIsError(true);
            setIsLoading(false);
          }
          break;
        }
        case 'PUSH_TIERLISTS': {
          try {
            setIsLoading(true);
            await toBeDeletedLists.forEach(async (tierListId) => {
              await Firebase.Firebase.firestore
                .collection('users')
                .doc(userId)
                .collection('tierlists')
                .doc(tierListId)
                .delete();
            });
            await state.forEach(async (tierList) => {
              await Firebase.Firebase.firestore
                .collection('users')
                .doc(userId)
                .collection('tierlists')
                .doc(tierList.tierListId)
                .set(tierList);
            });
            setIsLoading(false);
          } catch {
            setIsError(true);
            setIsLoading(false);
          }
          break;
        }
        case 'DELETE_TIERLIST': {
          const { tierListId } = action.payload;
          setToBeDeletedLists([...toBeDeletedLists, tierListId]);
          dispatch(action);
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
      isLoading,
      isError,
      data: state,
    },
    dispatch: enhancedDispatch,
  };
};
