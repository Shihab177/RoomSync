import React, { createContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
      const loginWithGoogle =()=>{
       
        return signInWithPopup(auth,provider)
    }
    //creat user
    const registerUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
   const AuthData = {
     loginWithGoogle,
     registerUser
   }
    return <AuthContext value={AuthData}>
          {children}
    </AuthContext>
};

export default AuthProvider;