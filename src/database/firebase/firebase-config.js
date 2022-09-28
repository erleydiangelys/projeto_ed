import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth } from "@firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBjKeXE4oiRAGat8T2Au8HvJ2U2Un-_oaY",
//   authDomain: "projetoed-6a5c4.firebaseapp.com",
//   databaseURL: "https://projetoed-6a5c4-default-rtdb.firebaseio.com",
//   projectId: "projetoed-6a5c4",
//   storageBucket: "projetoed-6a5c4.appspot.com",
//   messagingSenderId: "445727672495",
//   appId: "1:445727672495:web:ed6ca988ae0a0a7c8fec5a"
// };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
