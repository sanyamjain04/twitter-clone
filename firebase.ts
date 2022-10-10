// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
  authDomain: "twitter-clone-b8ea4.firebaseapp.com",
  projectId: "twitter-clone-b8ea4",
  storageBucket: "twitter-clone-b8ea4.appspot.com",
  messagingSenderId: "820878949896",
  appId: "1:820878949896:web:0169a9a62045c4e5d49bbd"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };