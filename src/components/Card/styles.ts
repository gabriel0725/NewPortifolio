'use client'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: transparent;
  border-radius: 8px;
  width: 280px;
  height: 380px;
  transition: transform 0.4s;
  text-align: left;

  /* aplica efeito no hover E no slide ativo */
  &:hover {
    transform: scale(1.12);
    z-index: 9;

    .description {
      opacity: .7;
      visibility: visible;
    }

    footer .tags {
      opacity: .7;
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
`
