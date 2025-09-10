import HomeSection from '@/components/Home'
import { GlobalCss } from './styles'
import AboutMe from '@/components/AboutMe'
import ProjectCarousel from '@/components/ProjectCarousel'

export default function Home() {
  return (
    <>
      <GlobalCss />
      <HomeSection />
      <AboutMe />
      <ProjectCarousel />
    </>
  )
}
