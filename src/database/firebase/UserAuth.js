import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { auth, storage, db } from "./firebase-config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  getRedirectResult
} from "firebase/auth";

export const UserContext = React.createContext();


export const UserAuth = ({ children }) => {
  const [imgURL, setImgURL] = useState("");
  const [login, setLogin] = useState(Boolean(window.localStorage.getItem('user')));
  const [user, setUser] = useState([]);
  const [imgName, setImgimgName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progressPorcent, setPorgessPorcent] = useState(0);
  const navigate = useNavigate();

  const storageRef  = ref(storage, 'userImg');


  React.useEffect(() => {
    function autoLogin() {
      const token = JSON.parse(window.localStorage.getItem('user'));
      console.log(login)
      if(token){
        setLogin(true)
      } else {
        LoginUser();
      }
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(unsubscribe) {
        const User = {
          userId: currentUser.uid,
          email: currentUser.email,
          token: currentUser.accessToken,
      }
      window.localStorage.setItem('user', JSON.stringify(User))
      setUser(User)
      setLogin(true)
      }
      //  else {
      //   getRedirectResult().then(result => {
      //     if (result.user || db.auth().currentUser) {
      //       console.log('result.user', result)
      //     }
      //   });
      //  }
      setUser(currentUser);
      // console.log('User', currentUser)
    });
    autoLogin();
  }, []);


  const CreateUser = async (email, password) => {
    if(email) {
      setLoading(true)
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const NewUser = userCredential.user;
          const User = {
            userId: NewUser.uid,
            email: NewUser.email,
            token: NewUser.accessToken,
        }
        window.localStorage.setItem('user', JSON.stringify(User))
          setUser(NewUser)
          setLogin(true)
          setLoading(false)
          navigate('/');
          return NewUser;
      }).catch(e => {
          setError('erro ao realizar cadastro tente novamente!')
          setLoading(false)
          console.log(e);
          setLogin(false);
      })
    }
  }



  const LoginUser = async (email, password) => {
    if(email){
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const data =  userCredential.user
          const User = {
              userId: data.uid,
              email: data.email,
              token: data.accessToken,
          }
          window.localStorage.setItem('user', JSON.stringify(User))
          setUser(User)
          setLogin(true)
          setLoading(false)
          navigate('/');
          return User;
      }).catch(e => {
        setError('erro ao realizar login tente novamente')
          console.log(e);
          setLoading(false)
          setLogin(false)
      })
    }
  }



  const LoginGoogleDesktop = async () => {

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
        setUser(User)
        setLogin(true)
        navigate('/');
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setLogin(false)
      });
    }


  const LoginGoogleMb = async () => {

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
     signInWithRedirect(auth, provider).then((result) => {
    })
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }


    const LogoutUser = async () => {
      signOut(auth).then(() => {
          window.localStorage.removeItem('user')
          console.log('saiu');
          setUser(null)
          setLogin(false)
          navigate('/login');
          }).catch(e => {
              console.log(e);
          })
    }


  const AutoLogin = async () => {
      const userLoged = JSON.parse(window.localStorage.getItem('user'))
          if((userLoged) && ValidUser() ){
              return true;
          } else return false

    }

    // essa parte precisa ser testada não esta ok
    const ValidUser =  () => {
      const user = auth.currentUser;
      console.log(user);
          if(user) {
              return true
          } else {
              return false
          }
    }



   const UploadImg = async (event) => {
    try {
      const file = event['img'][0]
      if (!file) return;

      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPorgessPorcent(progress);
          setImgimgName(snapshot.metadata.fullPath);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log(downloadURL);
            setImgURL(downloadURL);
          });
        }
      );

    }catch(e) {
      console.log(e);
      return false
    }
  }


  const getImg = async (nameImg) => {
    try {
      getDownloadURL(ref(storage, nameImg))
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open('GET', url);
        // xhr.send();
          setImgURL(url);
      })
    }catch(e) {
      console.log(e);
      return false
    }
  }





  return (
    <UserContext.Provider
      value={{
        UploadImg,
        CreateUser,
        LoginUser,
        LoginGoogleDesktop,
        LoginGoogleMb,
        LogoutUser,
        AutoLogin,
        ValidUser,
        UploadImg,
        getImg,
        setError,
        error,
        user,
        login,
        imgURL,
        progressPorcent,
        imgName,
        loading
       }}
    >
      {children}
    </UserContext.Provider>
  );
};
