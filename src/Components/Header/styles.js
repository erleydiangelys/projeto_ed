import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
${({ theme, Contentdark, menor }) => css`
background: ${Contentdark ? theme.colors.primaryColor : theme.colors.white};
  top: ${menor ? 'none' : '0px'};
  bottom: ${menor ? '0px' : 'none'};
`};
  position: fixed;
  width: 100%;
  z-index: 100;
  height: 5rem;
  /* margin-bottom: 1rem; */
  & > h1 {
    font-size: 2rem;
  }

  @media(min-width: 650px){
    grid-template-columns: 1fr 1fr;
  }
`;

export const Content = styled.nav`
${({ theme, Contentdark, menor }) => css`
color: ${Contentdark ? theme.colors.white : theme.colors.primaryColor};
`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  height: 5rem;
  padding: 0 2rem;
  font-size: 1.8rem;

`;

export const Logo = styled.div`
${({ theme, Contentdark }) => css`
  color: ${Contentdark ? theme.colors.white : theme.colors.primaryColor};

  & > a {
    color: ${Contentdark ? theme.colors.white : theme.colors.primaryColor};
    text-decoration: none;
  }
`};
`;


export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: row;
  `;

const menuCss = css`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  gap: 2rem;

  & > div {
    display: grid;
    grid-template-columns: 1fr 30px;
    align-items: center;
    align-content: center;
    cursor: pointer;

    &:hover {
      ${({ theme, Contentdark, menor }) => css`
          color: ${theme.colors.secondaryColor};
          transform: scale(1.05);
      `};
    }

    & > a {
      display: grid;
      grid-template-columns: 1fr 30px;
      text-decoration: none;
      align-items: center;
      align-content: center;
      cursor: pointer;
      color: currentColor;

      & > svg {
      width: 20px;
      margin-left: 5px;
      margin-top: 2.5px;
    }

    }

    & > svg {
      width: 20px;
      margin-left: 5px;
      margin-top: 2.5px;
    }
  }
`;

export const MenuMobile = styled.div`
  ${menuCss}
  & > div {
    ${({ theme, Contentdark, menor }) => css`
    margin-left: ${menor ? '2rem' : '0px'};
`};
  & > div:first-child {
    margin-left: 0px;
  }
  & > a {
      display: grid;
      grid-template-columns: 1fr;
      text-decoration: none;
      align-items: center;
      align-content: center;
      cursor: pointer;
      color: currentColor;

      & > svg {
      width: 20px;
      margin-left: 5px;
      margin-top: 2.5px;
      }

    }

    grid-template-columns: 1fr;
    justify-items: center;
    font-size: 0.8rem;
  }
`;

export const Menu = styled.div`
  ${menuCss}
`;

export const Line = styled.div`
width: 100%;
height: 1px;
${({ theme, Contentdark}) => css`
background: ${Contentdark ? '#504948' : '#F0E5E3'};
margin-bottom: 3px;
`};
`;
