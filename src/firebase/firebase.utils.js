import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCHlAOc9Kh9OmFefuitx4R38NO9USf8gw4',
  authDomain: 'crwn-clothing-version-2-db.firebaseapp.com',
  projectId: 'crwn-clothing-version-2-db',
  storageBucket: 'crwn-clothing-version-2-db.appspot.com',
  messagingSenderId: '329069336914',
  appId: '1:329069336914:web:f9cc384a3a1096dcc5028b',
  measurementId: 'G-F5L8KCZXSJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
