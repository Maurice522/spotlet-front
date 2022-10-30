import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDW2-kYrd4E7aAgOKfiLtZreEVIN5Wehrs",
  authDomain: "gorecce-5a416.firebaseapp.com",
  projectId: "gorecce-5a416",
  storageBucket: "gorecce-5a416.appspot.com",
  messagingSenderId: "613994545135",
  appId: "1:613994545135:web:c3b3cff7547c0debc2001a",
  measurementId: "G-RE5GGQM60X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);