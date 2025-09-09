'use client'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    opacity: 1;

    .description {
      display: block;
    }

    footer .tags {
      display: flex;
    }

    img {
      box-shadow: 1px 2px 5px 1px rgb(255 255 255 / 0.8);
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
    display: block;
    padding: 10px 0;

    p {
      padding-bottom: 10px;
      font-weight: 600;
      font-size: 1.25rem;
    }

    h4 {
      font-weight: 400;
      text-transform: uppercase;
      opacity: 70%;
      font-size: 0.875rem;
    }
  }

  footer .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-self: left;
  }
`
