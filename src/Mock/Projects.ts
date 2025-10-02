import efoodImg from '../../assets/img/efood.png'
import bikcraftImg from '../../assets/img/bikcraft.png'
import outerwildsImg from '../../assets/img/outerwilds.png'
import mdnImg from '../../assets/img/MDN.png'
import dgenerusImg from '../../assets/img/Dgenerus.png'
import disneyImg from '../../assets/img/disney.png'
import sorteadorImg from '../../assets/img/sorteador.png'
import landingImg from '../../assets/img/landing.png'
import galeriaImg from '../../assets/img/aeolian.jpg'
import portImg from '../../assets/img/portifolioIMG.png'
import agendaImg from '../../assets/img/agendaRedux.png'

export type Project = {
  id: number
  image: string
  title: string
  description: string
  tags: string[]
  githubLink?: string
  siteLink: string
}

const projects: Project[] = [
  {
    id: 1,
    image: efoodImg.src,
    title: 'Efood',
    description: 'Site criado a partir de um layout do Figma como projeto final para o módulo front-end',
    tags: ['React', 'Styled components', 'RTK Query', 'Typescript'],
    githubLink: 'https://github.com/gabriel0725/E-food',
    siteLink: 'https://e-food-orpin.vercel.app'
  },
  {
    id: 2,
    image: dgenerusImg.src,
    title: 'Dgenerus',
    description:
      "IV Simpósio de Gênero e Diversidade do grupo de pesquisa D'Generus, organizado pela UFPel (Universidade Federal de Pelotas)",
    tags: ['HTML', 'CSS'],

    siteLink: 'https://ivsimposiodgenerus.netlify.app'
  },
  {
    id: 3,
    image: mdnImg.src,
    title: 'Memórias e narrativas de mulheres(em andamento)',
    description:
      'Site para um grupo de pesquisadoras da UFPel (Universidade Federal de Pelotas) compartilhar narrativas de mulheres em diferentes contextos ',
    tags: ['HTML', 'CSS'],
    
    siteLink: 'https://mulheresdiscursosenarrativas.netlify.app'
  },
  {
    id: 4,
    image: outerwildsImg.src,
    title: 'Outer Wilds',
    description:
      'Atividade proposta pela EBAC, criar um site com qualquer tema utilizando bootstrap',
    tags: ['Bootstrap', 'jquery'],
    githubLink: 'https://github.com/gabriel0725/OuterWilds_BS',
    siteLink: 'https://outer-wilds-bs.vercel.app'
  },
  {
    id: 5,
    image: disneyImg.src,
    title: 'Clone Disney+',
    description: 'Clone do site do Disney+',
    tags: ['SCSS', 'javascript', 'gulp'],
    githubLink: 'https://github.com/gabriel0725/Projeto04_clone_Disney',
    siteLink: 'https://projeto04-clone-disney.vercel.app'
  },
  {
    id: 6,
    image: sorteadorImg.src,
    title: 'Sorteador de números',
    description: 'Sorteador de números, criado para praticar grunt/less',
    tags: ['Less', 'grunt'],
    githubLink: 'https://github.com/gabriel0725/Sorteador_Grunt',
    siteLink: 'https://sorteador-grunt-rho-kohl.vercel.app'
  },
  {
    id: 7,
    image: agendaImg.src,
    title: 'Lista de contatos',
    description: 'Projeto para pratica do gerenciamente de estado com Redux',
    tags: ['react', 'redux', 'styled components'],
    githubLink: 'https://github.com/gabriel0725/AtividadeM32',
    siteLink: 'https://atividade-m32.vercel.app'
  },
  {
    id: 8,
    image: portImg.src,
    title: 'Portifolio',
    description:
      'Criei este portifolio para mostrar meus projetos e habilidades, e tambem criei utilizando Next.JS para conhecer a ferramenta',
    tags: ['Next.js', 'Swipper', 'styled components'],
    githubLink: 'https://github.com/gabriel0725/NewPortifolio',
    siteLink: ''
  },
  {
    id: 9,
    image: landingImg.src,
    title: 'Landing page',
    description:
      'Atividade de módulo da EBAC, o objetivo era criar uma landinpage de um filme',
    tags: ['HTML', 'SCSS', 'JAVASCRIPT'],
    githubLink: 'https://github.com/gabriel0725/Atividade_ebac_M21',
    siteLink: 'https://atividade-ebac-m21.vercel.app'
  },
  {
    id: 10,
    image: galeriaImg.src,
    title: 'galeria de fotos',
    description:
      'Projeto para praticar o uso do JQUERY visto nas aulas do curso da Ebac',
    tags: ['JQUERY'],
    githubLink: 'https://github.com/gabriel0725/jquery-galeria-fotos',
    siteLink: 'https://jquery-galeria-fotos-sigma-ashy.vercel.app'
  },
  {
    id: 11,
    image: bikcraftImg.src,
    title: 'Bikcraft',
    description:
      'Loja de bicicletas, site criado através e um curso para treino ',
    tags: ['HTML', 'CSS', 'PHP'],
    githubLink: 'https://github.com/gabriel0725/estudosCursoBikcraft',
    siteLink: 'https://bikcraftclarkestudo.netlify.app'
  }
]

export default projects
