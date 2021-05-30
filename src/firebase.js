import firebase from "firebase/app"
import "firebase/auth"


const app = firebase.initializeApp({
  apiKey: "AIzaSyC_NpkiSWEnhHNREZH6-qztck0bMUXs1KI",
    authDomain: "form-5a270.firebaseapp.com",
    projectId: "form-5a270",
    storageBucket: "form-5a270.appspot.com",
    messagingSenderId: "1008192424149",
    appId: "1:1008192424149:web:7ff582c924621624a1ba5c"
})



export const auth = app.auth()
export default app

