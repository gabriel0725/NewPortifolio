'use client'
import { colors } from '@/app/styles'
import styled from 'styled-components'

export const AboutMeContainer = styled.div`
  P {
    font-size: 24px;
    text-align: left;
    text-align: justify;
  }

  span {
    color: ${colors.lightBlue};
    font-weight: bold;
  }
`

export const BtnCV = styled.a`
  display: flex;
  background-color: ${colors.lightBlue};
  color: ${colors.black};
  align-items: center;
  justify-content: center;
  justify-self: center;
  margin-top: 30px;
  width: 180px;
  gap: 10px;
  font-weight: 500;
  padding: 10px;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.06);
  }

  img {
    max-height: 28px;
  }
`
