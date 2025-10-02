import Section from '../Section'

import PhoneImg from '../../../assets/img/phone_icon.png'
import EmailImg from '../../../assets/img/email_icon.png'
import { ContactContainer } from './styles'

const Contact = () => (
  <Section background="gray" title={'Entre em contato'}>
    <ContactContainer>
      <a href="https:wa.link/c7jmrq" target="_blank">
        <img src={PhoneImg.src} alt="whatsapp" />
        (11) 96861-1732
      </a>
      <a href="mailto:gabriel.gmcontato@gmail.com" target="_blank">
        <img src={EmailImg.src} alt="email" />
        <span>gabriel.gmcontato@gmail.com</span>
      </a>
      <a href="https://wa.link/rw7ypk" target="_blank">
        <img src={PhoneImg.src} alt="whatsapp" />
        (11) 95842-7268
      </a>
    </ContactContainer>
  </Section>
)

export default Contact
