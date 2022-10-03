import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { UserContext } from './database/firebase/UserAuth';

import Home from './Templats/Home';
import Loginform from './Templats/LoginForm';
// import ProtectedRoute from './Components/Helper/ProtectedRoute';
import PageNotFound from './Templats/NotFound';
import CadastroForm from './Templats/CadastroForm';
import Header from './Components/Header';

export const Router = ({Contentdark}) => {
  const { login } = React.useContext(UserContext);
  console.log(login);

  return(
        <Routes Contentdark={Contentdark}>
          <Route path="login/" element={ !login ? (<Loginform Contentdark={Contentdark} />) : (<Navigate to="/"/>)} />
          <Route path="cadastro/" element={<CadastroForm Contentdark={Contentdark} />} />
          <Route path="/" element={ login ? (<Home Contentdark={Contentdark} />) : (<Navigate to="/login"/>)} />
          <Route path="*" element={<PageNotFound Contentdark={Contentdark}/>} />
        </Routes>
  )

}

export default Router;
