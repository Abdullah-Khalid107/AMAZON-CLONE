// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBz7nHlXZcm44KZBe8XHK1UJaDgx18lou8",
    authDomain: "e-clone-3a64a.firebaseapp.com",
    projectId: "e-clone-3a64a",
    storageBucket: "e-clone-3a64a.appspot.com",
    messagingSenderId: "796278968402",
    appId: "1:796278968402:web:6784734ead3004677acf8b",
    measurementId: "G-3XBPHC3XKZ"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export{ db,auth};