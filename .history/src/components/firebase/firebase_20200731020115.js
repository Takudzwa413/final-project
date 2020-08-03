import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDuJx5JyvTIL36kXy0wG1XF0HgfG4Yer0M',
  authDomain: 'e-commerce-f4e7e.firebaseapp.com',
  databaseURL: 'https://e-commerce-f4e7e.firebaseio.com',
  projectId: 'e-commerce-f4e7e',
  storageBucket: 'e-commerce-f4e7e.appspot.com',
  messagingSenderId: '273520397251',
  appId: '1:273520397251:web:3a4bfc058a62f729b6cb76',
  measurementId: 'G-GGP51Z38KC',
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
