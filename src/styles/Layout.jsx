import React from 'react';

// import { Container } from './styles';
import Header from './../Components/Header/index';
import { Router } from './../routes';
import { GlobalStyle } from './globalStyles';
import { UserContext } from '../database/firebase/UserAuth';
import ThemeAlter from './../Components/ThemeAlter/index';

function Layout() {
  const {contentdark, setContentdark } = React.useContext(UserContext);
  return (
    <>
    <ThemeAlter Contentdark={contentdark}/>
    <Header Contentdark={contentdark}/>
    <Router Contentdark={contentdark}/>
    <GlobalStyle Contentdark={contentdark} />
    </>
  );
}

export default Layout;
