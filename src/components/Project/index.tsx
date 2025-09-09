import Section from '../Section'
import Card from '../Card'
import { ProjectContainer } from './styles'
import projects from '@/Mock/Projects'


const Project = () => (

    <ProjectContainer>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Card
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          </li>
        ))}
      </ul>
    </ProjectContainer>

)

export default Project
