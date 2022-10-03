import React from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../database/firebase/UserAuth';
import {useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Lottie from 'react-lottie';

import useMedia from '../../Hooks/useMedia';
import { ReactComponent as BGoogle } from '../../Assets/bGoogle.svg';
import * as animationData from '../../Assets/json/animation.json'

import { Container, ContainerContent, ContentText, Name, Img,
         FormContant, Form, ItemForm, Input, Erro, Button,
          ButtonGoogle, ContentTitle, ContentDescription, Loading, LinkCadastro } from './styles';


const Validation = yup.object().shape({
  username: yup.string().required("o usuario é obrigatorio").email('insira um email valido'),
  password: yup.string().required('a senha é obrigatoria'),
})

function LoginForm({Contentdark}) {
  const menor = useMedia('(max-width: 769px)');

  const {error, loading, LoginUser, LoginGoogleDesktop, LoginGoogleMb } = React.useContext(UserContext);

  const { register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(Validation)
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleLogin = async (e) => {
    const username = e.username
    const password = e.password
    await LoginUser(username, password)
  }

  return (

    <Container>
      <ContainerContent Contentdark={Contentdark}>
      <ContentText>
        <Name>ZÉ DO BICO</Name>

          <Img>
          {menor ? (
            <Lottie options={defaultOptions}
                height={300}
                width={280} />
                ) : (
            <Lottie options={defaultOptions}
                height={400}
                width={380} />
                )
          }
          </Img>
      </ContentText>
      <FormContant>
        <ContentTitle Contentdark={Contentdark} >Faça login e vamos ao trabalho!</ContentTitle>
        <ContentDescription Contentdark={Contentdark} >encontre o quebra galho ou aquele serviço que está procurando...</ContentDescription>
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
          <Button type='submit' >{loading ? <Loading>.:</Loading> : 'Entrar'} </Button>
        </ItemForm>

      </Form>

      {error &&<Erro><p>{error}</p></Erro>}

      <ItemForm>
          <ButtonGoogle >
            {menor ? (
              <BGoogle onClick={() => LoginGoogleMb()}/>
            ) : (
            <BGoogle onClick={() => LoginGoogleDesktop()}/>
            )}
            <p>ACESSO VIA GOOGLE</p>
          </ButtonGoogle>
      </ItemForm>

      <LinkCadastro Contentdark={Contentdark}>Não tem uma conta? <Link to={'/cadastro'}>Cadastre-se</Link></LinkCadastro>
      </FormContant>
      </ContainerContent>

    </Container>
  );
}

export default LoginForm;
