import React from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../database/firebase/UserAuth';
import { UserDataContext } from '../../database/firebase/UserData';
import {useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


import useMedia from '../../Hooks/useMedia';

import { Container, ContainerContent, ContentText, Name, Confirmacao,
         FormContant, Form, ItemForm, Input, Erro, Button, ContentDescription, Loading } from './styles';


const Validation = yup.object().shape({
  name: yup.string().required("é necessario inserir um nome"),
  descricao: yup.string().required('é necessario inserir uma descrição'),
  valor: yup.string().required('é necessario inserir o valor que deseja pagar pelo serviço'),
  endereco: yup.string(),
  obs: yup.string(),
})

function TrampoNovo({Contentdark}) {
  const menor = useMedia('(max-width: 769px)');

  const { user } = React.useContext(UserContext);
  const { error, createTrampos, loading, concluido } = React.useContext(UserDataContext);

  const { register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(Validation)
  });


  const handleLogin = async (e) => {
    const name = e.name
    const descricao = e.descricao
    const valor = e.valor
    const endereco = e.endereco
    const obs = e.obs
    await createTrampos(user.uid, name, descricao, valor, endereco, obs)
  }

  return (

    <Container>
      <ContainerContent Contentdark={Contentdark}>
      <ContentText>
        <Name>Novo Trampo</Name>
      </ContentText>
      { !concluido ? (
      <FormContant>
        {/* <ContentTitle Contentdark={Contentdark} >Faça login e vamos ao trabalho!</ContentTitle> */}
        <ContentDescription Contentdark={Contentdark} >Adicione os dados do serviço que você deseja disponibilizar!</ContentDescription>
      <Form onSubmit={handleSubmit(handleLogin)} Contentdark={Contentdark}>

        <ItemForm>
          <Input Contentdark={Contentdark} placeholder="o que precisa ser feito?*" type='text' name='name' {...register('name')} />
          <Erro>{errors.name?.message}</Erro>
        </ItemForm>

        <ItemForm>
          <Input Contentdark={Contentdark} placeholder="nós traga mais detalhes sobre o serviço*" type='text' name='descricao' {...register('descricao')} />
          <Erro>{errors.descricao?.message}</Erro>
        </ItemForm>

        <ItemForm>
          <Input Contentdark={Contentdark} placeholder="quanto quer pagar pelo serviço?*" type='text' name='valor' {...register('valor')} />
          <Erro>{errors.valor?.message}</Erro>
        </ItemForm>

        <ItemForm>
          <Input Contentdark={Contentdark} placeholder="qual o endereço? (opcional)" type='text' name='endereco' {...register('endereco')} />
          <Erro>{errors.endereco?.message}</Erro>
        </ItemForm>

        <ItemForm>
          <Input Contentdark={Contentdark} placeholder="alguma observação a acrescentar?" type='text' name='obs' {...register('obs')} />
          <Erro>{errors.obs?.message}</Erro>
        </ItemForm>



        <ItemForm>
          <Button type='submit' >{loading ? <Loading>.:</Loading> : 'Cadastrar'} </Button>
        </ItemForm>

      </Form>

      {error &&<Erro><p>{error}</p></Erro>}

      </FormContant>
      ) : (<Confirmacao><h5>Seu trampo tá pra jogo!</h5></Confirmacao>)}
      </ContainerContent>

    </Container>
  );
}

export default TrampoNovo;
