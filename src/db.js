// Conveniently import this file anywhere to use db

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBdU-E86jnI7uiHTZcxu6fJJiaKIUNaR1k",
  authDomain: "tienda-d1e79.firebaseapp.com",
  projectId: "tienda-d1e79",
  storageBucket: "tienda-d1e79.appspot.com",
  messagingSenderId: "1055374525118",
  appId: "1:1055374525118:web:98f51bdd7eb072507f54ef"
  };

var app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()
export const st = app.storage()

// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
