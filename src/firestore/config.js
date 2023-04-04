// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdScgKS54mQPZnH6EThdgQ1t-HoQhGsVw",
  authDomain: "cv-reactjs.firebaseapp.com",
  projectId: "cv-reactjs",
  storageBucket: "cv-reactjs.appspot.com",
  messagingSenderId: "563538417480",
  appId: "1:563538417480:web:94a9796900c9771325057d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFirestoreApp = () => {
    return app
}