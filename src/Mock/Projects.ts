export type Project = {
  id: number
  image: string
  title: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    image: 'https://placehold.co/380',
    title: 'titulo',
    description: 'descrição blabla blbl',
    tags: ['Tag 1', 'Tag texto grande', 'Tag media', 'Tag media']
  },
  {
    id: 2,
    image: 'https://placehold.co/380',
    title: 'titulo 2',
    description: 'descrição diferente',
    tags: ['Tag A', 'Tag B', 'aaaaaa']
  },
  {
    id: 3,
    image: 'https://placehold.co/380',
    title: 'mais um titulo',
    description: 'terceira descrição',
    tags: ['Tag X', 'Tag Y']
  }
]

export default projects
