import { Icon } from '@iconify/react'

import * as S from './styles'

import DonwloadIconImg from '../../../assets/img/download_icon.png'


const AboutMe = () => (
  <S.SectionAbout background="gray" title="Sobre mim">
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
          Recentemente, finalizei o curso profissionalizante de{' '}
          <span>Desenvolvedor Full Stack Java na EBAC</span>, o que tem me
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

      <S.StacksContainer>
        <h4>Competencias</h4>

        <div>
          <S.IconsList>
            <li data-name="HTML">
              <Icon icon="vscode-icons:file-type-html" width="40" height="40" />
            </li>
            <li data-name="CSS">
              <Icon icon="vscode-icons:file-type-css2" width="40" height="40" />
            </li>
            <li data-name="JAVASCRIP">
              <Icon icon="logos:javascript" width="40" height="40" />
            </li>
            <li data-name="TYPESCRIPT">
              <Icon
                icon="vscode-icons:file-type-typescript-official"
                width="40"
                height="40"
              />
            </li>
            <li data-name="REACT JS">
              <Icon icon="logos:react" width="40" height="40" />
            </li>
            <li data-name="NEXT JS">
              <Icon icon="logos:nextjs-icon" width="40" height="40" />
            </li>
            <li data-name="REDUX">
              <Icon icon="logos:redux" width="40" height="40" />
            </li>
            <li data-name="STYLED COMPONENTS">
              <Icon
                icon="devicon:styledcomponents-wordmark"
                width="40"
                height="40"
              />
            </li>
            <li data-name="gulp">
              <Icon icon="vscode-icons:file-type-gulp" width="40" height="40" />
            </li>
            <li data-name="SASS">
              <Icon icon="devicon:sass" width="40" height="40" />
            </li>
            <li data-name="CYPRESS">
              <Icon icon="devicon:cypressio" width="40" height="40" />
            </li>
            <li data-name="BOOTSTRAP">
              <Icon icon="devicon:bootstrap" width="40" height="40" />
            </li>
            <li data-name="GIT">
              <Icon icon="vscode-icons:file-type-git" width="40" height="40" />
            </li>
            <li data-name="JAVA">
              <Icon icon="logos:java" width="40" height="40" />
            </li>
            <li data-name="MONGODB">
              <Icon icon="skill-icons:mongodb" width="40" height="40" />
            </li>
            <li data-name="POSTGRESQL">
              <Icon icon="skill-icons:postgresql-dark" width="40" height="40" />
            </li>
            <li data-name="DOCKER">
              <Icon icon="skill-icons:docker" width="40" height="40" />
            </li>
            <li data-name="SPRING FRAMEWORK">
              <Icon icon="skill-icons:spring-dark" width="40" height="40" />
            </li>
            <li data-name="MAVEN">
              <Icon icon="skill-icons:maven-dark" width="40" height="40" />
            </li>
          </S.IconsList>
        </div>
      </S.StacksContainer>
      <S.BtnCV href="/CV/CVGabrielMachadoCoutinho.pdf" download="GabrielMachadoCoutinho_CV.pdf">
        <img src={DonwloadIconImg.src} alt="Download icon" />
        <p>CV Download</p>
      </S.BtnCV>
    </>
  </S.SectionAbout>
)

export default AboutMe
