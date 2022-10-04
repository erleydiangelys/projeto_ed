import React from 'react';
import { Link } from "react-router-dom";
import useMedia from '../../Hooks/useMedia';
import { UserContext } from '../../database/firebase/UserAuth';

import { Container, ContainerContent, ContentText, Name, Img,} from './styles';
import Button from '../../Components/Button';



function Trampo({Contentdark}) {
  const {error, loading, LogoutUser  } = React.useContext(UserContext);

  const menor = useMedia('(max-width: 769px)');


  return (

    <Container>
      <ContainerContent Contentdark={Contentdark}>
      <ContentText>
        <Name>Aqui será a Trampos</Name>
        <Link to="/trampos/novo"> <Button Contentdark={Contentdark}>+</Button> </Link>

      </ContentText>

      </ContainerContent>

    </Container>
  );
}

export default Trampo;
