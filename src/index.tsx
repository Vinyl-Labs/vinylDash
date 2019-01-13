import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "unstated";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// // Initialize Firebase
// const config = {
//   apiKey: "AIzaSyA_TENXrDQhNbZViTMa1nmLAovqvJ-4jH8",
//   authDomain: "vinyl-56cb9.firebaseapp.com",
//   databaseURL: "https://vinyl-56cb9.firebaseio.com",
//   messagingSenderId: "250378865774",
//   projectId: "vinyl-56cb9",
//   storageBucket: "vinyl-56cb9.appspot.com"
// };

// Firebase.initializeApp(config);
// Firebase.firestore().settings({ timestampsInSnapshots: true });

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
