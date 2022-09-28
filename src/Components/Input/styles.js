import styled, { css } from 'styled-components';

const titleSize = {
  xsmall: (theme) => css`
    font-size: ${theme.font.sizes.xsmall};
`,
  small: (theme) => css`
    font-size: ${theme.font.sizes.small};
`,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.medium};
`,

  large: (theme) => css`
  font-size: ${theme.font.sizes.large};
`,

  xlarge: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
`,
  xxlarge: (theme) => css`
    font-size: ${theme.font.sizes.xxlarge};
`,

  huge: (theme) => css`
    font-size: ${theme.font.sizes.huge};
    ${mediaFont(theme)}
`,

  xhuge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)}
`,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
  font-size: ${theme.font.sizes.xlarge};
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MyInput = styled.input`
  ${({ theme, colorDark, size }) => css`
  color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
  background: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
  ${titleSize[size](theme)};
  border: 1px solid ${
    colorDark ? theme.colors.primaryColor : theme.colors.white
  };
  display: block;
  width: 100%;
  padding: 1rem;
  border-radius: 0.8rem;

  &:hover,
  &:focus {
    border: 1px solid transparent;
    outline: none;
    box-shadow: 0 0 0 1px ${theme.colors.secondaryColor};
  }

  &:disabled {
  opacity: 0.5;
  cursor: wait;
}
`}

`;
export const Label = styled.label`
  ${({ theme, colorDark, size }) => css`
  color: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
  /* background: ${colorDark ? theme.colors.white : theme.colors.primaryColor}; */
  ${titleSize[size](theme)};
`}
`;

export const Error = styled.p`
  ${({ theme }) => css`
  color: ${theme.colors.secondaryColor};
  font-size: 1.2rem;
`}
`;
