import React from 'react';
import {Routes, Route } from 'react-router-dom';

import { UserContext } from './database/firebase/UserAuth';

import App from './app';
import Loginform from './Templats/LoginForm';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import PageNotFound from './Templats/NotFound';
import CadastroForm from './Templats/CadastroForm';

export const Router = ({Contentdark}) => {
  const { login } = React.useContext(UserContext);
  // console.log(login);

  return(
        <Routes>
          <Route path="login/" element={<Loginform Contentdark={Contentdark} />} />
          <Route path="cadastro/" element={<CadastroForm Contentdark={Contentdark} />} />
          <Route path="/" element={<ProtectedRoute><App /></ProtectedRoute>} />
          <Route path="*" element={<PageNotFound Contentdark={Contentdark}/>} />
        </Routes>
  )

}

export default Router;
