import React from 'react';
import { UserContext } from '../../database/firebase/UserAuth';
import Lottie from 'react-lottie';

import useMedia from '../../Hooks/useMedia';
import * as not404 from '../../Assets/json/404.json'

import { Container, ContainerContent, ContentText, Name, Img,} from './styles';



function PageNotFound({Contentdark}) {

  const menor = useMedia('(max-width: 769px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: not404,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };



  return (

    <Container>
      <ContainerContent Contentdark={Contentdark}>
      <ContentText>
        <Name>algo deu errado...</Name>

          <Img>
          {menor ? (
            <Lottie options={defaultOptions}
                height={300}
                width={280} />
                ) : (
            <Lottie options={defaultOptions}
                height={400}
                width={380} />
                )
          }
          </Img>
      </ContentText>

      </ContainerContent>

    </Container>
  );
}

export default PageNotFound;
