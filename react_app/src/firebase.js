import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQzC2bj7FqeMMBe7iOWgTdQrYXDWhteac",
  authDomain: "license-project-d2f49.firebaseapp.com",
  projectId: "license-project-d2f49",
  storageBucket: "license-project-d2f49.appspot.com",
  messagingSenderId: "633982282086",
  appId: "1:633982282086:web:154d5f9a781a0d7f5880a7",
  measurementId: "G-BB4KMMLHT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth };
export default app;
