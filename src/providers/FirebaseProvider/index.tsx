import React from 'react';
import Firebase, { FirebaseContext } from '@/components/Firebase';

export const FirebaseProvider: React.FunctionComponent = ({ children }) => {
  return <FirebaseContext.Provider value={new Firebase()}>{children}</FirebaseContext.Provider>;
};

export default FirebaseProvider;
