import React, { useContext } from 'react'
import { FaUser, FaRegUser } from 'react-icons/fa'
import LinkButton from '@Components/common/link-button'
import { Context } from '../../../Context'
import { HeaderContainer, LogoContainer, ItemsContainer, Logo, Menu, UserAccessContainer, Item } from './style'

const onItemClick = () => {
}

const onItem2Click = () => {
}

const Header = () => {
  const { isAuth } = useContext(Context)
  const Icon = isAuth ? FaUser : FaRegUser
  const link = isAuth ? '/profile' : '/login'
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>Mambo Universe</Logo>
      </LogoContainer>
      <ItemsContainer>
        <Menu>
          <LinkButton to='/' onClick={onItemClick}>Item 1</LinkButton>
          <Item onClick={onItem2Click}>Item 2</Item>
        </Menu>
        <UserAccessContainer>
          <LinkButton link={link}>
            <Icon size='22px' />
          </LinkButton>
        </UserAccessContainer>
      </ItemsContainer>
    </HeaderContainer>
  )
}

export default Header
