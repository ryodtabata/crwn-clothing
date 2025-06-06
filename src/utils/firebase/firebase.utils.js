import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJ40qChYNlGmBR3QMFiCREiFclZIi0xGQ",
  authDomain: "crwn-clothing-1c0c6.firebaseapp.com",
  projectId: "crwn-clothing-1c0c6",
  storageBucket: "crwn-clothing-1c0c6.firebasestorage.app",
  messagingSenderId: "676779081625",
  appId: "1:676779081625:web:5f6e0e1d0dd41040e1dd08",
  measurementId: "G-XFCHEDV0JW"
};



const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db,'users',userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        
      });
    } catch (error) {
      console.error('Error creating the user', error.message);
    }
  }
  return userDocRef;
};