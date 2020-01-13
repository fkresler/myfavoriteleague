import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDCZIBNKDa2q8Z2TVUYqzA29RNLtiJewCI',
  authDomain: 'myfavoriteleague.firebaseapp.com',
  databaseURL: 'https://myfavoriteleague.firebaseio.com',
  projectId: 'myfavoriteleague',
  storageBucket: 'myfavoriteleague.appspot.com',
  messagingSenderId: '845394058507',
  appId: '1:845394058507:web:67e13074a22e07522d160e',
};

class Firebase {
  auth: app.auth.Auth;

  firestore: app.firestore.Firestore;

  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.firestore = app.firestore();
  }

  doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    app.auth().createUserWithEmailAndPassword(email, password);

  doSigninWithEmailAndPassword = (email: string, password: string) =>
    app.auth().signInWithEmailAndPassword(email, password);

  doSignOut = () => app.auth().signOut();

  doPasswordReset = (email: string) => app.auth().sendPasswordResetEmail(email);

  doPasswordUpdate = (password: string) => {
    const { currentUser } = app.auth();
    if (currentUser) {
      return currentUser.updatePassword(password);
    }
    return Promise.reject(new Error('Currently no user logged in!'));
  };
}

export default Firebase;
