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
const IntecCollectionRef = collection(db, "intencao");


export const UserDataContext = React.createContext();


export const UserData = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [dataIntec, setDataIntec] = useState([]);
  const [concluido, setConcluido] = useState(false);


  const createTrampos = async (userId, nome, descricao, valor, enderco, obs) => {
    setLoading(true)
    const concluido = false;
    const bicador = '';
    const intecao = '';
    try{
      // console.log(userId, nome, descricao, valor, enderco, obs);
        await addDoc(usersCollectionRef, { userId, nome, descricao, valor, enderco, obs, concluido, bicador, intecao });
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



  const updateTrampos = async (id, userId, nome, descricao, valor, enderco, obs, concluido, bicador, intecao ) => {
  const userDoc = doc(db, "trampos", id);
  const newFields = { userId, nome, descricao, valor, enderco, obs, concluido, bicador, intecao };
  // console.log(id,marca, modelo, ano )
  try {
      await updateDoc(userDoc, newFields);
  } catch(err){
      console.log(err);
  }
};

  const concluir = async (id) => {
  const userDoc = doc(db, "trampos", id);
  const trampo = await getDoc(doc(db, "trampos", id))
  console.log(trampo.data())
  const newFields = {
    userId: trampo.data().userId,
     nome: trampo.data().nome,
     descricao: trampo.data().descricao,
     valor: trampo.data().valor,
     enderco: trampo.data().enderco,
     obs: trampo.data().obs,
     concluido: true,
     bicador: trampo.data().bicador,
     intecao: trampo.data().intecao,
    };
  try {
    if(trampo){
      await updateDoc(userDoc, newFields);
    }
  } catch(err){
      console.log(err);
  }
};

  const bicar = async (id) => {
  const userDoc = doc(db, "trampos", id);
  const trampo = await getDoc(doc(db, "trampos", id))
  const user = JSON.parse(window.localStorage.getItem('user'))
  // console.log(user)
  const newFields = {
    userId: trampo.data().userId,
     nome: trampo.data().nome,
     descricao: trampo.data().descricao,
     valor: trampo.data().valor,
     enderco: trampo.data().enderco,
     obs: trampo.data().obs,
     concluido: trampo.data().concluido,
     bicador: user.uid,
     intecao: trampo.data().intecao,
    };
  try {
    if(trampo){
      await updateDoc(userDoc, newFields);
    }
  } catch(err){
      console.log(err);
  }

};
  const AlterIntencao = async (id, intID) => {
  const userDoc = doc(db, "trampos", id);
  const trampo = await getDoc(doc(db, "trampos", id))
  const user = JSON.parse(window.localStorage.getItem('user'))
  // console.log(user)
  const newFields = {
    userId: trampo.data().userId,
     nome: trampo.data().nome,
     descricao: trampo.data().descricao,
     valor: trampo.data().valor,
     enderco: trampo.data().enderco,
     obs: trampo.data().obs,
     concluido: trampo.data().concluido,
     bicador: trampo.data().bicador,
     intecao: intID,
    };
  try {
    if(trampo){
      await updateDoc(userDoc, newFields);
    }
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
        intecao: doc.data().intecao,
      })
  })
  setData(trampos);
})
}

 const getAllTramposHome = async () => {  //depois deve ser adicionada uma condição para não exibir os proprios trampos
  await getDocs(usersCollectionRef)
  .then((data) => {
    let trampos = []
    data.forEach((doc) => {
      if((!doc.data().concluido)) {
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
          intecao: doc.data().intecao,
        })
      }
  })
  setData(trampos);
})
}



//  const getTrampos = async (id) => {
//   const data = await getDoc(doc(db, "trampos", id))
//   .then((data) => data.data())
//   return data;

// };


//intenção de serviço

const createIntencao = async (nome, contato, idTrampo, IdUsuario, idLancador ) => {
  setLoading(true)
  try{
    console.log(nome, contato, idTrampo, IdUsuario, idLancador);
      await addDoc(IntecCollectionRef, { nome, contato, idTrampo, IdUsuario, idLancador }).then((item)=> {
        AlterIntencao(idTrampo,item.id)
      })
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


const getAllIntencaoCard = async (id) => {
  await getDocs(IntecCollectionRef)
  .then((data) => {
    let trampos = []
    data.forEach((doc) => {
        trampos.push({
          id: doc.id,
          nome: doc.data().nome,
          contato: doc.data().contato,
          idTrampo: doc.data().idTrampo,
          IdUsuario: doc.data().IdUsuario,
          idLancador: doc.data().idLancador,
        })
  })
  setDataIntec(trampos);
})
}


const deleteIntencao = async (id) => {
  const userDoc = doc(db, "intencao", id);
  await deleteDoc(userDoc);
};

  return (
    <UserDataContext.Provider
      value={{
        deleteTrampos,
        createTrampos,
        getAllTrampos,
        getAllTramposHome,
        concluir,
        bicar,
        createIntencao,
        AlterIntencao,
        getAllIntencaoCard,
        deleteIntencao,
        dataIntec,
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
