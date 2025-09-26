'use client'

import { breakpoints, colors } from '@/app/styles'
import styled from 'styled-components'

export const ContactContainer = styled.div`
  padding-top: 50px;

  a {
    position: relative;
    background-color: #292929ff;
    display: flex;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 26px;
    text-decoration: none;
    color: ${colors.white};
    margin-bottom: 30px;
    transition: transform 0.3s ease-in-out;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(1.05);
      border-color: ${colors.white};
    }

    img {
      position: absolute;
      max-width: 60px;
      width: 100%;
      left: 14px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      span {
        padding-left: 30px;
      }

      img {
        position: absolute;
        max-width: 36px;
        width: 100%;
        left: 14px;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 0;
  }
`
