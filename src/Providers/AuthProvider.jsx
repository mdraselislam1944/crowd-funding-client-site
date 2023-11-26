import {  createContext, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut , updateProfile} from "firebase/auth";
import { useState } from "react";
import auth from "../Firebase/firebaseConfig";


// import React from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
     return createUserWithEmailAndPassword(auth,email,password)
    }
     
const signIn =(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}
const googleSignIn = () => {
    return signInWithPopup(auth, GoogleAuthProvider)
}
const logOut = () => {
    return signOut(auth);
}
const updateUserProfile=(name ,photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name ,photoURL:photo
    })
}

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // setUser('currentUser', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe;
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;