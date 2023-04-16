import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnc2xd7ucvQtK0OGsKxrbrZ4vZxobFWUY",
    authDomain: "hahaton-52985.firebaseapp.com",
    projectId: "hahaton-52985",
    storageBucket: "hahaton-52985.appspot.com",
    messagingSenderId: "793035585372",
    appId: "1:793035585372:web:845fb0563c11b2fe21b399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);