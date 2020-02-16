import React from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';

const useAuthentication = (): firebase.User | null => {
  const Firebase = React.useContext(FirebaseContext);
  const [authUser, setAuthUser] = React.useState<firebase.User | null>(null);

  React.useEffect(() => {
    const unlisten = Firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => unlisten();
  });

  return authUser;
};

export default useAuthentication;
