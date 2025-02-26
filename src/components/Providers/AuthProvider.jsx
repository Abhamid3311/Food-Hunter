import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import auth from '../../firebase.init';

export const AuthContext = new createContext(null);


const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    // Create User with Email-Pass
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Email-Pass Login
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    // Google SignIn
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    };




    // Value
    const userInfo = {
        createUser,
        googleSignIn,
        signInUser
    };


    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;