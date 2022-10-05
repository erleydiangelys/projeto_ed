import React from 'react';
import { Link } from "react-router-dom";
import useMedia from '../../Hooks/useMedia';
import { UserContext } from '../../database/firebase/UserAuth';
import { UserDataContext } from '../../database/firebase/UserData';

import { Container, ContainerContent, ContentText, Name, ListTrampo, ListCard} from './styles';
import Button from '../../Components/Button';
import TrampoCard from '../../Components/TrampoCard';



function Trampo({Contentdark}) {
  const { user } = React.useContext(UserContext);
  const { error, loading, getAllTrampos } = React.useContext(UserDataContext);
  const [data, setData] = React.useState([])

  const menor = useMedia('(max-width: 769px)');

  React.useEffect(() => {
    const dados = [];
    const BuscaTrampos = () => {
       getAllTrampos().then((item) => {
        if(item) {
          item.map((dado) => {
            if((dado.userId === user.uid)) {
              dados.push(dado);
            }
        })
        }
      })
      setData(dados)
    }
    BuscaTrampos();
    console.log('teste');
  },[]);


  return (

    <Container>
      <ContainerContent Contentdark={Contentdark}>
      <ContentText>
        <Name>Meus Trampos</Name>
        <Link to="/trampos/novo"><Button Contentdark={Contentdark} size={1.5} radius={2}>+</Button> </Link>
      </ContentText>

      <ListTrampo>
        <ListCard>
          {data && data.map((item, index) => (
            <TrampoCard key={index} Contentdark={Contentdark} data={item} isDelete={true} />
          ))}
        </ListCard>
      </ListTrampo>
      </ContainerContent>

    </Container>
  );
}

export default Trampo;
