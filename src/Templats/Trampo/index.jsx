import React from 'react';
import { Link } from "react-router-dom";
import useMedia from '../../Hooks/useMedia';
import { UserContext } from '../../database/firebase/UserAuth';
import { UserDataContext } from '../../database/firebase/UserData';

import { Container, ContainerContent, ContentText, Name, ListTrampo, ListCard} from './styles';
import Button from '../../Components/Button';
import TrampoCard from '../../Components/TrampoCard';

function handleClick(e){
  console.log('teste');
}


function Trampo({Contentdark}) {
  const { user } = React.useContext(UserContext);
  const [usuario, setUsuario] = React.useState(JSON.parse(window.localStorage.getItem('user')))
  const { error, loading, getAllTrampos, data } = React.useContext(UserDataContext);
  // const [data, setData] = React.useState([])

  const menor = useMedia('(max-width: 769px)');

  React.useEffect(() => {
    const BuscaTrampos = async () => {
        await getAllTrampos()
    }
    BuscaTrampos();
  }, []);


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
