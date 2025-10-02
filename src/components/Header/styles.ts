'use client'
import { colors } from '@/app/styles'
import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
  margin-top: 30px;
`

export const BtnHamb = styled.div`
  color: #fff;
  background-color: ${colors.gradientBlue};
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`

export const NavMobile = styled.nav`
  opacity: 0;
  transform: translateY(-100%);
  visibility: hidden;
  transition: transform 0.5s ease, opacity 0.5s ease;

  &.is-open {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }

  &.is-closing {
    opacity: 0;
    transform: translateY(-100%);
    visibility: visible;
  }
`

export const BtnHome = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  color: #fff;
  background-color: ${colors.gradientBlue};
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`
