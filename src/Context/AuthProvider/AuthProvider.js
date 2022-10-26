import React, { createContext } from 'react';

export const AuthContext = createContext();

function AuthProvider({children}) {
    const user = {display : "Dipto"}
    const authInfo = {user}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider