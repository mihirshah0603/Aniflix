import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaAnSpTw00FfBSuUY75KkDTjQF3JkcQMA",
  authDomain: "aniflix-project.firebaseapp.com",
  projectId: "aniflix-project",
  storageBucket: "aniflix-project.appspot.com",
  messagingSenderId: "98678913249",
  appId: "1:98678913249:web:c5bcf2fb6a0c9c9b159fa0",
  measurementId: "G-SE3J88R096"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);