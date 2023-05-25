 import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyUvtdH0u5Vf9pkZlZEF8EjMuwp6vy__I",
  authDomain: "buzzer-game-c9de7.firebaseapp.com",
  databaseURL: "https://buzzer-game-c9de7-default-rtdb.firebaseio.com",
  projectId: "buzzer-game-c9de7",
  storageBucket: "buzzer-game-c9de7.appspot.com",
  messagingSenderId: "190070172931",
  appId: "1:190070172931:web:8bdb1053b4c56478568d36"
};


let app = firebase.initializeApp(firebaseConfig);
export default app.database(); 

  