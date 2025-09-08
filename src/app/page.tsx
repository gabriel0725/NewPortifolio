import HomeSection from '@/components/Home'
import { GlobalCss } from './styles'
import AboutMe from '@/components/AboutMe'
import { SectionContainer } from '@/components/Section/styles'

export default function Home() {
  return (
    <>
      <GlobalCss />
      <HomeSection />
      <AboutMe />
    </>
  )
}
