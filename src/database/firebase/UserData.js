import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { auth, storage, db } from "./firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const usersCollectionRef = collection(db, "trampos");


export const UserDataContext = React.createContext();


export const UserData = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [concluido, setConcluido] = useState(false);


  const createTrampos = async (userId, nome, descricao, valor, enderco, obs) => {
    setLoading(true)
    const concluido = false;
    const bicador = '';
    try{
      // console.log(userId, nome, descricao, valor, enderco, obs);
        await addDoc(usersCollectionRef, { userId, nome, descricao, valor, enderco, obs, concluido, bicador });
        setLoading(false)
        setConcluido(true)
        setTimeout(function(){
          setConcluido(false)
      }, 1500);
    } catch(err) {
        console.log(err);
        setError('erro ao gravar trampo, tente novamente')
        setLoading(false)
    }
};

  const deleteTrampos = async (id) => {
    const userDoc = doc(db, "trampos", id);
    await deleteDoc(userDoc);
  };



  const updateTrampos = async (id, userId, nome, descricao, valor, enderco, obs, concluido, bicador ) => {
  const userDoc = doc(db, "trampos", id);
  const newFields = { nome, descricao, valor, enderco, obs, concluido, bicador };
  // console.log(id,marca, modelo, ano )
  try {
      await updateDoc(userDoc, newFields);
  } catch(err){
      console.log(err);
  }
};


 const getAllTrampos = async () => {
  const data = await getDocs(usersCollectionRef)
  .then((data) => data.docs.map((doc) => ({ ...doc.data()})))
  // console.log(data);
  return data;
};

 const getTrampos = async (id) => {
  const data = await getDoc(doc(db, "trampos", id))
  .then((data) => data.data())
  return data;

};

  return (
    <UserDataContext.Provider
      value={{
        createTrampos,
        getAllTrampos,
        error,
        loading,
        concluido,
       }}
    >
      {children}
    </UserDataContext.Provider>
  );
};