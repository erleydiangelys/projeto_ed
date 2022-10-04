import styled, {css} from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 1rem;
`;


export const CardContent = styled.div`
  text-align: center;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  padding: 0.5rem;
  border-radius: 15px 15px 0 0;
  ${({ theme, Contentdark }) => css`
  background ${theme.colors.secondaryColorHover};
  color: ${theme.colors.primaryColor};
  `};
`;


export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5rem;
  border-radius: 0 0 15px 15px;
  text-align: start;
  padding: 1rem;
  ${({ theme, Contentdark }) => css`
  background ${Contentdark ? theme.colors.grayDark : theme.colors.grayMid};
  color: ${Contentdark ? theme.colors.white : theme.colors.primaryColor};
  `};
`;


export const Dados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & span {
  ${({ theme}) => css`
  color: ${theme.colors.secondaryColorHover};
  margin-right: 5px;
  `};
  }
`;

export const Img = styled.img`
  margin: 0 auto;
  width: 200px;
  margin-top: 1rem;
`;

export const ContentButton = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
`;
