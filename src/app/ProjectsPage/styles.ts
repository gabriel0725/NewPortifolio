'use client'

import { Container } from '@/components/Card/styles'
import styled from 'styled-components'

export const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  .ProjectListItem {
    margin: 30px 0;
  }

  ${Container} {
    .description {
      opacity: 0.7;
      visibility: visible;
    }

    footer .tags {
      opacity: 0.7;
      visibility: visible;
    }

    &:hover {
      .description{
        opacity: 1;
      }
      
      footer .tags {
        opacity: 1;
      }
    }
  }
`
