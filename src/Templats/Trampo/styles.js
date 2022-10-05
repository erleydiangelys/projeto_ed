import styled, { css } from 'styled-components';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width:1000px;
  padding: 0.5rem;
  margin: 0 auto;
  margin-bottom: 3rem;

  @media(min-width: 650px){
    margin-top: 3rem;
  }
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

  `;

  export const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    & a {
    text-decoration:none;
  }
  `;



export const ContentTitle = styled.h3`
${({ theme, Contentdark }) => css`
  color: ${theme.colors.secondaryColor};
  `};
  text-align: center;
  margin-bottom: 1.5rem;
`;


export const Name = styled.h1`
${({ theme }) => css`
  color: ${theme.colors.secondaryColor};
  font-family: ${theme.font.family.titulo};
  `};
  text-align: center;
  margin-bottom: 0rem;
  margin-top: 1rem;
  font-size: 4rem;

  @media(min-width: 650px){
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

`;

export const ListTrampo = styled.div`
${({ theme, Contentdark }) => css`
  /* background ${Contentdark ? theme.colors.grayMid : theme.colors.grayDark}; */
  `};
  display: flex;
  flex-direction: column;
`;

export const ListCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
  margin: 1.5rem;


  @media(min-width: 650px){
    grid-template-columns: 1fr 1fr;
  }
`;




