import Section from '../Section'
import * as S from './styles'

import DonwloadIconImg from '../../../assets/img/download_icon.png'

const AboutMe = () => (
  <Section background="gray" title="Sobre mim">
    <>
      <S.AboutMeContainer>
        <p>
          Olá! Meu nome é <span>Gabriel</span>, sou formado em{' '}
          <span>Análise e Desenvolvimento de Sistemas</span> pela{' '}
          <span>Universidade Anhembi Morumbi (UAM)</span> . Embora não atue
          integralmente na área de tecnologia, já tive a oportunidade de
          trabalhar em alguns projetos como <span>freelancer</span>, onde pude
          aplicar e expandir meus conhecimentos.
        </p>
        <br />
        <p>
          Atualmente, estou finalizando o curso de{' '}
          <span>Desenvolvedor Fullstack Java na EBAC</span>, o que tem me
          permitido aprofundar ainda mais no desenvolvimento de aplicações
          completas, desde o back-end até a interface com o usuário. Meu foco é
          entregar soluções eficientes e bem estruturadas, sempre com a busca
          por melhorar e otimizar os processos.
        </p>
        <br />
        <p>
          Se você está procurando um desenvolvedor dedicado, com capacidade de
          aprender rapidamente e entregar soluções eficientes, vamos conversar!
          Com certeza podemos criar algo incrível juntos!
        </p>
      </S.AboutMeContainer>
      <S.BtnCV href="#">
        <img src={DonwloadIconImg.src} alt="" />
        <p>CV Download</p>
      </S.BtnCV>
    </>
  </Section>
)

export default AboutMe
