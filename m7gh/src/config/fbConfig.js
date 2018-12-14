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
//var config = {
//  apiKey: "AIzaSyCAUwUmSRLX0DCKs8G5yC99PbrzZziFOiY",
//  authDomain: "majestic7guesthouse-79856.firebaseapp.com",
//  databaseURL: "https://majestic7guesthouse-79856.firebaseio.com",
//  projectId: "majestic7guesthouse-79856",
//  storageBucket: "majestic7guesthouse-79856.appspot.com",
//  messagingSenderId: "435158320776"
//};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
