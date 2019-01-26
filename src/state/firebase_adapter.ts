import * as Firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyA_TENXrDQhNbZViTMa1nmLAovqvJ-4jH8",
  authDomain: "vinyl-56cb9.firebaseapp.com",
  databaseURL: "https://vinyl-56cb9.firebaseio.com",
  messagingSenderId: "250378865774",
  projectId: "vinyl-56cb9",
  storageBucket: "vinyl-56cb9.appspot.com"
};
Firebase.initializeApp(config);
Firebase.firestore().settings({ timestampsInSnapshots: true });

const db = Firebase.firestore();
const auth = Firebase.auth();

export { db, auth };
