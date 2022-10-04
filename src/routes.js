import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { UserContext } from './database/firebase/UserAuth';

import Home from './Templats/Home';
import Loginform from './Templats/LoginForm';
import PageNotFound from './Templats/NotFound';
import CadastroForm from './Templats/CadastroForm';
import Perfil from './Templats/Perfil';
import Trampo from './Templats/Trampo';
import TrampoNovo from './Templats/TrampoNovo';
import Servico from './Templats/Servico';

export const Router = ({Contentdark}) => {
  const { login } = React.useContext(UserContext);
  // console.log(login);

  return(
        <Routes Contentdark={Contentdark}>
          <Route path="login/" element={ !login ? (<Loginform Contentdark={Contentdark} />) : (<Navigate to="/"/>)} />
          <Route path="cadastro/" element={login ? (<CadastroForm Contentdark={Contentdark} />) : (<Navigate to="/login"/>)} />
          <Route path="perfil/" element={login ? (<Perfil Contentdark={Contentdark} />) : (<Navigate to="/login"/>)} />
          <Route path="trampos/" element={login ? (<Trampo Contentdark={Contentdark} />) : (<Navigate to="/login"/>)} />
          <Route path="trampos/novo" element={login ? (<TrampoNovo Contentdark={Contentdark} />) : (<Navigate to="/login"/>)} />
          <Route path="servicos/" element={login ? (<Servico Contentdark={Contentdark} />) : (<Navigate to="/login"/>)} />
          <Route path="/" element={ login ? (<Home Contentdark={Contentdark} />) : (<Navigate to="/login"/>)} />
          <Route path="*" element={<PageNotFound Contentdark={Contentdark}/>} />
        </Routes>
  )
}

export default Router;
