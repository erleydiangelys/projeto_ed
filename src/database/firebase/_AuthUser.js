// import React from 'react';
import React from "react";
import { auth, storage } from "./firebase-config";
import { ref, uploadBytesResumable, signInWithRedirect,  getDownloadURL } from "firebase/storage";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

const storageRef  = ref(storage, 'userImg');

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
        if(email){
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
    }


  export const LoginGoogle = async () => {

  const provider = new GoogleAuthProvider();

  signInWithRedirect(auth, provider)
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

  export const ValidUser =  () => {
      const user = auth.currentUser;
          if(user) {
              return true
          } else {
              return false
          }
    }



  export const AutoLogin = async () => {
      const userLoged = JSON.parse(window.localStorage.getItem('user'))
          if((userLoged) && ValidUser() ){
              return true;
          } else return false

    }


  // export const UploadImg = async (event) => {
  //     try {
  //       const file = event['img'][0]
  //       if (!file) return;

  //       const storageRef = ref(storage, `images/${file.name}`);
  //       const uploadTask = uploadBytesResumable(storageRef, file)
  //       uploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //           const progress = Math.round(
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //           );
  //           // setPorgessPorcent(progress);
  //         },
  //         (error) => {
  //           alert(error);
  //         },
  //         () => {
  //           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //             return (downloadURL);
  //           });
  //         }
  //       );

  //       // return true;
  //     }catch(e) {
  //       console.log(e);
  //       return false
  //     }
  //   }

  export const getImg = async (nameImg) => {
      try {
        getDownloadURL(ref(storage, nameImg))
        .then((url) => {
          const xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = (event) => {
            const blob = xhr.response;
          };
          xhr.open('GET', url);
          xhr.send();
          console.log(url);
            return url;
        })
      }catch(e) {
        console.log(e);
        return false
      }
    }
