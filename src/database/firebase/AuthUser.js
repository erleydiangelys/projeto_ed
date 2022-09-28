// import React from 'react';

import { auth } from "./firebase-config";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult
} from "firebase/auth";


export const CreateUser = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const NewUser = userCredential.user;
            return NewUser;
        }).catch(e => {
            console.log(e);
        })
    }

export const LoginUser = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const data =  userCredential.user
            const User = {
                userId: data.uid,
                email: data.email,
                token: data.accessToken,
             }
            window.localStorage.setItem('user', JSON.stringify(User))
            return User;
        }).catch(e => {
            console.log(e);
        })
    }


export const LoginGoogle = async () => {

const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const data = result.user;
    const User = {
        userId: data.uid,
        email: data.email,
        token: data.accessToken,
     }
     window.localStorage.setItem('user', JSON.stringify(User))
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
 
  });
}


export const LogoutUser = async () => {
    signOut(auth).then(() => {
        window.localStorage.removeItem('user')
        console.log('saiu');
        //navegar para a home
        }).catch(e => {
            console.log(e);
        })
    }

export const validUser =  () => {
    const user = auth.currentUser;
        if(user) {
            return true
        } else {
            return false
        }
    }



export const autoLogin = async () => {
    
    const userLoged = JSON.parse(window.localStorage.getItem('user'))
        if((userLoged) && validUser() ){
            return true;
        } else return false
        
    }