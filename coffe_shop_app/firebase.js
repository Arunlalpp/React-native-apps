// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCw_izsa1egfYmGPp3Sm8XxEFenw0zoF48',
  authDomain: 'authentication-1381c.firebaseapp.com',
  projectId: 'authentication-1381c',
  storageBucket: 'authentication-1381c.appspot.com',
  messagingSenderId: '351775425709',
  appId: '1:351775425709:web:6882abc3a16eab9ffdb224',
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
