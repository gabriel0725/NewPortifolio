'use client'

import { breakpoints, colors } from '@/app/styles'
import styled from 'styled-components'

interface ImgContainerProps {
  type: 'black' | 'blue'
}

export const TitleContainer = styled.div`
  font-weight: bold;
  background: linear-gradient(
    45deg,
    ${colors.white} 45%,
    ${colors.gradientBlue} 55%
  ); /* Ajuste o gradiente */
  -webkit-background-clip: text;
  color: transparent;

  h1 {
    font-size: 24px;
    padding-top: 22px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 20px;
    }
  }

  h2 {
    font-size: 60px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 40px;
    }
  }
`

export const Phrase = styled.p`
  font-size: 22px;
  padding-top: 82px;
  padding-bottom: 28px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    width: 70%;
    place-self: center;
  }
`

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 32px;

  li {
    width: 220px;
  }

  @media (max-width: ${breakpoints.tablet}) {


    li {
      width: auto;
      margin-top: 30px;
    }
  }
`

export const ImgContainer = styled.div<ImgContainerProps>`
  display: flex;
  background-color: ${({ type }) =>
    type === 'blue' ? '#2961aaff' : type === 'black' ? '#2d2d2d' : '#aaa'};
  align-items: center;
  gap: 20px;
  border-radius: 300px;
  height: 64px;
  font-weight: bold;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.06);
  }

  p {
    color: ${colors.white};
    letter-spacing: 4px;
  }

  img {
    border-radius: 300px;
    max-height: 64px;
    height: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }

  @media (max-width: ${breakpoints.tablet}) {
    p {
      display: none;
    }
  }
`
