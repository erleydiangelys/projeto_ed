import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
${({ theme }) => css`
  padding: 2rem;
  margin: 2rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.secondaryColor}
  `};
`;
export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  gap: 3rem;
`;

/* background: ${({ theme }) => theme.colors.secondaryColor}; */

/* ${({ theme }) => css`
    background: ${theme.colors.secondaryBg}
  `} */
