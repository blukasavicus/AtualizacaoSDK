import { initializeApp } from "firebase/app";

import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'


// 1. create new project on firebase console
// 2. enable email and password auth provider in authentication
// 3. create a web app and copy the firebseConfigs below 

const firebaseConfig = {
  apiKey: "AIzaSyBf-ulyR02v3qF-rz9NTnr5BhSyoUj3FQw",
  authDomain: "atv-04-ddmii-pamii.firebaseapp.com",
  projectId: "atv-04-ddmii-pamii",
  storageBucket: "atv-04-ddmii-pamii.firebasestorage.app",
  messagingSenderId: "524943190090",
  appId: "1:524943190090:web:69fcafc08bba6d5bad9eb3",
  measurementId: "G-J97TMCHZ3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');