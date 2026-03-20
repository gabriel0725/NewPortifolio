'use client'

import styled from 'styled-components'
import 'swiper/css/pagination'
import { breakpoints, colors } from '@/app/styles'
import { ImgContainer } from '../Home/styles'
import { TagContainer } from '../Tag/styles'

export const CarouselContainer = styled.section`
  text-align: center;
  background-color: ${colors.black};
  position: relative;

  .swiper {
    overflow: visible;
    text-align: -webkit-center;
  }

  .swiper-3d .swiper-slide {
    transform-style: initial;
  }

  h3 {
    position: absolute;
    top: 5%;
    font-weight: bold;
    font-size: 34px;
    letter-spacing: 0.05em;
    color: ${colors.white};
    text-transform: uppercase;
    left: 50%;
    transform: translateX(-50%);

    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: ${colors.white};
      margin: 8px auto;
    }
  }





  // ===============================
  // MEDIA QUERIES
  // ===============================

  @media (max-width: ${breakpoints.desktop}) {
    h3 {
      position: relative;
      font-size: 30px;
      top: 20px;
    }

    ${TagContainer} {
      font-size: 0.5rem;
    }
  }

  @media (max-width: ${breakpoints.laptop}) {
    h3 {
      font-size: 24px;
      top: 20px;
    }

    .btnProjetos {
      padding-top: 50px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {


    .btnProjetos {
      padding-top: 0px;
    }

    h3 {
      font-size: 28px;
      top: 32px;
    }

    ${TagContainer} {
      font-size: 0.5rem;
    }
  }

`

export const BtnProjetos = styled.div`
      width: 220px;
      position: relative;
      place-self: center;
      padding-bottom: 2%;

      ${ImgContainer} {
        border: 1px solid ${colors.blue};
      }
`



export const ProjectContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  width: 100%;
  text-align: left;
  min-height: 100vh;
  align-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 80vh;
    padding-bottom: 15%;
    margin-top: 5%;

  }

  @media (max-width: ${breakpoints.laptop}) {
    min-height: 80vh;
    padding-top: 5%;


  }
`

export const ImgBtn = styled(ImgContainer)`

@media (max-width: ${breakpoints.desktop}) {
    height: 45px;


    p {
      display: block;
    }
  }
  @media (max-width: ${breakpoints.laptop}) {
    height: 45px;


    p {
      display: block;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 50px;

    p {
      display: block;
    }
  }
`


