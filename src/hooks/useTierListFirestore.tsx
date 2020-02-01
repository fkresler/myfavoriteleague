import React from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { ITierListData } from '@/types/tierLists';

const useTierListFirestore = (userId?: string) => {
  const Firebase = React.useContext(FirebaseContext);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [tierListData, setTierListData] = React.useState<ITierListData[]>([]);

  const createTierList = () => {};
  const updateTierList = () => {};
  const deleteTierList = () => {};

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
            userTierLists.push(data);
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
