import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAyZHDv9OCnA2hOPbitaFWM1L2XUgECbKs",
  authDomain: "login-bcb31.firebaseapp.com",
  databaseURL: "https://login-bcb31.firebaseio.com",
  projectId: "login-bcb31",
  storageBucket: "login-bcb31.appspot.com",
  messagingSenderId: "937988480185",
  appId: "1:937988480185:web:bb2cc03f768e3df04dcf68"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
