import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBuaweti6kitUuPBSfkwyxKWLY26EpgsH8",
  authDomain: "firegram-1105d.firebaseapp.com",
  projectId: "firegram-1105d",
  storageBucket: "firegram-1105d.appspot.com",
  messagingSenderId: "316124732071",
  appId: "1:316124732071:web:afc7913741d4a4bc9a9982",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
