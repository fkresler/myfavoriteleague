import React from 'react';
import Firebase from './firebase';

const firebaseContext = React.createContext<Firebase | null>(null);

export default firebaseContext;
