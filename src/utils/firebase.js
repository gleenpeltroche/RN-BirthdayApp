import firebase from 'firebase/app';

const firebaseConfig = {
  // Colocar toda la configuración de firebase
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

export default firebase.initializeApp(firebaseConfig);
