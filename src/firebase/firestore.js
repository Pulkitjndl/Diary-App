import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBJ2GLCqKp1GsFVZOQtfqeJGWx42oU-vts',
  authDomain: "ritwick-social-diary.firebaseapp.com",
  databaseURL: 'https://cohesive-point-298914-default-rtdb.firebaseio.com',
  storageBucket: "cohesive-point-298914.appspot.com",
  messagingSenderId: "412227200157",
  projectId: 'ritwick-social-diary',
  appId: "1:412227200157:web:571dae6e77f28d2166e074",


};


firebase.initializeApp(config);

export const db = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;
