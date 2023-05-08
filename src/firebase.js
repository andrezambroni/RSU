import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// 50min do video
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA8oL5SrGx1crbMp_EKwIwetwsC4dM_w3Y",
  authDomain: "rsuni-3ec46.firebaseapp.com",
  projectId: "rsuni-3ec46",
  storageBucket: "rsuni-3ec46.appspot.com",
  messagingSenderId: "304312852277",
  appId: "1:304312852277:web:bc4e9f90c0ee2532f2b67c",
  measurementId: "G-2MTMY8522W"
};
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();


export { db, storage };
