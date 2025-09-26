import { CardContainer } from './styles'
import Tag from '../Tag'

import externalLinkImg from '../../../assets/img/external_link_icon2.png'

export type CardProps = {
  image: string
  title: string
  description: string
  tags: string[]
  links: boolean
  githubLink?: string
  siteLink?: string
}

const Card = ({ image, title, description, tags, links, githubLink, siteLink }: CardProps) => {
  if (links === true) {
    return (
      <CardContainer>
        <header>
          <a href={siteLink} target="_blank" data-name="Ir para o site">
            <img src={image} alt={title} />
          </a>
        </header>
        <div className="description">
            <a href={githubLink} target='_blank' data-name="Ir para o Github">
            <div>
              <p>{description}</p>
              <h4>{title}</h4>
            </div>
            <img className='redirectImg' src={externalLinkImg.src} alt="" />
          </a>
        </div>
        <footer>
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
      </CardContainer>
    )
  }

  return (
    <CardContainer>
      <header>
        <img src={image} alt={title} />
      </header>
      <div className="description">
        <p>{description}</p>
        <h4>{title}</h4>
      </div>
      <footer>
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
    </CardContainer>
  )
}

export default Card
