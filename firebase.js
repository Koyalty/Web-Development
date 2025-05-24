import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0qPTfDEHTL-2uqFCv1G8__z8aFC0QxTA",
  authDomain: "web-dev-final-project-a1810.firebaseapp.com",
  projectId: "web-dev-final-project-a1810",
  storageBucket: "web-dev-final-project-a1810.appspot.com",
  messagingSenderId: "880963039369",
  appId: "1:880963039369:web:a70a45444777ceadbcd658"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);