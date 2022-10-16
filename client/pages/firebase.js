/** @format */

import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// import firebaseConfig from '../fireabaseConfig';

const firebaseConfig = {
	apiKey: 'AIzaSyANvf4DRP6pyasxGSwktai7Lff2AmKPXpE',
	authDomain: 'formyteam-a5c8b.firebaseapp.com',
	projectId: 'formyteam-a5c8b',
	storageBucket: 'formyteam-a5c8b.appspot.com',
	messagingSenderId: '530999216857',
	appId: '1:530999216857:web:38bfaae7e5ffc0be3b0cc8',
	measurementId: 'G-5T73W9Q1F8',
};
const a = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
	measurementId: process.env.REACT_APP_measurementId,
};

console.log('asdasdasd', a);

const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);
export const FirebaseInstance = firebase;
export const db = getFirestore(app);
export const storage = getStorage();
export const storageRef = ref(storage);

export default app;
