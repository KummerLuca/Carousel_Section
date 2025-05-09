import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Deine echte Firebase-Konfiguration hier eintragen
const firebaseConfig = {
  apiKey: "DEIN_API_KEY",
  authDomain: "DEIN_PROJEKT.firebaseapp.com",
  projectId: "DEIN_PROJEKT_ID",
  storageBucket: "DEIN_PROJEKT.appspot.com",
  messagingSenderId: "DEINE_ID",
  appId: "DEINE_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProjects() {
  const snapshot = await getDocs(collection(db, "Projects"));
  return snapshot.docs.map(doc => doc.data());
}
