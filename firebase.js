// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmSMgjIBZBASPNpPeGRBqDwOo00LdYaTc",
  authDomain: "fir-auth-40068.firebaseapp.com",
  projectId: "fir-auth-40068",
  storageBucket: "fir-auth-40068.appspot.com",
  messagingSenderId: "844897161717",
  appId: "1:844897161717:web:77ed4d037554ee9cde90bc",
  measurementId: "G-ZZG6WRSQ6M"
};
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
