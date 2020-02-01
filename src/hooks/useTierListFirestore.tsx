import React from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { ITierListData, IChampionListData } from '@/types/tierLists';

const useTierListFirestore = (userId?: string) => {
  const Firebase = React.useContext(FirebaseContext);
  const [changeCounter, setChangeCounter] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [tierListData, setTierListData] = React.useState<ITierListData[]>([]);

  const createTierList = (name: string, order: number = 1) => {
    const tierListRef = Firebase.firestore.collection('tierlists');
    tierListRef
      .add({
        authorId: userId,
        name,
        order,
      })
      .then((response) => {
        console.log('AddResponse: ', response);
        setChangeCounter(changeCounter + 1);
      })
      .catch((error) => {
        console.log('AddError: ', error);
      });
  };

  const updateTierList = (
    tierListId: string,
    name: string,
    order: number,
    lists: IChampionListData[],
  ) => {
    const tierListRef = Firebase.firestore.collection('tierlists');
    tierListRef
      .doc(tierListId)
      .update({
        name,
        order,
        lists,
      })
      .then((response) => {
        console.log('UpdateResponse: ', response);
        setChangeCounter(changeCounter + 1);
      })
      .catch((error) => {
        console.log('UpdateError: ', error);
      });
  };

  const deleteTierList = (tierListId: string) => {
    const tierListRef = Firebase.firestore.collection('tierlists');
    tierListRef
      .doc(tierListId)
      .delete()
      .then((response) => {
        console.log('DeleteResponse: ', response);
        setChangeCounter(changeCounter + 1);
      })
      .catch((error) => {
        console.log('DeleteError: ', error);
      });
  };

  React.useEffect(() => {
    if (userId) {
      setIsLoading(true);
      const tierListRef = Firebase.firestore.collection('tierlists');
      tierListRef
        .where('authorId', '==', userId)
        .get()
        .then((snapshot) => {
          const userTierLists: ITierListData[] = [];
          snapshot.forEach((doc) => {
            const data = doc.data() as ITierListData;
            userTierLists.push({
              tierListId: doc.id,
              ...data,
            });
          });
          console.log('Data', userTierLists);
          setTierListData(userTierLists);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((error) => {
          console.log('Error during fetching tierlists: ', error);
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [userId, changeCounter]);

  return {
    tierListData,
    isLoading,
    isError,
    methods: {
      createTierList,
      updateTierList,
      deleteTierList,
    },
  };
};

export default useTierListFirestore;
