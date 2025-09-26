'use client'

import { CardContainer } from '@/components/Card/styles'
import Section from '@/components/Section'
import styled from 'styled-components'
import { breakpoints } from '../styles'

export const AllProjectsSection = styled(Section)`
  padding: 60px 0;
`

export const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  .ProjectListItem {
    margin: 30px 0;
  }

  ${CardContainer} {

    .imgProjectsPage{
      height: 280px
    }

    .description {
      opacity: 0.7;
      visibility: visible;
    }

    footer .tags {
      opacity: 0.7;
      visibility: visible;
    }

    &:hover {
      .description {
        opacity: 1;
      }

      footer .tags {
        opacity: 1;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;

    .ProjectListItem {
      margin-bottom: 60px;
    }

    ${CardContainer} {
      width: 280px;

      .description {
        opacity: 1;
      }

      footer .tags {
        opacity: 0.9;
      }
    }
  }
`
