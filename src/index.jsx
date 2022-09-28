import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';
import Loginform from './Templats/LoginForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
const dark = true;
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Loginform Contentdark={dark} />
      <GlobalStyle Contentdark={dark} />
    </ThemeProvider>
  </React.StrictMode>
);
