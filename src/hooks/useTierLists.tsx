import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { TierList } from '@/types/tierLists';

const useTierLists = (userId: number) => {
  const Firebase = useContext(FirebaseContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [tierlists, setTierLists] = useState<TierList[]>([]);

  useEffect(() => {
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

  return { loading, error, tierlists };
};

export default useTierLists;
