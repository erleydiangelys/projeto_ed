import React from 'react';
import {useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Lottie from 'react-lottie';

import useMedia from '../../Hooks/useMedia';
import { ReactComponent as BGoogle } from '../../Assets/bGoogle.svg';
import * as animationData from '../../Assets/animation.json'

import { Container, ContainerContent, ContentText, Name, Img,
         FormContant, Form, ItemForm, Input, Erro, Button,
          ButtonGoogle, ContentTitle, ContentDescription } from './styles';


const Validation = yup.object().shape({
  username: yup.string().required("o usuario é obrigatorio"),
  password: yup.string().required('a senha é obrigatoria'),
})

function LoginForm({Contentdark}) {
  const menor = useMedia('(max-width: 769px)');

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

  const handleLogin = data => console.log(data);


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
          <Input Contentdark={Contentdark} placeholder="Qual será seu nome do usuario?" type='text' name='username' {...register('username')} />
          <Erro>{errors.username?.message}</Erro>
        </ItemForm>

        <ItemForm >
          {/* <Label Contentdark={Contentdark} >senha</Label> */}
          <Input Contentdark={Contentdark} placeholder="e sua senha?" type='password' name='password' {...register('password')} />
          <Erro>{errors.password?.message}</Erro>
        </ItemForm>

        {/*
        <ItemForm>
          <Label Contentdark={Contentdark} >conteudo</Label>
          <TextArea Contentdark={Contentdark} type='text' name='content' {...register('content')}></TextArea>
          <Erro>{errors.content?.message}</Erro>
        </ItemForm> */}

        <ItemForm>
          <Button type='submit' >Entrar</Button>
        </ItemForm>

      </Form>

      <ItemForm>

          <ButtonGoogle>
            <BGoogle />
            <p>LOGIN VIA GOOGLE</p>
          </ButtonGoogle>
        </ItemForm>
      </FormContant>
      </ContainerContent>

    </Container>
  );
}

export default LoginForm;
