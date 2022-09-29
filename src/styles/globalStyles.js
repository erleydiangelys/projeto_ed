import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

${({ theme, Contentdark }) => css`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body{
    font-size: 2.4rem;
    font-family: ${({ theme }) => theme.font.family.default};
    background: ${
      Contentdark ? theme.colors.primaryColor : theme.colors.white
    };
  }

  h1, h2, h3, h4, h5, h6{
    font-family: ${({ theme }) => theme.font.family.secundary}
  }

  `}

`;
