import React from 'react';
import { Link } from "react-router-dom";
import useMedia from '../../Hooks/useMedia';
import { UserContext } from '../../database/firebase/UserAuth';
import { UserDataContext } from '../../database/firebase/UserData';

import { Container, ContainerContent, ContentText, Name, ListTrampo, ListCard} from './styles';
import Button from '../../Components/Button';
import TrampoCard from '../../Components/TrampoCard';



function Home() {
  const { user, contentdark, setContentdark } = React.useContext(UserContext);
  const { error, loading, getAllTrampos,data, getAllTramposHome } = React.useContext(UserDataContext);
  // const [data, setData] = React.useState([])

  const menor = useMedia('(max-width: 769px)');

  React.useEffect(() => {
    const BuscaTrampos = async () => {
        await getAllTramposHome()
    }
    BuscaTrampos();
  }, []);


  return (

    <Container>
      <ContainerContent Contentdark={contentdark}>
      <ContentText>
        <Name>Trampos em aberto!</Name>
        {/* <Link to="/trampos/novo"><Button Contentdark={Contentdark}>+</Button> </Link> */}
      </ContentText>

      <ListTrampo>
        <ListCard>
          {data && data.map((item, index) => (
            <TrampoCard key={index} Contentdark={contentdark} data={item}/>
          ))}
        </ListCard>
      </ListTrampo>
      </ContainerContent>

    </Container>
  );
}

export default Home;
