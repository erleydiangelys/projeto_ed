import React from 'react';
import ImgAux from '../../Assets/png/perfil.png';
import { Trash } from '@styled-icons/heroicons-outline/Trash'
import { PlayArrow } from '@styled-icons/material-twotone/PlayArrow'
import { Container, CardContent, Title, Content, Dados, Img, ContentButton, Itens } from './styles';
import Button from '../../Components/Button'

import { UserDataContext } from '../../database/firebase/UserData';

function TrampoCard({children, data, Contentdark, isDelete=false}) {
  const { deleteTrampos } = React.useContext(UserDataContext);
  const handleClick = (id) => {
    deleteTrampos(id)
  }

  return (
    <Container>
      <CardContent>
        <Title>{data.nome}</Title>
        <Content Contentdark={Contentdark}>
          <Dados>
          <Itens Contentdark={Contentdark}><span>Descrição:</span><p>{data.descricao}</p></Itens>
          <Itens Contentdark={Contentdark}><span>Valor:</span><p>{data.valor}</p></Itens>
          {/* <Itens Contentdark={Contentdark}><span>id:</span><p>{data.id}</p></Itens> */}
          <Itens Contentdark={Contentdark}><span>Endereço:</span> <p>{data.enderco ? (data.enderco) : ('Endereço não informado')}</p></Itens>
          <Itens Contentdark={Contentdark}><span>Observação:</span><p>{data.obs ? (data.obs) : ('Sem mais informações')}</p></Itens>
          </Dados>
          <Img src={ImgAux}></Img>

          <ContentButton>
            { isDelete ?
            (
              <>
            <Button onClick={() => handleClick(data.id)} Contentdark={Contentdark} size={1.5} radius={1.4} isDelete={isDelete}>Deletar<Trash size={14}/></Button>
            {!data.concluido && <Button Contentdark={Contentdark} size={1.5} radius={1.4}>Conluir<Trash size={14}/></Button>}
              </>
            )
              :
              (<Button Contentdark={Contentdark} size={1.5} radius={1.4}>Quero fazer<PlayArrow size={14}/></Button>)
          }
          </ContentButton>
        </Content>
      </CardContent>
    </Container>
  );
}

export default TrampoCard;
