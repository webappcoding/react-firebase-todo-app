import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmG66-YQuR3yeO696bj6lYHAdLp1i419A",
  authDomain: "react-todo-app-9eb2c.firebaseapp.com",
  databaseURL: "https://react-todo-app-9eb2c.firebaseio.com",
  projectId: "react-todo-app-9eb2c",
  storageBucket: "react-todo-app-9eb2c.appspot.com",
  messagingSenderId: "772291225175",
  appId: "1:772291225175:web:25d32decd850a1750e6512",
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };
export default db;
