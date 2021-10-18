import FireBaseInit from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


FireBaseInit();

const useFirebase = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [isloading, setIsloading] = useState(true);
    // Auth Init 
    const auth = getAuth();

    // provider 

    const googleProvide = new GoogleAuthProvider();


    // google Sign in

    const googleSignIn = () => {
        setIsloading(true)
        return signInWithPopup(auth, googleProvide)
            .then(result => setUser(result.user))
    }

    // email & password sign up
    const emailSignUp = (email, password) => {
        setIsloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })

    }

    //email & password sign in 

    const emailSignIn = (email, password) => {
        setIsloading(true)
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
    }

    // Log out 
    const logOut = () => {
        setIsloading(true)
        signOut(auth)
            .then(() => {
                setUser(null);
            })
    }

    //check login logout sync
    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, user => {
                if (user) {
                    setUser(user);
                }
                else {
                    setUser({});
                }
                setIsloading(false);
            })
        }
        return unsubscribe();
    }, [auth]);



    return {
        emailSignUp,
        user,
        error,
        setError,
        googleSignIn,
        logOut,
        isloading,
        setIsloading,
        emailSignIn
    }

}

export default useFirebase;