import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from 'axios';

import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (name, email, password, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/')
                setAuthError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
                // ..
            })
            .finally(() => setLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const redirect_uri = location?.state?.from || '/';
                history.replace(redirect_uri)
                setAuthError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                saveUserByGoogle(result.user.email, result.user.displayName);
                const redirect_uri = location?.state?.from || '/';
                history.replace(redirect_uri);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
                setUser(user);
            } else {
                setUser(user);
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        axios.post('https://calm-beyond-76948.herokuapp.com/users', user)
            .then(res => { })
    }

    const saveUserByGoogle = (email, displayName) => {
        const user = { email, displayName };
        axios.put('https://calm-beyond-76948.herokuapp.com/users', user)
            .then(res => { })
    }

    useEffect(() => {
        setLoading(true)
        axios.get(`https://calm-beyond-76948.herokuapp.com/users/${user?.email}`)
            .then(res => {
                setAdmin(res.data.admin);
                if (user?.email) {
                    setLoading(false);
                }
            });
    }, [user?.email])

    return {
        user,
        admin,
        token,
        registerUser,
        loginUser,
        logOut,
        loading,
        authError,
        signInWithGoogle
    }

}

export default useFirebase;