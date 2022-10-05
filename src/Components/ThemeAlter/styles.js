import styled, {css} from 'styled-components';

export const Container = styled.button`
${({ theme, Contentdark, menor }) => css`
  position: fixed;
  bottom: ${menor ? '5.1rem' : '1rem'};
  margin-left: 0.5rem;
  background: ${Contentdark ? theme.colors.primaryColor : theme.colors.white};
  border: 1px solid ${theme.colors.secondaryColor};
  height: 4rem;
  width: 4rem;
  border-radius: 50px;

  & > svg {
    max-width: 1.8rem;
    color: ${theme.colors.secondaryColor};
  }
  `};
`;
