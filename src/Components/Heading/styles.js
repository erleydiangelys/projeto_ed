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

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'}
`;

export const Title = styled.h1`
   ${({ theme, colorDark, size, uppercase, align }) => css`
   color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
    text-align: ${align};
  `}
  `;
