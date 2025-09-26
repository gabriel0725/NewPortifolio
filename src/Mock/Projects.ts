import efoodImg from '../../assets/img/efood.png'
import bikcraftImg from '../../assets/img/bikcraft.png'
import outerwildsImg from '../../assets/img/outerwilds.png'
import mdnImg from '../../assets/img/MDN.png'
import dgenerusImg from '../../assets/img/Dgenerus.png'
import disneyImg from '../../assets/img/disney.png'
import sorteadorImg from '../../assets/img/sorteador.png'
import landingImg from '../../assets/img/landing.png'
import galeriaImg from '../../assets/img/aeolian.jpg'
import lojaroupasImg from '../../assets/img/camiseta.png'



export type Project = {
  id: number
  image: string
  title: string
  description: string
  tags: string[]
  githubLink: string
  siteLink: string
}

const projects: Project[] = [
  {
    id: 1,
    image: efoodImg.src,
    title: 'Efood',
    description: 'descrição 1',
    tags: ['Tag 1', 'Tag texto grande', 'Tag media', 'Tag media'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  },
  {
    id: 2,
    image: bikcraftImg.src,
    title: 'Bikcraft',
    description: 'descrição 2',
    tags: ['Tag A', 'Tag B', 'aaaaaa'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  },
  {
    id: 3,
    image: outerwildsImg.src,
    title: 'Outer Wilds',
    description: 'descrição 3',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  },
  {
    id: 4,
    image: mdnImg.src,
    title: 'Mulheres DN',
    description: 'descrição 4',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  },
  {
    id: 5,
    image: dgenerusImg.src,
    title: 'Dgenerus',
    description: 'descrição 5',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  },
  {
    id: 6,
    image: disneyImg.src,
    title: 'Clone Disney+',
    description: 'descrição 6',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  },
  {
    id: 7,
    image: sorteadorImg.src,
    title: 'Sorteador de números',
    description: 'descrição 7',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  }
  ,
  {
    id: 8,
    image: landingImg.src,
    title: 'Landing page',
    description: 'descrição 8',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  }
  ,
  {
    id: 9,
    image: 'https://placehold.co/380',
    title: 'to-do list',
    description: 'descrição 9',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  }
  ,
  {
    id: 10,
    image: galeriaImg.src,
    title: 'galeria de fotos',
    description: 'descrição 10',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  }
  ,
  {
    id: 11,
    image: lojaroupasImg.src,
    title: 'Loja de roupas',
    description: 'descrição 11',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  }
]

export default projects
