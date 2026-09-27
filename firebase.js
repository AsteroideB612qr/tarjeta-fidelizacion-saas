import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjFNMQC25r-qOiLy2sLnzbN86wa4uYmpk",
  authDomain: "tarjeta-fidelizacion-saas.firebaseapp.com",
  projectId: "tarjeta-fidelizacion-saas",
  storageBucket: "tarjeta-fidelizacion-saas.firebasestorage.app",
  messagingSenderId: "717746699784",
  appId: "1:717746699784:web:3b9fd2da09ae4ed2badbbd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
