'use client'

import { CardContainer } from '@/components/Card/styles'
import Section from '@/components/Section'
import styled from 'styled-components'
import { breakpoints } from '../styles'
import { TagContainer } from '@/components/Tag/styles'

export const AllProjectsSection = styled(Section)`
  position: relative;
  min-height: 100vh;
  padding-bottom: 80px;
`

export const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;


  .ProjectListItem {
    margin: 60px 0;
  }

  ${CardContainer} {

    .imgProjectsPage{
      height: 280px
    }

    .description-projects-page {
      opacity: 0.7;
      visibility: visible;
    }

    footer .tags {
      opacity: 0.7;
      visibility: visible;
    }

    &:hover {
      .description-projects-page {
        opacity: 1;
      }

      footer .tags {
        opacity: 1;
      }
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin: 0px 0;
    ${CardContainer} {

    .imgProjectsPage{
      height: 200px
    }
  }
}



  @media (max-width: ${breakpoints.tablet}) {

    grid-template-columns: repeat(1, 1fr);
    

    .ProjectListItem {
      margin: 0px 0;
    }


    ${CardContainer} {
      width: 280px;

      .description-projects-page {
        opacity: 1;
      }

      footer .tags {
        opacity: 0.9;
      }
    }
  }


`
