import React from 'react';
import app from 'firebase/compat/app';
import Firebase from './firebase';

export type IFirebaseContext = {
  Firebase: Firebase;
  authUser?: app.User;
};

const FirebaseApp = new Firebase();

export const FirebaseContext = React.createContext<IFirebaseContext>({
  Firebase: FirebaseApp,
  authUser: undefined,
});

export const FirebaseProvider: React.FC<Partial<IFirebaseContext>> = ({
  children,
  Firebase: fireApp,
  authUser,
}) => {
  const [currentAuthUser, setAuthUser] = React.useState<app.User | undefined>(undefined);

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
        Firebase: fireApp || FirebaseApp,
        authUser: authUser || currentAuthUser,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
