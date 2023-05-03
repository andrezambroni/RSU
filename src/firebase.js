import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// 50min do video
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8dia-K0QJN22syG8WaV8M7B7zj73Ef-Q",
  authDomain: "clonefb-25c50.firebaseapp.com",
  projectId: "clonefb-25c50",
  storageBucket: "clonefb-25c50.appspot.com",
  messagingSenderId: "388953963154",
  appId: "1:388953963154:web:7d70c1852dccc0f58f844b",
  measurementId: "G-NBD2ZK3FPV"
};
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();


export { db, storage };
