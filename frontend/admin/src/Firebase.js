import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC_orN22KrX15BIzb7-JiCUhrD1vYHIIlk",
  authDomain: "restaurant-project-66a2b.firebaseapp.com",
  projectId: "restaurant-project-66a2b",
  storageBucket: "restaurant-project-66a2b.appspot.com",
  messagingSenderId: "417861539364",
  appId: "1:417861539364:web:eb7702b6b21c6b83362ab1",
  measurementId: "G-PXCW2R265G"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)