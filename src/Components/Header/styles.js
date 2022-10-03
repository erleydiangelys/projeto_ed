import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
${({ theme, Contentdark, menor }) => css`
  top: ${menor ? 'none' : '0px'};
  bottom: ${menor ? '0px' : 'none'};
`};
  position: fixed;
  width: 100%;
  z-index: 100;
  height: 4rem;
  margin-bottom: 1rem;
  & > h1 {
    font-size: 2rem;
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
  height: 4rem;
  padding: 0 1.5rem;
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
  font-size: 1.4rem;
`;
