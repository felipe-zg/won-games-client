import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  lineLeft?: boolean
}

const Heading = ({ children, lineLeft = false }: HeadingProps) => (
  <S.Wrapper lineLeft={lineLeft}>{children}</S.Wrapper>
)

export default Heading
