
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMxr7vziskVCsgiGN79zbbDeerX30AXr0",
  authDomain: "react-portfolio-vikas-946d3.firebaseapp.com",
  projectId: "react-portfolio-vikas-946d3",
  storageBucket: "react-portfolio-vikas-946d3.appspot.com",
  messagingSenderId: "253280106310",
  appId: "1:253280106310:web:c0e978e6aac221def65747"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();