import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCtJ7SctwbW4x4HyMoEY5DhT9_yTMnWU70",
    authDomain: "crwn-db-f39dc.firebaseapp.com",
    databaseURL: "https://crwn-db-f39dc.firebaseio.com",
    projectId: "crwn-db-f39dc",
    storageBucket: "crwn-db-f39dc.appspot.com",
    messagingSenderId: "44877642231",
    appId: "1:44877642231:web:449c11e14fad58933256f2"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider  = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);

  export default firebase;