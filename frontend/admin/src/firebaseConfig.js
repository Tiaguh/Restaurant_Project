// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWxSrK8IeuujxkyEKh4XVtkaG15pYZT1E",
  authDomain: "restaurant-project-bc410.firebaseapp.com",
  projectId: "restaurant-project-bc410",
  storageBucket: "restaurant-project-bc410.appspot.com",
  messagingSenderId: "462214355453",
  appId: "1:462214355453:web:651b13a636320cb291e194",
  measurementId: "G-Y35X3P0FND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, analytics, storage };