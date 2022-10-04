import styled, {css} from 'styled-components';

export const ButtonM = styled.button`
${({ theme, Contentdark }) => css`
  background: ${theme.colors.secondaryColor};
  color: ${Contentdark ? theme.colors.white : theme.colors.primaryColor};
  border: 1px solid ${Contentdark ? theme.colors.white : theme.colors.primaryColor};
  `};
  padding: 0.8rem 1.4rem;
  border-radius: 20px;
  font-size: 2rem;

  &:hover {
  ${({ theme}) => css`
  background: ${theme.colors.secondaryColorHover};
  color: ${theme.colors.secondaryColor};
  border-color: ${theme.colors.secondaryColor};
  box-shadow: 0 0 0 1px ${theme.colors.secondaryColor};
  transform: scale(1.005);
  `};
}
`;

