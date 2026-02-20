'use client'
import { breakpoints, colors } from '@/app/styles'
import styled from 'styled-components'
import { Props } from '.'

export const SectionContainer = styled.section<Omit<Props, 'title'>>`
  text-align: center;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.lightBlack};

  .swiper {
    overflow: visible;
  }
`

export const DivContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;

  h3 {
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
  }

   @media (max-width: ${breakpoints.desktop}) {
    h3 {
      font-size: 30px;
    }
  }

  @media (max-width: ${breakpoints.laptop}) {
    h3 {
      font-size: 24px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    h3 {
      font-size: 28px;
    }
  }
`


