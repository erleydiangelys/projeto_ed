import React from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../database/firebase/UserAuth';
import {useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import useMedia from '../../Hooks/useMedia';
import * as animationData from '../../Assets/json/animation.json'

import { Container, ContainerContent, ContentText, Name,
         FormContant, Form, ItemForm, Input, Erro, Button,
          ContentTitle, ContentDescription, Loading } from './styles';


const Validation = yup.object().shape({
  username: yup.string().required("o usuario é obrigatorio").email('insira um email valido'),
  password: yup.string().required('a senha é obrigatoria').min(6, 'senha precisa ter mais de 6 caracteres'),
})

function CadastroForm({Contentdark}) {
  const menor = useMedia('(max-width: 769px)');
  const {error, loading, LoginUser, CreateUser } = React.useContext(UserContext);
  const { register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(Validation)
  });

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  const handleLogin = async (e) => {
    const username = e.username
    const password = e.password
    await CreateUser(username, password)
  }

  return (

    <Container>
      <ContainerContent Contentdark={Contentdark}>
        <ContentText>
          <Name>ZÉ DO BICO</Name>

        </ContentText>
        <FormContant>
          <ContentTitle Contentdark={Contentdark} >Seja bem vindo!</ContentTitle>
          <ContentDescription Contentdark={Contentdark} >Preencha os campos e vamos ao trabalho...</ContentDescription>
          <Form onSubmit={handleSubmit(handleLogin)} Contentdark={Contentdark}>
            <ItemForm>
              {/* <Label Contentdark={Contentdark} >username</Label> */}
              <Input Contentdark={Contentdark} placeholder="Insira um email para começar" type='text' name='username' {...register('username')} />
              <Erro>{errors.username?.message}</Erro>
            </ItemForm>

            <ItemForm >
              {/* <Label Contentdark={Contentdark} >senha</Label> */}
              <Input Contentdark={Contentdark} placeholder="e sua senha?" type='password' name='password' {...register('password')} />
              <Erro>{errors.password?.message}</Erro>
            </ItemForm>

            <ItemForm>
              <Button type='submit' >{loading ? <Loading>.:</Loading> : 'Cadastrar'} </Button>
            </ItemForm>

          </Form>

          {error && <Erro><p>{error}</p></Erro>}

        </FormContant>
      </ContainerContent>

    </Container>
  );
}

export default CadastroForm;
