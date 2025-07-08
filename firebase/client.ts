// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore  } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALh-yYT9THX8_zk-4cglxH7i9oxlVl_fA",
  authDomain: "interviewplatform-275b5.firebaseapp.com",
  databaseURL: "https://interviewplatform-275b5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "interviewplatform-275b5",
  storageBucket: "interviewplatform-275b5.firebasestorage.app",
  messagingSenderId: "747394509147",
  appId: "1:747394509147:web:2c9de61a95cb1c304b127e",
  measurementId: "G-FHDFD6G8P9"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);