import React from 'react';
import ImgAux from '../../Assets/png/perfil.png';

import { Container, CardContent, Title, Content, Dados, Img, ContentButton } from './styles';
import { Button } from './../../Templats/LoginForm/styles';

function TrampoCard({children, data, Contentdark}) {
  return (
    <Container>
      <CardContent>
        <Title>{data.nome}</Title>
        <Content Contentdark={Contentdark}>
          <Dados>
          <p><span>descrição:</span> {data.descricao}</p>
          <p><span>valor:</span>{data.valor}</p>
          <p><span>endereço:</span> {data.enderco}</p>
          <p><span>observação:</span> {data.obs}</p>
          </Dados>
          <Img src={ImgAux}></Img>

          <ContentButton>
            <Button>Quero fazer</Button>
          </ContentButton>
        </Content>
      </CardContent>
    </Container>
  );
}

export default TrampoCard;
