import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRDGWRUNjnxNLKbazcSyEW3-aI3VZNXlw",
  authDomain: "chanchines-fc0ad.firebaseapp.com",
  projectId: "chanchines-fc0ad",
  storageBucket: "chanchines-fc0ad.appspot.com",
  messagingSenderId: "482181351095",
  appId: "1:482181351095:web:cc7bba52c5b292abfbef32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const storage = getStorage(app);

export default db;