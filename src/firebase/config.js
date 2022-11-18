// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsVNdmSKBU10QH56kevkrIP3TLn1Lx5sA",
  authDomain: "prodeqatar2022-cf047.firebaseapp.com",
  projectId: "prodeqatar2022-cf047",
  storageBucket: "prodeqatar2022-cf047.appspot.com",
  messagingSenderId: "550490410417",
  appId: "1:550490410417:web:f329b9750fa93302e24190",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}
