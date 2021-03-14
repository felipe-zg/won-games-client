import styled from 'styled-components'
import { DefaultBreakpoints } from 'styled-media-query'

type Breakpoint = keyof DefaultBreakpoints

type MediaMatchProps = {
  lessThan?: Breakpoint
  greaterThan?: Breakpoint
}

export default styled.div<MediaMatchProps>`
  display: none;
`
