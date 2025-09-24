import Card from '@/components/Card'
import Section from '@/components/Section'
import projects from '@/Mock/Projects'
import { GlobalCss } from '../styles'
import { ProjectsList } from './styles'

export default function ProjectsPage() {
  return (
    <>
      <GlobalCss />
      <Section background="black" title={'Todos projetos'}>
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
      </Section>
    </>
  )
}
