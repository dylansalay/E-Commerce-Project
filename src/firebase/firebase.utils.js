import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB2xFFagf2xOcAKmqf7C0occXBklRaFOBg",
    authDomain: "ecommerce-db-f9869.firebaseapp.com",
    databaseURL: "https://ecommerce-db-f9869.firebaseio.com",
    projectId: "ecommerce-db-f9869",
    storageBucket: "ecommerce-db-f9869.appspot.com",
    messagingSenderId: "754702703732",
    appId: "1:754702703732:web:bae3dc3069e0ce7a5fc521",
    measurementId: "G-YSLQX9XVNM"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
