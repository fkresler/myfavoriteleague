import app from 'firebase/app';

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
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}

export default Firebase;
