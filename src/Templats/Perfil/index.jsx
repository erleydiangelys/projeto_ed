import React from 'react';

import useMedia from '../../Hooks/useMedia';
import { UserContext } from '../../database/firebase/UserAuth';
import perfilPhoto from '../../Assets/png/perfil.png';


import { Container, ContainerContent, ContentPerfil, Name, Img, Skeleton} from './styles';



function Perfil({Contentdark}) {
  const { error, loading, user  } = React.useContext(UserContext);

  const menor = useMedia('(max-width: 769px)');


  return (

    <Container>
      <ContainerContent Contentdark={Contentdark}>
      <ContentPerfil>
        <Name>{user.displayName ? (user.displayName) : (user.email) }</Name>
        <Img src={user.photoURL ? (user.photoURL) : (perfilPhoto)} alt='Photo perfil' />

        {/* <button onClick={() => criarUsuario(user)}>Teste</button> */}
      </ContentPerfil>


      </ContainerContent>

    </Container>
  );
}

export default Perfil;
