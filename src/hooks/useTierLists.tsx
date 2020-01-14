import * as React from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { TierList } from '@/types/tierLists';

const useTierLists = (userId: string) => {
  const Firebase = React.useContext(FirebaseContext);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [tierlists, setTierLists] = React.useState<TierList[]>([]);

  const setTierList = (authorId: string, name: string, order: number) => {
    return Firebase.firestore.collection('tierlists').add({
      authorId,
      name,
      order,
    });
  };

  const updateTierList = (tierListId: string, name: string, order: number) => {
    return Firebase.firestore
      .collection('tierlists')
      .doc(tierListId)
      .update({
        name,
        order,
      });
  };

  const deleteTierList = (tierListId: string) => {
    return Firebase.firestore
      .collection('tierlists')
      .doc(tierListId)
      .delete();
  };

  React.useEffect(() => {
    const unsubscribe = Firebase.firestore
      .collection('tierlists')
      .where('authorId', '==', userId)
      .onSnapshot(
        (snapshot) => {
          const allTierlists: TierList[] = [];
          snapshot.forEach((doc) => {
            const data = doc.data() as TierList;
            console.log('Test', data);
            allTierlists.push(data);
          });
          setLoading(false);
          setTierLists(allTierlists);
        },
        (err) => setError(err),
      );

    return () => unsubscribe();
  }, []);

  return {
    methods: {
      setTierList,
      updateTierList,
      deleteTierList,
    },
    loading,
    error,
    tierlists,
  };
};

export default useTierLists;
