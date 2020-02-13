import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDDLF90YvogkVXRR6xqz2v2KzVBObyVopg",
    authDomain: "socials-2f2f1.firebaseapp.com",
    databaseURL: "https://socials-2f2f1.firebaseio.com",
    projectId: "socials-2f2f1",
    storageBucket: "socials-2f2f1.appspot.com",
    messagingSenderId: "808730146666",
    appId: "1:808730146666:web:6b58c14ef7ef9baf5ad713"
  };
  // Initialize Firebase
 const fireBase =  firebase.initializeApp(firebaseConfig);

  export default fireBase;