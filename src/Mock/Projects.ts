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
    image: 'https://placehold.co/380',
    title: 'Efood',
    description: 'descrição 1',
    tags: ['Tag 1', 'Tag texto grande', 'Tag media', 'Tag media'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  },
  {
    id: 2,
    image: 'https://placehold.co/380',
    title: 'Bikcraft',
    description: 'descrição 2',
    tags: ['Tag A', 'Tag B', 'aaaaaa'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  },
  {
    id: 3,
    image: 'https://placehold.co/380',
    title: 'Outer Wilds',
    description: 'descrição 3',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  },
  {
    id: 4,
    image: 'https://placehold.co/380',
    title: 'MDN',
    description: 'descrição 4',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  },
  {
    id: 5,
    image: 'https://placehold.co/380',
    title: 'Dgenerus',
    description: 'descrição 5',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  },
  {
    id: 6,
    image: 'https://placehold.co/380',
    title: 'Clone Disney+',
    description: 'descrição 6',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  },
  {
    id: 7,
    image: 'https://placehold.co/380',
    title: 'Sorteador de números',
    description: 'descrição 7',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  }
  ,
  {
    id: 8,
    image: 'https://placehold.co/380',
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
    image: 'https://placehold.co/380',
    title: 'galeria de fotos',
    description: 'descrição 10',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  }
  ,
  {
    id: 11,
    image: 'https://placehold.co/380',
    title: 'Loja de roupas',
    description: 'descrição 11',
    tags: ['Tag X', 'Tag Y'],
    githubLink: 'https://www.google.com',
    siteLink: 'https://www.youtube.com'
  }
]

export default projects
