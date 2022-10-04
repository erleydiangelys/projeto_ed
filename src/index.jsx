import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { UserAuth } from './database/firebase/UserAuth';
import { UserData } from './database/firebase/UserData';

import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';

import { Router } from './routes';
import Header from './Components/Header/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
const dark = true;
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <UserAuth>
        <UserData>
        <ThemeProvider theme={theme}>
        <Header Contentdark={dark}/>
            <Router Contentdark={dark}/>
          <GlobalStyle Contentdark={dark} />
        </ThemeProvider>
        </UserData>
      </UserAuth>
     </BrowserRouter>
  </React.StrictMode>
);
