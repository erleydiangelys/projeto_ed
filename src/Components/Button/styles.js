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

export const MyButton = styled.button`
  ${({ theme, colorDark, size }) => css`
    color: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
    background: ${colorDark ? theme.colors.primaryColor : theme.colors.white};

    ${titleSize[size](theme)};

    padding: 0.8rem 2rem;
    border-radius: 1.5rem;
    cursor: pointer;

    &:hover{
      background: ${theme.colors.secondaryColor};
    }
`}
`;
