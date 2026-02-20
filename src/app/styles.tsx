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
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  wide: '1440px'
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
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;

    max-width: 1200px;

    @media (min-width: ${breakpoints.wide}) {
      max-width: 1320px;
    }
  }
`
