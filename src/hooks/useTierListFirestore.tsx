import React from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { ITierListData, IChampionListData } from '@/types/tierLists';

const useTierListFirestore = (userId: string = '') => {
  const { Firebase } = React.useContext(FirebaseContext);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [tierListData, setTierListData] = React.useState<ITierListData[]>([]);

  const receiveTierList = async () => {
    setIsLoading(true);
    const tierListRef = Firebase.firestore.collection('tierlists');
    return tierListRef
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
        console.log('Receiving data was successful for data: ', userTierLists);
        setTierListData(userTierLists);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        console.log('Receiving data failed with error: ', error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  const createTierList = async (name: string, order: number = 0) => {
    const tierListRef = Firebase.firestore.collection('tierlists');
    return tierListRef
      .add({
        authorId: userId,
        name,
        order,
        lists: [],
      })
      .then((response) => {
        console.log('Adding was successful for id: ', response.id);
        receiveTierList();
      })
      .catch((error) => {
        console.log('Adding failed with error: ', error);
      });
  };

  const updateTierList = async (
    tierListId: string,
    name: string,
    order: number,
    lists: IChampionListData[],
  ) => {
    const tierListRef = Firebase.firestore.collection('tierlists');
    return tierListRef
      .doc(tierListId)
      .update({
        name,
        order,
        lists,
      })
      .then(() => {
        console.log('Updating was successful');
        receiveTierList();
      })
      .catch((error) => {
        console.log('Updating failed with error: ', error);
      });
  };

  const deleteTierList = async (tierListId: string) => {
    const tierListRef = Firebase.firestore.collection('tierlists');
    return tierListRef
      .doc(tierListId)
      .delete()
      .then(() => {
        console.log('Deleting was successful');
        receiveTierList();
      })
      .catch((error) => {
        console.log('Deleting failed with error: ', error);
      });
  };

  React.useEffect(() => {
    receiveTierList();
  }, [userId]);

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
