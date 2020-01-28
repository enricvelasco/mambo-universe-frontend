import React from 'react'
import LinkButton from '../../common/link-button'
import { HeaderContainer, LogoContainer, ItemsContainer, Logo, Menu, UserAccessContainer, Item } from './style'

const Header = () => {
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
          <LinkButton link='/login'>
            LogIn
          </LinkButton>
        </UserAccessContainer>
      </ItemsContainer>
    </HeaderContainer>
  )
}

export default Header
