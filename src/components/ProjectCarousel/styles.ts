'use client'

import styled from 'styled-components'
import 'swiper/css/pagination'
import { breakpoints, colors } from '@/app/styles'
import { ImgContainer } from '../Home/styles'

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
    font-weight: bold;
    font-size: 34px;
    letter-spacing: 0.05em;
    color: ${colors.white};
    text-transform: uppercase;
    left: 50%;
    transform: translateX(-50%);
    top: 120px;

    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: ${colors.white};
      margin: 8px auto;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    h3 {
      font-size: 28px;
      top: 32px;
    }
  }
`

export const ProjectContainer = styled.div`
  max-width: 100vw;
  overflow: hidden;
  width: 100%;
  text-align: left;
  min-height: 100vh;
  align-content: center;

  .btnProjetos {
    width: 220px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    bottom: var(--swiper-pagination-bottom, 60px);

    ${ImgContainer} {
      border: 1px solid ${colors.blue};
    }
  }
`

export const ImgBtn = styled(ImgContainer)`
  @media (max-width: ${breakpoints.tablet}) {
    height: 50px;

    p {
      display: block;
    }
  }
`

export const StyledPagination = styled.div`
  .swiper-pagination-bullet {
    background: ${colors.blue};
  }
  .swiper-pagination-bullet-active {
    background: ${colors.blue};
  }
`
