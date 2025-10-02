import  Section  from '../Section'
import * as S from './styles'
import LinkedInImg from '../../../assets/img/LinkedIn_icon.png'
import GithubIconImg from '../../../assets/img/github-white-icon.png'

const HomeSection = () => (
  <Section background="black">
      <div>
      <S.TitleContainer>
        <h2>
          Desenvolvedor <br />
          Fullstack
        </h2>
        <h1>Gabriel Machado Coutinho</h1>
      </S.TitleContainer>
      <S.Phrase>Da ideia ao código: criando experiências completas.</S.Phrase>
      <S.ButtonList>
        <li>
          <a href="https://github.com/gabriel0725" target='_blank'>
            <S.ImgContainer type="black">
              <img src={GithubIconImg.src} alt="github" />
              <p>GitHub</p>
            </S.ImgContainer>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gabriel-machado-coutinho-62ab06192" target='_blank'>
            <S.ImgContainer type="blue">
              <img src={LinkedInImg.src} alt="linkedin" />
              <p>LinkedIn</p>
            </S.ImgContainer>
          </a>
        </li>
      </S.ButtonList>
      </div>
  </Section>
)

export default HomeSection
