import { Heading } from '../../Components/Heading';
import { Container, Wrapper, Login } from './styles';
import { Button } from '../../Components/Button';
import P from 'prop-types';
import useForm from '../../Hooks/useForm';
import { Input } from '../../Components/Input/index';

function Loginform({ Contentdark }) {
  const username = useForm();
  const password = useForm();
  return (
    <Container>
      <Wrapper>
        <Heading colorDark={Contentdark} size="medium" align="center">
          Login
        </Heading>
        <Login>
          <>
            <Input
              colorDark={Contentdark}
              label="Usuário"
              type="text"
              name="username"
              size="xsmall"
              {...username}
            />
            <Input
              colorDark={Contentdark}
              label="Senha"
              type="password"
              name="password"
              size="xsmall"
              {...password}
            />
            <Button colorDark={Contentdark}>Fazer Login</Button>
          </>
        </Login>
      </Wrapper>
    </Container>
  );
}

Loginform.propTypes = {
  Contentdark: P.bool,
  size: P.oneOf([
    'small',
    'xsmall',
    'medium',
    'large',
    'xlarge',
    'huge',
    'xhuge',
  ]),
};

export default Loginform;
