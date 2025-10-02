'use client'
import { Icon } from '@iconify/react'
import { BtnHamb, BtnHome, Header, LinkItem, Links, NavMobile } from './styles'
import { useState } from 'react'

export const HeaderMenu = () => {
  const [menuState, setMenuState] = useState<'closed' | 'open' | 'closing'>('closed')

  const toggleMenu = () => {
    if (menuState === 'open') {
      setMenuState('closing')
      setTimeout(() => {
        setMenuState('closed')
      }, 500)
    } else {
      setMenuState('open')
    }
  }

  return (
    <Header className='container'>
      <BtnHamb onClick={toggleMenu}>
        {menuState === 'open' ? (
          <Icon icon="stash:times" width="40" height="30" />
        ) : (
          <Icon icon="stash:burger-classic" width="40" height="30" />
        )}
      </BtnHamb>
      <div className='container'>
        <NavMobile
          className={
            menuState === 'open' ? 'is-open': menuState === 'closing'? 'is-closing': ''
          }
        >
          <Links>
            <LinkItem>
              <a href='/'>
                <BtnHome>
                  <Icon
                    icon="stash:corner-up-left-duotone"
                    width="34"
                    height="34"
                  />
                  <span>Pagina inicial</span>
                </BtnHome>
              </a>
            </LinkItem>
          </Links>
        </NavMobile>
      </div>
    </Header>
  )
}

export default HeaderMenu
