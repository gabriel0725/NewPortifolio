import Card from '@/components/Card'

import projects from '@/Mock/Projects'
import { GlobalCss } from '../styles'
import { AllProjectsSection, ProjectsList } from './styles'
import HeaderMenu from '@/components/Header'

export default function ProjectsPage() {
  return (
    <>
      <GlobalCss />
      <HeaderMenu></HeaderMenu>
      <AllProjectsSection background="black" title={'Todos projetos'}>
        <ProjectsList>
          {projects.map((project) => (
            <li className='ProjectListItem' key={project.id}>
              <Card
              links
                image={project.image}
                description={project.description}
                title={project.title}
                tags={project.tags}
                githubLink={project.githubLink}
                siteLink={project.siteLink}
              />
            </li>
          ))}
        </ProjectsList>
      </AllProjectsSection>
    </>
  )
}
