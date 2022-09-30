import styled, { css } from 'styled-components';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width:1000px;
  padding: 0.5rem;
  margin: 3rem auto;
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
  margin-top: 6rem;
  font-size: 4rem;

`;

export const Img = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;



  @media(min-width: 650px){
    padding: 2rem;
    max-width: 100%
  }
`;




