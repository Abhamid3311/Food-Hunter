import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../redux/features/auth/authSlice";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const { user } = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const [cuUser, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // Create User with Email-Pass
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email-Pass Login
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google SignIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //Sign Out
  const signOutUser = () => {
    setLoading(true);
    // dispatch(logout());
    return signOut(auth);
  };

  // Find User login Status
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Currently Loggedin User:", currentUser);
      setUser(currentUser);

      if (currentUser?.email && !user?.email) {
        // Call JWT API From Here
        dispatch(getMe());
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, [dispatch]);

  // Value
  const userInfo = {
    cuUser,
    loading,
    createUser,
    googleSignIn,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
