import React from 'react';
import ImgAux from '../../Assets/png/perfil.png';
import { Trash } from '@styled-icons/heroicons-outline/Trash'
// import { PlayArrow } from '@styled-icons/material-twotone/PlayArrow'
import { CheckmarkCircle } from '@styled-icons/evaicons-solid/CheckmarkCircle'

import { Container, CardContent, Title, Content, Dados, Img, ContentButton, Itens } from './styles';
import Button from '../../Components/Button'

import { UserDataContext } from '../../database/firebase/UserData';
import { UserContext } from '../../database/firebase/UserAuth';
import PopUp from '../PopUp';

function TrampoCard({children, data, Contentdark, isDelete=false}) {
  const { deleteTrampos, concluir, bicar } = React.useContext(UserDataContext);
  const { user } = React.useContext(UserContext);

  const handleClick = (id) => {
    deleteTrampos(id).then(() => {
      window.location.reload(false);
    })
  }


  const handleConcluir = (id) => {
    concluir(id).then(() => {
      window.location.reload(false);
    })
  }

  // const handleBicar = (id) => {
  //   bicar(id).then(() => {
  //     // window.location.reload(false);
  //   })
  // }


  return (
    <Container>
      <CardContent>
        <Title>{data.nome}</Title>
        <Content Contentdark={Contentdark}>
          <Dados>
          <Itens Contentdark={Contentdark}><span>Descrição:</span><p>{data.descricao}</p></Itens>
          <Itens Contentdark={Contentdark}><span>Valor:</span><p>{data.valor}</p></Itens>
          <Itens Contentdark={Contentdark}><span>Endereço:</span> <p>{data.enderco ? (data.enderco) : ('Endereço não informado')}</p></Itens>
          <Itens Contentdark={Contentdark}><span>Observação:</span><p>{data.obs ? (data.obs) : ('Sem mais informações')}</p></Itens>
          { isDelete && <Itens Contentdark={Contentdark}><span>status:</span><p>{data.concluido ? ('Concluido') : ('Aguardando execução')}</p></Itens>}
          </Dados>
          <Img src={ImgAux}></Img>

          <ContentButton>
            { isDelete ?
            (
              <>
            <Button onClick={() => handleClick(data.id)} Contentdark={Contentdark} size={1.5} radius={1.4} isDelete={isDelete}>Deletar<Trash size={14}/></Button>
            {!data.concluido && <Button onClick={() => handleConcluir(data.id)} Contentdark={Contentdark} size={1.5} radius={1.4}>Conluir<CheckmarkCircle size={14}/></Button>}
              </>
            )
              :
              // (<Button onClick={() => handleBicar(data.id)} Contentdark={Contentdark} size={1.5} radius={1.4}>Quero fazer<PlayArrow size={14}/></Button>)
              (<PopUp id={data.id} oferId={data.userId} userId={user.uid}></PopUp>)
          }

          </ContentButton>
        </Content>
      </CardContent>
    </Container>
  );
}

export default TrampoCard;
