import { useCallback, useRef } from "react";
import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
  getAuth,
} from "firebase/auth";

import { useStateDispatch, useStateSelector } from "../context/hooks";
import { changeAuth, selectUser } from "../context/generalSlice";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const useAuth = () => {
  const app = useRef(initializeApp(firebaseConfig));
  const auth = useRef(getAuth(app.current));
  const googleProvider = useRef(new GoogleAuthProvider());
  const facebookProvider = useRef(new FacebookAuthProvider());

  const user = useStateSelector(selectUser);
  const dispatch = useStateDispatch();

  const signInWithGoogle = () => {
    signInWithPopup(auth.current, googleProvider.current).catch((error) => {
      alert(`SignIn Error: ${error.message}`);
    });
  };

  const signInWithFacebook = () => {
    signInWithPopup(auth.current, facebookProvider.current).catch((error) => {
      alert(`SignIn Error: ${error.message}`);
    });
  };

  const logOut = () => {
    signOut(auth.current).catch((error) => {
      alert(`Logout Error: ${error.message}`);
    });
  };

  const onChangeAuth = useCallback(() => {
    onAuthStateChanged(auth.current, (user) => {
      if (user) {
        dispatch(
          changeAuth({
            name: user.displayName,
            image: user.photoURL,
          })
        );
        return;
      }

      dispatch(changeAuth(null));
    });
  }, [onAuthStateChanged, auth]);

  return {
    signInWithGoogle,
    signInWithFacebook,
    onChangeAuth,
    logOut,
    user,
  };
};
