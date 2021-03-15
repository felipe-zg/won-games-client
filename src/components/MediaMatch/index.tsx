import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type Breakpoint = keyof DefaultBreakpoints

type MediaMatchProps = {
  lessThan?: Breakpoint
  greaterThan?: Breakpoint
}

const MediaMatchModifiers = {
  lessThan: (size: Breakpoint) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,

  greaterThan: (size: Breakpoint) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && MediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && MediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
