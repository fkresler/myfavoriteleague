import React from 'react';
import Firebase from './firebase';

export const FirebaseContext = React.createContext<Firebase | null>(null);

export const FirebaseProvider: React.FunctionComponent = ({ children }) => {
  return <FirebaseContext.Provider value={new Firebase()}>{children}</FirebaseContext.Provider>;
};

export default FirebaseProvider;
