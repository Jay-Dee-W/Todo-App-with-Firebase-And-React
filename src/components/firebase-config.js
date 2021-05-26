import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDHl4HXMbQHwFc2xSAg8CqSTyr3ESvs7vw",
    authDomain: "react-todo-app-d00b2.firebaseapp.com",
    projectId: "react-todo-app-d00b2",
    storageBucket: "react-todo-app-d00b2.appspot.com",
    messagingSenderId: "109876445034",
    appId: "1:109876445034:web:7aa448e72a40b43ccdef13"
  };

  firebase.initializeApp(firebaseConfig)

 export  const databaseRef = firebase.firestore() 