import React from 'react';
import {useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Validation = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  content: yup.string().required()
})

function App() {
  const { register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(Validation)
  });

  const addPost = data => console.log(data);


  return (

    <div>
      <form onSubmit={handleSubmit(addPost)}>
        <div>
          <label>titulo</label>
          <input type='text' name='title' {...register('title')} />
          <p>{errors.title?.message}</p>
        </div>

        <div>
          <label>descrição</label>
          <input type='text' name='description' {...register('description')} />
          <p>{errors.description?.message}</p>
        </div>

        <div>
          <label>conteudo</label>
          <textarea type='text' name='content' {...register('content')}></textarea>
          <p>{errors.content?.message}</p>
        </div>

        <div>
          <button type='submit' >enviar</button>
        </div>

      </form>
    </div>
  );
}

export default App;
