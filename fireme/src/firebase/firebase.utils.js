import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCnmLkWD-CVxvkBHSssrFNjcbWBjuDNRUE',
    authDomain: 'crwn-f3546.firebaseapp.com',
    databaseURL: 'https://crwn-f3546.firebaseio.com',
    projectId: 'crwn-f3546',
    storageBucket: 'crwn-f3546.appspot.com',
    messagingSenderId: '1004862970955',
    appId: '1:1004862970955:web:42777e0e0c3128530f41ce',
    measurementId: 'G-K6JR7YP3HS',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email, uid} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                uid,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
