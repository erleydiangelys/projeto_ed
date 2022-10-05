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
  const [data, setData] = useState([]);
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
  const newFields = { userId, nome, descricao, valor, enderco, obs, concluido, bicador };
  // console.log(id,marca, modelo, ano )
  try {
      await updateDoc(userDoc, newFields);
  } catch(err){
      console.log(err);
  }
};


 const getAllTrampos = async () => {
  await getDocs(usersCollectionRef)
  .then((data) => {
    let trampos = []
    data.forEach((doc) => {
      trampos.push({
        id: doc.id,
        userId: doc.data().userId,
        nome: doc.data().nome,
        descricao: doc.data().descricao,
        valor: doc.data().valor,
        enderco: doc.data().enderco,
        obs: doc.data().obs,
        concluido: doc.data().concluido,
        bicador: doc.data().bicador,
      })
  })
  setData(trampos);
})
}

//  const getTrampos = async (id) => {
//   const data = await getDoc(doc(db, "trampos", id))
//   .then((data) => data.data())
//   return data;

// };

  return (
    <UserDataContext.Provider
      value={{
        createTrampos,
        getAllTrampos,
        data,
        error,
        loading,
        concluido,
       }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
