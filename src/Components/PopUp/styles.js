import styled, {css} from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`

`;

export const Title = styled.h6`
  font-size: 1.5rem;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  ${({ theme, Contentdark }) => css`
  background ${theme.colors.secondaryColor};
  color: ${Contentdark ? theme.colors.white : theme.colors.primaryColor};
  `};
`;

export const model = styled.div`

`;

export const FormContant = styled.div``;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;


export const ItemForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;


export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  text-align: center;
  ${({ theme}) => css`
  border: 1px solid ${theme.colors.secondaryColor};
  `};
`;


export const Erro = styled.p`
  font-size: 1rem;
  ${({ theme}) => css`
  color: ${theme.colors.errorColor};
  text-align: center;
  margin-top: -0.8rem;
  margin-bottom: 1rem;
  `};
`;


export const Button = styled.button`
  ${({ theme}) => css`
    background: ${theme.colors.secondaryColor};
    color: ${theme.colors.white};
    padding: 0.7rem 1rem;
    border-radius: 5px;
    border: 1px solid ${theme.colors.secondaryColor};
    cursor: pointer;

    &:hover {
  ${({ theme}) => css`
    background: ${theme.colors.secondaryColorHover};

  `};
    }
  `};
`;


export const ContentTitle = styled.h5``;


export const ContentDescription = styled.p``;


export const Loading = styled.div``;


export const Enviando = styled.div`
${({ theme}) => css`
    color: ${theme.colors.secondaryColor};
  `};
  text-align: center;
  padding: 1.5rem;
  margin-bottom: 1rem;

`;

