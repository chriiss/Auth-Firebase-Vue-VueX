import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHI7U1eNaUuA4ZuhgV_9edGH8OdXtQogo",
  authDomain: "vue-firebase-auth-ece24.firebaseapp.com",
  projectId: "vue-firebase-auth-ece24",
  storageBucket: "vue-firebase-auth-ece24.appspot.com",
  messagingSenderId: "736918306509",
  appId: "1:736918306509:web:e674d4ae3689535061f384"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { auth, provider }