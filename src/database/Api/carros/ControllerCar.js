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

const usersCollectionRef = collection(db, "carros");


export const createCar = async ({marca, modelo, ano}) => {
    try{
        await addDoc(usersCollectionRef, { marca, modelo, ano });
    } catch(err) {
        console.log(err);
    }
};


export const deleteCar = async (id) => {
    const userDoc = doc(db, "carros", id);
    await deleteDoc(userDoc);
  };


export  const updateCar = async (id,{marca, modelo, ano}) => {
    const userDoc = doc(db, "carros", id);
    const newFields = { marca, modelo, ano };
    console.log(id,{marca, modelo, ano})
    try {
        await updateDoc(userDoc, newFields);
    } catch(err){
        console.log(err);
    }
  };


export const getAllCar = async () => {
    const data = await getDocs(usersCollectionRef)
    .then((data) => data.docs.map((doc) => ({ ...doc.data()})))
    // console.log(data);
    return data;
  };

export const getCar = async (id) => {
    const data = await getDoc(doc(db, "carros", id))
    .then((data) => data.data())
    return data;

  };

