'use client'

import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#F5F9FF',
  gradientBlue: '#1862AB',
  blue: '#0061C0',
  lightBlue: '#00A5EF',
  lightBlack: '#1f1f1f',
  black: '#000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Inter, sans-serif;
    text-decoration: none;
  }

  h1, h2, h3, h4{
    font-family: Montserrat, sans-serif;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
