import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEm61yl5IF-5ijP2gndhCS9CNi2oHJw-4",
  authDomain: "restaurant-project-70a47.firebaseapp.com",
  projectId: "restaurant-project-70a47",
  storageBucket: "restaurant-project-70a47.appspot.com",
  messagingSenderId: "271358781721",
  appId: "1:271358781721:web:e1d57d134c0d85f7c3bd88"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();