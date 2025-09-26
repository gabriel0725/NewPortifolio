'use client'
import { breakpoints, colors } from '@/app/styles'
import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: transparent;
  border-radius: 8px;
  width: 280px;
  height: 380px;
  transition: transform 0.4s;
  text-align: left;
  position: relative;

  a {
    color: ${colors.white};
    position: relative;
    justify-content: space-between;
    display: flex;
  }

  a::after {
    content: attr(data-name);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-6px);
    background: ${colors.black};
    color: ${colors.white};
    font-size: 0.75rem;
    padding: 4px 8px;
    border-radius: 6px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 0.2s ease-in-out,
      transform 0.2s ease-in-out;
  }

  a:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(-10px);
  }

  &:hover {
    transform: scale(1.12);
    z-index: 9;

    .description {
      opacity: 0.7;
      visibility: visible;
    }

    footer .tags {
      opacity: 0.7;
      visibility: visible;
    }
  }

  .swiper-slide-active & {
    transform: scale(1.22);
    z-index: 10;

    .description {
      opacity: 1;
      visibility: visible;
    }

    footer .tags {
      opacity: 1;
      visibility: visible;
    }

    img {
      box-shadow: 1px 2px 5px 1px rgb(0 0 0 / 0.8);
    }
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    box-shadow: 0 0 0 transparent;
    transition: box-shadow 0.3s ease;
  }

  .description {
    padding: 10px 0;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.4s,
      visibility 0.4s;

    p {
      padding-bottom: 10px;
      font-weight: 600;
      font-size: 1.15rem;
    }

    h4 {
      font-weight: 400;
      text-transform: uppercase;
      opacity: 0.7;
      font-size: 0.775rem;
    }
  }

  footer .tags {
    display: flex;
    opacity: 0;
    visibility: hidden;
    flex-wrap: wrap;
    gap: 8px;
    justify-self: left;
    transition:
      opacity 0.4s,
      visibility 0.4s;
  }

  .redirectImg {
    width: 35px;
    height: 35px;
  }

  @media(max-width: ${breakpoints.desktop}) {
    width: 200px;
  }
`
