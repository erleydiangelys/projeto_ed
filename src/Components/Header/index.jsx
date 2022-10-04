import React from 'react'
import { UserContext } from '../../database/firebase/UserAuth';
import useMedia from '../../Hooks/useMedia';
import { Link } from "react-router-dom";
import { LogoutCircle } from '@styled-icons/remix-line/LogoutCircle'
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'
import { PaintRoll } from '@styled-icons/boxicons-regular/PaintRoll'
import { HappyBeaming } from '@styled-icons/boxicons-regular/HappyBeaming'


import { Container, Content, Logo, MenuContent, MenuMobile, Menu, Line } from './styles'

function Header({Contentdark}){
  const { error, loading, LogoutUser, login  } = React.useContext(UserContext);
  const menor = useMedia('(max-width: 769px)');

  return (
    <Container menor={menor}>
    {login && <Line Contentdark={Contentdark} />}
     {login &&
     <Content Contentdark={Contentdark}>
      <Logo Contentdark={Contentdark}>
      <Link to="/"> <h5>Logo</h5> </Link>

      </Logo >
      <MenuContent>
      {menor ? (
        <MenuMobile menor={menor}>
            <div><Link to="/trampos"><HappyBeaming />Trampos</Link></div>
            <div><Link to="/servicos"><PaintRoll />Serviços</Link></div>
            <div><Link to="/perfil"><UserCircle />perfil</Link></div>
            <div onClick={() => LogoutUser()}><LogoutCircle/> sair</div>
        </MenuMobile>
        ) : (
        <Menu>
          <div><Link to="/trampos">Meus Trampos<HappyBeaming /></Link></div>
          <div><Link to="/servicos">Meus Serviços <PaintRoll /></Link></div>
          <div><Link to="/perfil">perfil <UserCircle /></Link></div>
          <div onClick={() => LogoutUser()}>sair <LogoutCircle/> </div>
        </Menu>
        )}
      </MenuContent>
      </Content>
      }
      {login && <Line Contentdark={Contentdark} />}
    </Container>
  )
}

export default Header
