import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3LgPXjPAEl0we9QztoDuT8PcZnwpylAQ",
    authDomain: "lia-coachproject.firebaseapp.com",
    databaseURL: "https://lia-coachproject.firebaseio.com",
    projectId: "lia-coachproject",
    storageBucket: "lia-coachproject.appspot.com",
    messagingSenderId: "828396383064",
    appId: "1:828396383064:web:5c4ba3f0f145b15d62d32d"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();

        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};