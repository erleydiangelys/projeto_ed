import styled, { css, keyframes } from 'styled-components';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width:1000px;
  padding: 0.5rem;
  margin: 2rem auto;
`;


export const ContainerContent = styled.div`
${({ theme, Contentdark }) => css`
color: ${Contentdark ? theme.colors.white : theme.colors.primaryColor};
background: ${Contentdark ? theme.colors.primaryColor : theme.colors.white};
`};
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  border-radius: 15px;

  @media(min-width: 650px){
    grid-template-columns: 1fr 1fr;
    margin-top: 5rem;
  }
  `;

  export const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  `;

export const FormContant = styled.div`
${({ theme}) => css`
  border: 1px solid ${theme.colors.secondaryColor};
  `};
  border-radius: 15px;
  padding:1.5rem;
  margin: 1rem;

  @media(min-width: 650px){
    padding:3rem;
  }
`;


export const ContentTitle = styled.h3`
${({ theme, Contentdark }) => css`
  color: ${theme.colors.secondaryColor};
  `};
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const ContentDescription = styled.h6`
${({ theme, Contentdark }) => css`
${Contentdark ? theme.colors.primaryColor : theme.colors.white};
  `};
  text-align: center;
  margin-bottom: 2rem;
`;

export const Name = styled.h1`
${({ theme }) => css`
  color: ${theme.colors.secondaryColor};
  font-family: ${theme.font.family.titulo};
  `};
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 3rem;

  &::after {
    content: ' ⚒️';
    font-size: 2.4rem;

  }
`;

export const Img = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;



  @media(min-width: 650px){
    padding: 2rem;
    max-width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 0rem;
  max-width: 100%;
`;

export const ItemForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;


export const Input = styled.input`
${({ theme, Contentdark }) => css`
  border: 1px solid ${theme.colors.secondaryColor};
  color: ${theme.colors.secondaryColor};
  background: ${Contentdark ? theme.colors.primaryColor : theme.colors.white};
  `};
  border-radius: 5px;
  height: 3.5rem;
  font-size: 1.5rem;
  text-align: center;


&:focus,
&:hover {
  outline: none;
  ${({ theme}) => css`
  border-color: ${theme.colors.secondaryColorHover};
  box-shadow: 0 0 0 1px ${theme.colors.secondaryColorHover};
  `};
}
`;

export const Erro = styled.p`
${({ theme }) => css`
  color: ${theme.colors.errorColor};
  `};
  margin-top: -0.8rem;
  font-size: 1.2rem;
  text-align: center;
`;


export const Button = styled.button`
${({ theme}) => css`
border: none;
  background: ${theme.colors.secondaryColor};
  color: ${theme.colors.white};
  `};
  font-size: 2rem;
  padding: 1rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  cursor: pointer;

&:hover {
  ${({ theme}) => css`
  background: ${theme.colors.secondaryColorHover};
  color: ${theme.colors.white};
  border-color: ${theme.colors.secondaryColor};
  box-shadow: 0 0 0 1px ${theme.colors.secondaryColor};
  transform: scale(1.005);
  `};
}

@media(min-width: 500px){
    margin-top: 2.5rem;
  }
`;


export const ButtonGoogle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  & > svg {
    max-width: 4.5rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }

  & > p {
    ${({ theme }) => css`
  color: ${theme.colors.secondaryColor};
  `};
    font-size: 1rem;
    font-weight: bold;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


export const Loading = styled.div`
    text-align: center;
    animation: ${rotate} 0.5s linear infinite;

`;

export const LinkCadastro = styled.p`
${({ theme, Contentdark }) => css`
  color: ${Contentdark ? theme.colors.white : theme.colors.primaryColor};
  `};
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1rem;

  & > a {
    color: #2E64FE;
    text-decoration: none;

    &:hover {
      color: #2ECCFA;
    }
  }
`;

export const Confirmacao = styled.div`
  ${({ theme }) => css`
  color: ${theme.colors.secondaryColor};
  `};
    display: flex;
    justify-content: center;
    margin-top: 40%;
    position: relative;
  &::before {
    content: '✔️';
    position: absolute;
    top: 20px;
    font-size: 6rem;
  }
  & > h5 {
    ${({ theme }) => css`
  color: ${theme.colors.secondaryColor};
  `};
  }
`;
