import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';

const useAuthentication = () => {
  const Firebase = useContext(FirebaseContext);
  
  const [authUser, setAuthUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unlisten = Firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return unlisten;
  });

  return authUser;
};

export default useAuthentication;