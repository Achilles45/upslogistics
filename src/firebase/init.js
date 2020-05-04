import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyCliJoFZ9BCAOjlBM20KUbSvvJpcNsAabk",
  authDomain: "logisticsapp-5104a.firebaseapp.com",
  databaseURL: "https://logisticsapp-5104a.firebaseio.com",
  projectId: "logisticsapp-5104a",
  storageBucket: "logisticsapp-5104a.appspot.com",
  messagingSenderId: "983869454864",
  appId: "1:983869454864:web:ccdc283efdd2b47f20a895",
  measurementId: "G-Y1FRFNYY2N"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebaseApp.firestore()