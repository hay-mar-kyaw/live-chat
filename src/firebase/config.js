import firebase from "firebase/app"
import "firebase/firestore" 
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDwvYEDc-3yGo0is4uQeaC5lV49LRqkrU8",
    authDomain: "vue-blog-system-ddaa0.firebaseapp.com",
    projectId: "vue-blog-system-ddaa0",
    storageBucket: "vue-blog-system-ddaa0.appspot.com",
    messagingSenderId: "1035826340672",
    appId: "1:1035826340672:web:2fed11e295862b19c850a5"
  };

firebase.initializeApp(firebaseConfig)  
let db = firebase.firestore();
let auth=firebase.auth();
let timestamp=firebase.firestore.FieldValue.serverTimestamp;

export {db,timestamp,auth}