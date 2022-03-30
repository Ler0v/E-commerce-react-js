import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCUN5-cSpw8Qy6OxlabqD831xAtvz0PyP8",
  authDomain: "csgo-api-proyect.firebaseapp.com",
  projectId: "csgo-api-proyect",
  storageBucket: "csgo-api-proyect.appspot.com",
  messagingSenderId: "1052309060380",
  appId: "1:1052309060380:web:7496fd2114e5bfe3b818d9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)