import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "****************",
  authDomain: "***",
  projectId: "*****",
  storageBucket: "*******",
  messagingSenderId: "*****",
  appId: "*****"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { auth, provider }