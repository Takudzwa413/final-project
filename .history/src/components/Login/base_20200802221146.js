import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCh2LuJFwJTU-6MyOCwzesQsZPLNX4C6WQ',
  authDomain: 'facebook-messenger-clone-24296.firebaseapp.com',
  databaseURL: 'https://facebook-messenger-clone-24296.firebaseio.com',
  projectId: 'facebook-messenger-clone-24296',
  storageBucket: 'facebook-messenger-clone-24296.appspot.com',
  messagingSenderId: '717074978498',
  appId: '1:717074978498:web:529a1b1561efec2def8d5b',
  measurementId: 'G-BXFXR51T29',
});

export default app;
