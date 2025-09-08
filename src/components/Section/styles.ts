'use client'
import { colors } from '@/app/styles'
import styled from 'styled-components'
import { Props } from '.'

export const SectionContainer = styled.section<Omit<Props, 'title'>>`
  text-align: center;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.lightBlack};
`

export const DivContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
min-height: 100vh;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 34px;
  letter-spacing: 0.05em;
  color: ${colors.white};
  margin-bottom: 50px;
  text-transform: uppercase;

  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: ${colors.white};
    margin: 8px auto;
  }
`
