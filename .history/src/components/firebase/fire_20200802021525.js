import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDCGuJxyoH3CuuK2U7zKE8q3iKUVr5LY7I',
  authDomain: 'portfolio-725c7.firebaseapp.com',
  databaseURL: 'https://portfolio-725c7.firebaseio.com',
  projectId: 'portfolio-725c7',
  storageBucket: 'portfolio-725c7.appspot.com',
  messagingSenderId: '755982740879',
  appId: '1:755982740879:web:96b930ddf0bd32dafb6ffa',
  measurementId: 'G-XZGH2T28WP',
};

const fire = firebase.initializeApp(config);
export default fire;
