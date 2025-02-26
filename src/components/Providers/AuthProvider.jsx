import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.init';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [cuUser, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    // Create User with Email-Pass
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Email-Pass Login
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    // Google SignIn
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };


    //Sign Out
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    };

    // Find User login Status
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Currently Loggedin User:", currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe()
        };

    }, []);

    // Value
    const userInfo = {
        cuUser,
        loading,
        createUser,
        googleSignIn,
        signInUser,
        signOutUser
    };


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;