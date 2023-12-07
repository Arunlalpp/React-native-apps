// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB0i6Ov8S3gGRXjvUxduwZn4aZiHIEFsio',
  authDomain: 'authentication-1381c.firebaseapp.com',
  projectId: 'coffeeshop-50ed0',
  storageBucket: 'coffeeshop-50ed0.appspot.com',
  messagingSenderId: '351775425709',
  appId: '1:988907937725:android:eb8566b1f4a375bcef7cd4',
  measurementId: 'G-2BQNMNC5TQ',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export {auth};
