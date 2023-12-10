import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH5fn73hxGhRnRFygToyVj8C9n10kM3WA",
  authDomain: "market-mate-dfd04.firebaseapp.com",
  projectId: "market-mate-dfd04",
  storageBucket: "market-mate-dfd04.appspot.com",
  messagingSenderId: "992305061026",
  appId: "1:992305061026:web:043ade15fd39eab2488bfb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
