import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

// children are the components
// all auth is contained within firebase
// we wrapped our entire app around the auth provider in main.jsx
export const AuthContextProvider = ({ children }) => { 
    const [currUser, setCurrUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrUser(user);
            console.log(user)
        });

        //make sure to clean up or there will be mem leak
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{currUser}}>
            {children}
        </AuthContext.Provider>
    )
}

