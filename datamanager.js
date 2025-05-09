import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Deine echte Firebase-Konfiguration hier eintragen
const firebaseConfig = {
  apiKey: "AIzaSyAOVWC3-WauskIzFRzMbNtl8p3bwidYoN8",
  authDomain: "dashbaord-15fb6.firebaseapp.com",
  projectId: "dashbaord-15fb6",
  storageBucket: "dashbaord-15fb6.firebasestorage.app",
  messagingSenderId: "504500013021",
  appId: "1:504500013021:web:8d18fc4f444a2b60211834"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProjects() {
  const snapshot = await getDocs(collection(db, "Projects"));
  return snapshot.docs.map(doc => doc.data());
}
