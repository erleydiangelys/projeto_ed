import React from 'react'
import { UserContext } from '../../database/firebase/UserAuth';
import useMedia from '../../Hooks/useMedia';
import { Link } from "react-router-dom";
import { LogoutCircle } from '@styled-icons/remix-line/LogoutCircle'
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'
import { PaintRoll } from '@styled-icons/boxicons-regular/PaintRoll'
import { HappyBeaming } from '@styled-icons/boxicons-regular/HappyBeaming'


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
        <MenuMobile menor={menor}>
            <div><HappyBeaming />Meus Trampos</div>
            <div><PaintRoll />Meus Serviços </div>
            <div><UserCircle />perfil </div>
            <div onClick={() => LogoutUser()}><LogoutCircle/> sair</div>
        </MenuMobile>
        ) : (
        <Menu>
          <div>Meus Trampos<HappyBeaming /></div>
          <div>Meus Serviços <PaintRoll /></div>
           <div>perfil <UserCircle /></div>
          <div onClick={() => LogoutUser()}>sair <LogoutCircle/> </div>
        </Menu>
        )}
      </MenuContent>
      </Content>
      }
    </Container>
  )
}

export default Header
