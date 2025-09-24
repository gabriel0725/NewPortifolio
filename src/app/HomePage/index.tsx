import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'
import HomeSection from '@/components/Home'
import ProjectCarousel from '@/components/ProjectCarousel'


export default function Homepage() {
  return (
    <>
      <HomeSection />
      <AboutMe />
      <ProjectCarousel />
      <Contact />
    </>
  )
}
