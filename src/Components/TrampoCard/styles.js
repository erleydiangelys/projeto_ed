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
  font-size: 2rem;
  padding: 1.8rem;
  border-radius: 15px 15px 0 0;
  ${({ theme, Contentdark }) => css`
  background ${theme.colors.secondaryColorHover};
  color: ${theme.colors.primaryColor};
  font-family: ${({ theme }) => theme.font.family.secundary};
  `};

  @media(min-width: 650px){
    font-size: 2.5rem;
  }
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

  @media(min-width: 650px){
    font-size: 1.6rem;
  }
`;


export const Dados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & span {
  ${({ theme, Contentdark}) => css`
  color:${Contentdark ? theme.colors.secondaryColorHover : theme.colors.secondaryColor};
  font-weight: bold;
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
  display: flex;
  gap: 1.5rem;
  margin: 0 auto;
  margin-top: 2rem;

`;


export const Itens = styled.div`
  display: grid;
  grid-template-columns: 120px 4fr;
  padding: 0.5rem;
  ${({ theme, Contentdark}) => css`
  border-bottom: 1px solid ${Contentdark ? '#576F72' : '#F0EBE3'};
  `};

  &:hover {
    transform: scale(1.01);
  }

  @media(min-width: 650px){
    min-height: 6.5rem;
  }
`;
