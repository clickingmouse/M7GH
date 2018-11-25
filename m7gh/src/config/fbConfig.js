import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDzkzGJDwPpEu1uJLiz1GjRwH2Dadq_33A",
  authDomain: "majestic-7-guesthouse.firebaseapp.com",
  databaseURL: "https://majestic-7-guesthouse.firebaseio.com",
  projectId: "majestic-7-guesthouse",
  storageBucket: "majestic-7-guesthouse.appspot.com",
  messagingSenderId: "1012956943779"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
