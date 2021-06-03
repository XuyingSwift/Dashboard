import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDj3EgAw2l-tJAHGtVwCgoPwvrPj9pKpr0",
    authDomain: "dashboard-670c8.firebaseapp.com",
    projectId: "dashboard-670c8",
    storageBucket: "dashboard-670c8.appspot.com",
    messagingSenderId: "200749462903",
    appId: "1:200749462903:web:553663b85cfc86fc7e1d72",
    measurementId: "G-NE90E00CP5"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// the authorization server prompts the user to select a user account.
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



