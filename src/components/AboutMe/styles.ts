'use client'
import { breakpoints, colors } from '@/app/styles'
import styled from 'styled-components'
import Section from '../Section'
import { DivContainer } from '../Section/styles'

export const SectionAbout = styled(Section)`
  ${DivContainer} {
    h3 {
      margin-top: 40px;
    }
  }
`

export const AboutMeContainer = styled.div`
  P {
    font-size: 24px;
    text-align: justify;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 18px;
      text-align: left;
    }
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
  margin: 40px 0;
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

export const StacksContainer = styled.div`
  margin: 60px 0;

  h4 {
    text-transform: uppercase;
    font-size: 22px;
    padding-bottom: 40px;
  }
`

export const IconsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;

  li {
    position: relative;
    aspect-ratio: 1;
    width: 80px;
    border-radius: 20px;
    background: #222222ff;
    display: grid;
    place-items: center;
    font-size: 2.5rem;
    transition: all 0.4s ease;

    /* Efeito de iluminação */
    box-shadow:
  /* Sombra externa: faz o elemento parecer que está "flutuando". */
      0 2px 10px rgba(0, 0, 0, 0.6),
      /* Sombra interna superior: cria um brilho sutil na parte de cima. */
        inset 0 4px 8px rgba(255, 255, 255, 0.05),
      /* Sombra interna inferior: adiciona uma sombra para aprofundar o efeito. */
        inset 0 -6px 12px rgba(0, 0, 0, 0.6);
    /* Cria uma borda fina e quase transparente para realçar o contorno. */
    border: 1px solid rgba(255, 255, 255, 0.08);

    &:hover {
      transform: scale(1.2);

      /* As sombras se tornam mais intensas no hover, reforçando o efeito de profundidade. */
      box-shadow:
    /* Sombra externa no hover: mais escura e com maior espalhamento. */
        0 4px 20px rgba(0, 0, 0, 0.8),
        /* Sombra interna superior no hover: o brilho fica mais forte. */ inset
          0 6px 12px rgba(255, 255, 255, 0.08),
        /* Sombra interna inferior no hover: a sombra interna fica mais escura. */
          inset 0 -8px 16px rgba(0, 0, 0, 0.7);
    }

    /* Tooltip */
    &::after {
      content: attr(data-name); /* pega o nome do atributo data-name */
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      background: ${colors.blue};
      color: ${colors.white};
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 0.5rem;
      text-transform: uppercase;
      font-weight: bold;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      white-space: nowrap;
    }

    &:hover::after {
      opacity: 1;
    }
  }
`
