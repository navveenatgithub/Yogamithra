// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase config keys from Firebase Console
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle booking form submission
document.getElementById('booking-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const event = document.getElementById('event').value;
  const tickets = document.getElementById('tickets').value;

  try {
    await addDoc(collection(db, 'bookings'), {
      event: event,
      tickets: tickets,
      timestamp: new Date()
    });
    alert('Booking confirmed!');
  } catch (error) {
    console.error('Error adding booking: ', error);
  }
});
