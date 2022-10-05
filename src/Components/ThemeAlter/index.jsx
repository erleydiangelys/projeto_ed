import React from 'react';
import { SunFill } from '@styled-icons/bootstrap/SunFill'
import { Moon } from '@styled-icons/heroicons-solid/Moon'
import { Container } from './styles';
import useMedia from '../../Hooks/useMedia';
import { UserContext } from '../../database/firebase/UserAuth';

function ThemeAlter({Contentdark}) {
  const menor = useMedia('(max-width: 769px)');
  const {contentdark, setContentdark } = React.useContext(UserContext);

  return (
  <Container onClick={()=>setContentdark(!contentdark) } Contentdark={Contentdark} menor={menor}>
     {Contentdark ? (<SunFill />) : (<Moon/>)}
  </Container>
  )
}

export default ThemeAlter;
