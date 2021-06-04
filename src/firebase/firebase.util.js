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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// the authorization server prompts the user to select a user account.
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;





