import React, { useContext, useState } from 'react'
import { FaUser, FaRegUser } from 'react-icons/fa'
import { navigate } from '@reach/router'
import LinkButton from '@Components/common/link-button'
import Button from '@Components/common/button'
import Login from '@Components/presentational/login'
import { Context } from '../../../Context'
import { HeaderContainer, LogoContainer, ItemsContainer, Logo, Menu, UserAccessContainer, Item } from './style'

const onItemClick = () => {
}

const onItem2Click = () => {
}

const Header = () => {
  const { isAuth, updateAuth } = useContext(Context)
  const [showLogin, setShowLogin] = useState(false)
  const Icon = isAuth ? FaUser : FaRegUser

  const handleClick = () => {
    isAuth ? navigate('/profile') : setShowLogin(true)
  }

  return (
    <HeaderContainer>
      {!isAuth && showLogin && <Login onLogin={() => updateAuth()}/>}
      <LogoContainer>
        <Logo>Mambo Universe</Logo>
      </LogoContainer>
      <ItemsContainer>
        <Menu>
          <LinkButton to='/' onClick={onItemClick}>Item 1</LinkButton>
          <Item onClick={onItem2Click}>Item 2</Item>
        </Menu>
        <UserAccessContainer>
          <Button onClick={handleClick}>
            <Icon size='22px' />
          </Button>
        </UserAccessContainer>
      </ItemsContainer>
    </HeaderContainer>
  )
}

export default Header
