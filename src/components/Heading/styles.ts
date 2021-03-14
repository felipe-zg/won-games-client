import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const WrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    border-left: 0.7rem solid ${theme.colors.secondary};
    padding-left: ${theme.spacings.xxsmall};
  `,

  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, lineLeft, lineBottom }) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${lineLeft && WrapperModifiers.lineLeft(theme)}
    ${lineBottom && WrapperModifiers.lineBottom(theme)}
  `}
`
