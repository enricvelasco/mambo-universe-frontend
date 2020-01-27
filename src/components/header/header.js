import React from 'react'
import LinkButton from '../link-button'
import { createPortal } from '../modals/config/portals/actions'
import { HeaderContainer, LogoContainer, ItemsContainer, Logo, Menu, UserAccessContainer, Item } from './style'
import { portalsIds } from '../modals/config/modals-list'

const Header = () => {
  const onClick = () => {
    createPortal(portalsIds.LOGIN)
  }
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>Mambo Universe</Logo>
      </LogoContainer>
      <ItemsContainer>
        <Menu>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
        </Menu>
        <UserAccessContainer>
          <LinkButton onClick={onClick}>
            LogIn
          </LinkButton>
        </UserAccessContainer>
      </ItemsContainer>
    </HeaderContainer>
  )
}

export default Header
