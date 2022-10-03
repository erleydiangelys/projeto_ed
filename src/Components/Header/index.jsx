import React from 'react'
import { UserContext } from '../../database/firebase/UserAuth';
import useMedia from '../../Hooks/useMedia';
import { Link } from "react-router-dom";
import { LogoutCircleR } from '@styled-icons/remix-line/LogoutCircleR'
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'


import { Container, Content, Logo, MenuContent, MenuMobile, Menu, MenuItem } from './styles'

function Header({Contentdark}){
  const { error, loading, LogoutUser, login  } = React.useContext(UserContext);
  const menor = useMedia('(max-width: 769px)');

  return (
    <Container menor={menor}>
     {login &&
     <Content Contentdark={Contentdark}>
      <Logo Contentdark={Contentdark}>
      <Link to="/"> <h5>Logo</h5> </Link>

      </Logo >
      <MenuContent>
      {menor ? (
        <MenuMobile>
            <div><UserCircle />Meus Trampos</div>
            <div><UserCircle />Meus Serviços </div>
            <div><UserCircle />perfil </div>
            <div onClick={() => LogoutUser()}><LogoutCircleR/> sair</div>
        </MenuMobile>
        ) : (
        <Menu>
          <div>Meus Trampos<UserCircle /></div>
          <div>Meus Serviços <UserCircle /></div>
           <div>perfil <UserCircle /></div>
          <div onClick={() => LogoutUser()}>sair <LogoutCircleR/> </div>
        </Menu>
        )}
      </MenuContent>
      </Content>
      }
    </Container>
  )
}

export default Header
