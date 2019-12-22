import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';

export interface IAuthenticationContext {
  currentUser: firebase.User | null;
}

const initialAuthenticationState = {
  currentUser: null,
};

export const AuthenticationContext = React.createContext<IAuthenticationContext>(
  initialAuthenticationState,
);

export const AuthenticationProvider: React.FunctionComponent = ({ children }) => {
  const Firebase = useContext(FirebaseContext);
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  useEffect(() => {
    console.log('Test');
    const authListener = Firebase.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setCurrentUser(authUser);
      } else {
        setCurrentUser(null);
      }
    });
    return authListener();
  });
  return (
    <AuthenticationContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
