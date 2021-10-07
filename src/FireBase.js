import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { collection } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyB6N8TrbpOuvpRLkXzOITWIECuFQdJyRpE',
  authDomain: 'todo-app-e1829.firebaseapp.com',
  projectId: 'todo-app-e1829',
  storageBucket: 'todo-app-e1829.appspot.com',
  messagingSenderId: '734403190148',
  appId: '1:734403190148:web:2d6a2c5cea2362894b51d1',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const todoRef = collection(db, 'todo');
