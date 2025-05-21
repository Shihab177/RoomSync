import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
      const loginWithGoogle =()=>{
       
        return signInWithPopup(auth,provider)
    }
    //creat user
    const registerUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //log in
     const loginWithEmailPassword =(email,password)=>{
       
       return signInWithEmailAndPassword(auth,email,password)
    }
    //
      const updateUser =(updateData)=>{
        return updateProfile(auth.currentUser ,updateData)
    }

    const logout =()=>{
        return signOut(auth)
    }
    //
      useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            
        })
        return ()=>{
            unSubscribe()
        }
    },[])
   const AuthData = {
     loginWithGoogle,
     registerUser,
     loginWithEmailPassword ,
     user,
     setUser,
     logout,
     updateUser
   }
    return <AuthContext value={AuthData}>
          {children}
    </AuthContext>
};

export default AuthProvider;