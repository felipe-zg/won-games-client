import * as S from './styles'
type ButtonProps = {
  children?: React.ReactNode
}

const Button = ({ children }: ButtonProps) => (
  <S.Wrapper>{!!children && <span>{children}</span>}</S.Wrapper>
)

export default Button
