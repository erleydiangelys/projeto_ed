import styled, {css} from 'styled-components';

export const ButtonM = styled.button`
${({ theme, Contentdark, size, radius, isDelete }) => css`
  background: ${isDelete ? theme.colors.errorColor : theme.colors.secondaryColor};
  background:
  color: ${Contentdark ? theme.colors.white : theme.colors.primaryColor};
  border: 1px solid ${Contentdark ? theme.colors.white : theme.colors.primaryColor};
  font-size: ${size}rem;
  border-radius: ${radius}rem;
  display: flex;
  align-items: center;
  gap: 0.5rem
  `};
  padding: 0.8rem 1.4rem;

  & a {
    text-decoration:none;
  }

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

