import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// we need to somow seed the database

// we need a config here
const config = {
  apiKey: 'AIzaSyDXuh-NLhxB58HQKZjnxfM5EGkzxH1kxUk',
  authDomain: 'netflix-b6ee2.firebaseapp.com',
  projectId: 'netflix-b6ee2',
  storageBucket: 'netflix-b6ee2.appspot.com',
  messagingSenderId: '780763334698',
  appId: '1:780763334698:web:17252e7b92bf6489549b53',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
