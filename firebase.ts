import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp, collection } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "facebok-ab59b.firebaseapp.com",
  projectId: "facebok-ab59b",
  storageBucket: "facebok-ab59b.appspot.com",
  messagingSenderId: "328660678329",
  appId: "1:328660678329:web:6a7c6c4e8b6027978d0d68",
};

export const app = initializeApp(firebaseConfig);

export const timestamp = serverTimestamp();
export const storage = getStorage(app);
export const storageRef = ref(storage);
export const firestore = getFirestore(app);
export const postCollection = collection(firestore, "posts");
