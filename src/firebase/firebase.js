import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDDBXPx3-YCoorkCqCYWJ0pWHt0G0rfGJs',
  authDomain: 'crwn-db-b78cb.firebaseapp.com',
  projectId: 'crwn-db-b78cb',
  storageBucket: 'crwn-db-b78cb.appspot.com',
  messagingSenderId: '129764817655',
  appId: '1:129764817655:web:e0055fd9ad19d2bf6ff1f2',
  measurementId: 'G-WM8YBF8ZMF',
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
