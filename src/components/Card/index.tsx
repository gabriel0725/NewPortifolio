import { Container } from './styles'
import Tag from '../Tag'

export type CardProps = {
  image: string
  title: string
  description: string
  tags: string[]
}

const Card = ({ image, title, description, tags }: CardProps) => (
  <Container>
      <header>
        <img src={image} alt={title} />
      </header>
      <div className="description">
        <p>{description}</p>
        <h4>{title}</h4>
      </div>
      <footer >
        <div>
          <ul className="tags">
          {tags.map((tag, index) => (
            <li key={index}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
        </div>
      </footer>
  </Container>
)

export default Card
