import React from 'react';
import Firebase from './firebase';

const FirebaseApp = new Firebase();

export const FirebaseContext = React.createContext<Firebase>(FirebaseApp);

export const FirebaseProvider: React.FunctionComponent = ({ children }) => {
  return <FirebaseContext.Provider value={FirebaseApp}>{children}</FirebaseContext.Provider>;
};

export default FirebaseProvider;
