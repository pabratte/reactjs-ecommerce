import React, { useEffect, useState } from "react";
import { signOut as _signOut, onAuthStateChanged, signInWithPopup, getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebaseConfig"; 

export const AuthContext = React.createContext();

export default function AuthProvider ({ children }) {
    const [user, setUser] = useState(null)
    const [lastError, setLastError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, function(user) {
            setUser(user)
            clearLastError()
        });
    }, []);

    const clearLastError = () => {
        setLastError(null)
    }

    const signOut = () => {
        handleAuthPromise(_signOut(auth))
    }

    const loginWithGoogle = () => {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        handleAuthPromise(
            signInWithPopup(auth, provider)
        )
        
    }

    const createNewUser = (email, password) => {
        handleAuthPromise( 
            createUserWithEmailAndPassword(auth, email, password)
        )
    }

    const loginWithUserEmailAndPassword = (email, password) => {
        handleAuthPromise(
            signInWithEmailAndPassword(auth, email, password)
        )
    }

    const handleAuthPromise = (promise) =>{
        setLoading(true)
        promise.then((userCredential) => {
            const user = userCredential.user;
            console.log(`Successull login as: ${user.displayName}`)
            setUser(user)
            clearLastError()
            setLoading(false)
        })
        .catch((error) => {
            setLastError(error.message)
            console.log(`Login ERROR: ${error.message}`)
            setUser(null)
            setLoading(false)
        });
    }

    
    return (
        <AuthContext.Provider
            value={{
                user: user,
                loginWithGoogle: loginWithGoogle,
                signOut: signOut,
                clearLastError: clearLastError,
                createNewUser: createNewUser,
                loginWithUserEmailAndPassword: loginWithUserEmailAndPassword
            }}
        >
                
            {children}
        </AuthContext.Provider>
    )
}
