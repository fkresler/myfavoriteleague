import React from 'react';
import { User } from 'firebase';
import Firebase from './firebase';

export type IFirebaseContext = {
  Firebase: Firebase;
  authUser?: User;
};

const FirebaseApp = new Firebase();

export const FirebaseContext = React.createContext<IFirebaseContext>({
  Firebase: FirebaseApp,
  authUser: undefined,
});

export const FirebaseProvider: React.FunctionComponent = ({ children }) => {
  const [authUser, setAuthUser] = React.useState<User | undefined>(undefined);

  React.useEffect(() => {
    const unlisten = FirebaseApp.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(undefined);
      }
    });
    return () => unlisten();
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        Firebase: FirebaseApp,
        authUser,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
