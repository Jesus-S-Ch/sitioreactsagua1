// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBcTluMqgGLVZ7Kzpb06QA2KNS0t9g_T2w',
    authDomain: 'bd-react1.firebaseapp.com',
    projectId: 'bd-react1',
    storageBucket: "bd-react1.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;