import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import  { createContext } from 'react';
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        createUser,
        googleSignIn,
        signInUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;