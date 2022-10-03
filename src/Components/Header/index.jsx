import React from 'react'
import { UserContext } from '../../database/firebase/UserAuth';
import useMedia from '../../Hooks/useMedia';
import { Link } from "react-router-dom";
import { LogoutCircleR } from '@styled-icons/remix-line/LogoutCircleR'


import { Container, Content, Logo, MenuContent } from './styles'

function Header({Contentdark}){
  const { error, loading, LogoutUser, login  } = React.useContext(UserContext);
  const menor = useMedia('(max-width: 769px)');

  return (
    <Container>
     {login &&
     <Content Contentdark={Contentdark}>
      <Logo Contentdark={Contentdark}>
      <Link to="/"> <h5>Logo</h5> </Link>

      </Logo >
      <MenuContent>
       <div onClick={() => LogoutUser()}>sair </div>
      </MenuContent>
      </Content>
      }
    </Container>
  )
}

export default Header
