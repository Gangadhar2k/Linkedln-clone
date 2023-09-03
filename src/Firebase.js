
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBYPO6rfW-qUjeiqD-ybopkf8r6A1-8eBY",
  authDomain: "linkedin-clone-2k.firebaseapp.com",
  projectId: "linkedin-clone-2k",
  storageBucket: "linkedin-clone-2k.appspot.com",
  messagingSenderId: "152862642960",
  appId: "1:152862642960:web:2d702d5a42f3b2a9cf0b95"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);

export {db,auth}