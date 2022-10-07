import styled, { css, keyframes } from 'styled-components';



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

export const ContentPerfil = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  `;

export const Img = styled.img`
  width: 4rem;
  width: 150px;
  width: 150px;
  border-radius: 50px;
`;


export const Name = styled.h1`
${({ theme }) => css`
  color: ${theme.colors.secondaryColor};
  font-family: ${theme.font.family.titulo};
  `};
  text-align: center;
  margin-bottom: 1.5rem;
  margin-top: 6rem;
  font-size: 2.5rem;

`;


export const Info = styled.div`
  display: flex;
${({ theme, Contentdark }) => css`
  color: ${theme.colors.secondaryColor};
  border: 1px solid ${theme.colors.secondaryColor};
  margin-top: 2rem;
  border-radius: 0 0 15px 15px;
  & > a {
    text-decoration: none;
    color: currentColor;
  }
`};

`;

export const ItemInfo = styled.div`

  & > h4 {
    ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.white};
    background: ${theme.colors.secondaryColor};
    padding: 0.5rem;
  `};
  }
  & > h5 {
    font-size: 2rem;
    padding: 0.5rem;
  }

`;


