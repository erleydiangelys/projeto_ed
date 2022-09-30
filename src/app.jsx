import React from 'react';
import {useForm } from 'react-hook-form';
import { UserContext } from './database/firebase/UserAuth';
// import { UploadImg, getImg } from './database/firebase/AuthUser'
// import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Validation = yup.object().shape({
})

function App() {
  const { imgURL, progressPorcent, getImg, UploadImg, ValidUser, imgName } = React.useContext(UserContext);
  const { register, handleSubmit, formState:{errors}} = useForm();

  const addPost = async (e) => {
    await UploadImg(e)
  }


  return (

    <div>
      <form onSubmit={handleSubmit(addPost)}>
        <div>
          <label>titulo</label>
          <input type='file' name='img' {...register('img')} />
          {/* <p>{errors.title?.message}</p> */}
        </div>

        {!imgURL && <p>{progressPorcent}%</p>}
        {imgURL && <img src={imgURL} alt="Imagem" height={200} />}
        {imgURL && <p>{imgName}</p>}

        <div>
          <button type='submit' >enviar</button>

          <button onClick={()=> console.log(getImg('images/cururu.jpg'))} >enviar</button>
          <button onClick={()=> console.log(ValidUser())} >enviar</button>
        </div>

      </form>
    </div>
  );
}

export default App;
