import React from 'react';
import { Link } from "react-router-dom";

import useMedia from '../../Hooks/useMedia';
import { UserContext } from '../../database/firebase/UserAuth';
import { UserDataContext } from '../../database/firebase/UserData';

import perfilPhoto from '../../Assets/png/perfil.png';


import { Container, ContainerContent, ContentPerfil, Name, Img, Info, ItemInfo} from './styles';



function Perfil({Contentdark}) {
  const { user  } = React.useContext(UserContext);
  const { getAllTramposUser, data } = React.useContext(UserDataContext);
  const [usuario, setUsuario] = React.useState(JSON.parse(window.localStorage.getItem('user')))

  const menor = useMedia('(max-width: 769px)');

  React.useEffect(() => {
    const BuscaTrampos = async () => {
        await getAllTramposUser(usuario.uid)
    }
    BuscaTrampos();
  }, []);



  return (

    <Container>
      <ContainerContent Contentdark={Contentdark}>
      <ContentPerfil>
        <Name>{user.displayName ? (user.displayName) : (user.email) }</Name>
        <Img src={user.photoURL ? (user.photoURL) : (perfilPhoto)} alt='Photo perfil' />

        {/* <button onClick={() => criarUsuario(user)}>Teste</button> */}
        <Info Contentdark={Contentdark}>
        <Link to="/trampos">
          <ItemInfo Contentdark={Contentdark}>
            <h4>Trampos</h4>
            <h5>{data.length}</h5>
          </ItemInfo>
          </Link>
        </Info>
      </ContentPerfil>

      </ContainerContent>

    </Container>
  );
}

export default Perfil;
