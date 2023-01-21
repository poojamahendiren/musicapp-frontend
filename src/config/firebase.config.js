import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
  appId: process.env.REACT_APP_FIREBASE_APPI_ID,
  };


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };


  


    // apiKey: "AIzaSyBirLPNohk7M5Ex3WMC8AZhUQqwlwh1Vik",
    // authDomain: "project-musicapp-46262.firebaseapp.com",
    // projectId: "project-musicapp-46262",
    // storageBucket: "project-musicapp-46262.appspot.com",
    // messagingSenderId: "100765895913",
    // appId: "1:100765895913:web:d6171db097d01a21693478"