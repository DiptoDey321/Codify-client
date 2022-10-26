import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)
// const provider = new GoogleAuthProvider();

function AuthProvider({children}) {

  const [user, setUser] = useState(null)

    const prodiverLogin = (provider) =>{
      return signInWithPopup(auth,provider);
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        console.log("user inside state change", currentUser);
        setUser(currentUser)
      });
      return()=>{unsubscribe()} 
    },[])

    const logOut = () =>{
      return signOut(auth)
    }

    // const user = {display : "Dipto"}
    const authInfo = {user,prodiverLogin ,logOut}

 

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider