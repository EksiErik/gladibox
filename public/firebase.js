import firebase from 'firebase/app';
import 'firebase/auth';  // Eğer kullanıcı giriş yapacaksa
import 'firebase/firestore';  // Eğer Firestore kullanacaksanız

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Mevcut app'ı kullan
}

const db = firebase.firestore(); // Eğer Firestore kullanıyorsanız
const auth = firebase.auth(); // Eğer Authentication kullanıyorsanız

export { db, auth };
