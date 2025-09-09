import HomeSection from '@/components/Home'
import { GlobalCss } from './styles'
import AboutMe from '@/components/AboutMe'
import ProjectsList from '@/components/ProjectsList'

export default function Home() {
  return (
    <>
      <GlobalCss />
      <HomeSection />
      <AboutMe />
      <ProjectsList />
    </>
  )
}
