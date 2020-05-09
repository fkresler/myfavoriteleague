import React from 'react';
import Firebase from './firebase';

export type IFirebaseContext = {
  Firebase: Firebase;
  authUser: firebase.User | null;
};

const FirebaseApp = new Firebase();

export const FirebaseContext = React.createContext<IFirebaseContext>({
  Firebase: FirebaseApp,
  authUser: null,
});

export const FirebaseProvider: React.FunctionComponent = ({ children }) => {
  const [authUser, setAuthUser] = React.useState<firebase.User | null>(null);

  React.useEffect(() => {
    const unlisten = FirebaseApp.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
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
