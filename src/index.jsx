import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { UserAuth } from './database/firebase/UserAuth';
import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';

import App from './app';
import Loginform from './Templats/LoginForm';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import PageNotFound from './Templats/NotFound';
import { Router } from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
const dark = true;
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <UserAuth>
        <ThemeProvider theme={theme}>
            <Router Contentdark={dark}/>
          <GlobalStyle Contentdark={dark} />
        </ThemeProvider>
      </UserAuth>
     </BrowserRouter>
  </React.StrictMode>
);
