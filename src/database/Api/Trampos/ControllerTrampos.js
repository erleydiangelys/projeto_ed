import { db } from "../../../database/firebase/firebase-config";
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


export const createTrampos = async ({nome, descricao, valor, enderco, obs}) => {
    try{
        await addDoc(usersCollectionRef, { nome, descricao, valor, enderco, obs });

    } catch(err) {
        console.log(err);
    }
};


export const deleteTrampos = async (id) => {
    const userDoc = doc(db, "trampos", id);
    await deleteDoc(userDoc);
  };


export  const updateTrampos = async (id,{marca, modelo, ano}) => {
    const userDoc = doc(db, "trampos", id);
    const newFields = { marca, modelo, ano };
    console.log(id,{marca, modelo, ano})
    try {
        await updateDoc(userDoc, newFields);
    } catch(err){
        console.log(err);
    }
  };


export const getAllTrampos = async () => {
    const data = await getDocs(usersCollectionRef)
    .then((data) => data.docs.map((doc) => ({ ...doc.data()})))
    // console.log(data);
    return data;
  };

export const getTrampos = async (id) => {
    const data = await getDoc(doc(db, "trampos", id))
    .then((data) => data.data())
    return data;

  };

