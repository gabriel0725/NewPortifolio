import { JSX } from 'react'
import * as S from './styles'

export type Props = {
  title?: String
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <S.SectionContainer background={background}>
    <>

      <S.DivContainer className="container">
        <div>
          {title && <S.Title>{title}</S.Title>}
          {children}
        </div>

      </S.DivContainer>
    </>
  </S.SectionContainer>
)

export default Section
