import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC73t5uzvNuomNXVkPI1cE-o-g4T9oLfdw",
  authDomain: "ifpr-chat.firebaseapp.com",
  projectId: "ifpr-chat",
  storageBucket: "ifpr-chat.appspot.com",
  messagingSenderId: "969293806048",
  appId: "1:969293806048:web:286e6ee521ffe1868b1385",
  measurementId: "G-WKPBQVRXQ9"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


