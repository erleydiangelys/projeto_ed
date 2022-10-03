import React from 'react';

import useMedia from '../../Hooks/useMedia';
import { UserContext } from '../../database/firebase/UserAuth';

import { Container, ContainerContent, ContentText, Name, Img,} from './styles';



function Home({Contentdark}) {
  const {error, loading, LogoutUser  } = React.useContext(UserContext);

  const menor = useMedia('(max-width: 769px)');


  return (

    <Container>
      <ContainerContent Contentdark={Contentdark}>
      <ContentText>
        <Name>Aqui sera a home</Name>

      </ContentText>

      </ContainerContent>

    </Container>
  );
}

export default Home;
