import React from 'react';
import { useNavigate } from 'react-router-dom';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './index.css';

import { UserDataContext } from '../../database/firebase/UserData';
import { UserContext } from '../../database/firebase/UserAuth';

import { Container,Title, FormContant, Form, ItemForm, Input, Erro, Button, Loading, Enviando } from './styles';

const Validation = yup.object().shape({
  nome: yup.string().required("um nome ou apelido é obrigatorio"),
  contato: yup.string().required('um contato é obrigatorio'),
})

function PopUp({id, userId, oferId, Contentdark}) {
  const { bicar, createIntencao, AlterIntencao, loading } = React.useContext(UserDataContext);
  const {error } = React.useContext(UserContext);
  const navigate = useNavigate();

  const { register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(Validation)
  });



  const handleIntenc = async (e) => {
    const nome = e.nome
    const contato = e.contato
    const idTrampo = id
    const IdUsuario = userId
    const idLancador = oferId
    createIntencao(nome, contato, idTrampo, IdUsuario, idLancador ).then(() => {
      navigate('/');
    })
      // handleBicar(idTrampo);
  }

  return (
  <Popup trigger={<Button className="Button"> Quero fazer </Button>} modal>
    <Container>
      <Container>
        <Title>deixe seu contato</Title>

        {!loading ? (
        <FormContant>
          <Form onSubmit={handleSubmit(handleIntenc)} Contentdark={Contentdark}>
            <ItemForm>
              {/* <Label Contentdark={Contentdark} >username</Label> */}
              <Input Contentdark={Contentdark} placeholder="Como gostaria de ser chamado?" type='text' name='nome' {...register('nome')} />
              <Erro>{errors.nome?.message}</Erro>
            </ItemForm>

            <ItemForm >
              {/* <Label Contentdark={Contentdark} >senha</Label> */}
              <Input Contentdark={Contentdark} placeholder="whatsapp, telefone ou rede social para contato" type='contato' name='contato' {...register('contato')} />
              <Erro>{errors.contato?.message}</Erro>
            </ItemForm>

            <ItemForm>
              <Button type='submit' >{loading ? <Loading>.:</Loading> : 'Enviar'} </Button>
            </ItemForm>

          </Form>

          {error && <Erro><p>{error}</p></Erro>}

        </FormContant>) :
        (
          <Enviando>enviando, aguarde...</Enviando>
        )
      }
      </Container>
    </Container>
  </Popup>
  )
}

export default PopUp;
