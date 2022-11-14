// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    authDomain: 'yyyyyyyyyyyyyyyyy.firebaseapp.com',
    projectId: 'yyyyyyyyyyyyyyyyy',
    storageBucket: "yyyyyyyyyyyyyyyyy.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
