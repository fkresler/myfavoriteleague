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
  const [hasClientDataChanged, setHasClientDataChanged] = React.useState<boolean>(false);
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
          if (hasClientDataChanged) {
            try {
              setIsLoading(true);
              const tierListsRef = Firebase.Firebase.firestore
                .collection('users')
                .doc(userId)
                .collection('tierlists');
              if (toBeDeletedLists.length > 0) {
                const deletionQuery = await tierListsRef
                  .where('tierListId', 'in', toBeDeletedLists)
                  .get();
                const deletionBatch = Firebase.Firebase.firestore.batch();
                await deletionQuery.forEach(async (doc) => {
                  await deletionBatch.delete(doc.ref);
                });
                await deletionBatch.commit();
                setToBeDeletedLists([]);
              }
              const toBePushedTierLists = state.map((tierList) => tierList.tierListId);
              const updateQuery = await tierListsRef
                .where('tierListId', 'in', toBePushedTierLists)
                .get();
              const updateBatch = Firebase.Firebase.firestore.batch();
              await updateQuery.forEach(async (doc) => {
                const newDocData = state.find((tierList) => tierList.tierListId === doc.id);
                if (newDocData) {
                  await updateBatch.set(doc.ref, newDocData);
                }
              });
              await updateBatch.commit();
              setHasClientDataChanged(false);
              setIsLoading(false);
            } catch {
              setIsError(true);
              setIsLoading(false);
            }
          }
          break;
        }
        case 'DELETE_TIERLIST': {
          const { tierListId } = action.payload;
          setToBeDeletedLists([...toBeDeletedLists, tierListId]);
          dispatch(action);
          setHasClientDataChanged(true);
          break;
        }
        default: {
          dispatch(action);
          setHasClientDataChanged(true);
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
