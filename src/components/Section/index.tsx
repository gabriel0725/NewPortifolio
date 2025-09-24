import { JSX } from 'react'
import * as S from './styles'

export type Props = {
  title?: String
  background: 'black' | 'gray'
  children: JSX.Element
  className?: String
}

const Section = ({ title, background, children, className }: Props) => (
  <S.SectionContainer background={background} className={className}>
    <S.DivContainer className="container">
      <div>
        {title && <h3>{title}</h3>}
        {children}
      </div>
    </S.DivContainer>
  </S.SectionContainer>
)

export default Section
