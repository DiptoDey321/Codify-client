import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)
// const provider = new GoogleAuthProvider();

function AuthProvider({children}) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

    const prodiverLogin = (provider) =>{
      setLoading(true);
      return signInWithPopup(auth,provider);
    }

    const gitLogin = (provider) =>{
      setLoading(true);
      return signInWithPopup(auth,provider);
    }

    const createUser = (email,password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (profile) =>{
      return updateProfile(auth.currentUser, profile)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        console.log("user inside state change", currentUser);
        setUser(currentUser)
        setLoading(false);
      });
      return()=>{unsubscribe()} 
    },[])

    const logOut = () =>{
      setLoading(true);
      return signOut(auth)
    }

    // const user = {display : "Dipto"}
    const authInfo = {user, prodiverLogin ,logOut ,createUser, signIn, loading ,updateUserProfile , gitLogin}

 

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider