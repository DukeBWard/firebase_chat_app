import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { API_KEY } from "../key";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "lukes-chat-706f4.firebaseapp.com",
  projectId: "lukes-chat-706f4",
  storageBucket: "lukes-chat-706f4.appspot.com",
  messagingSenderId: "610488395884",
  appId: "1:610488395884:web:e56f15eda2f448b84e9049"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();