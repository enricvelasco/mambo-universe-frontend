import React from 'react';
import LinkButton from '../link-button'
import { createUserWithEmail } from '../../services/login'
import { HeaderContainer, LogoContainer, ItemsContainer, Logo, Menu, UserAccessContainer, Item } from './style'

const Header = () => {
  const onClick = () => {
    console.log('ON CLICK')
    createUserWithEmail('prueba@prueba2.com', 'prueba')
      .then((res) => console.log('RES:', res))
      .then((err) => console.log('ERR:', err))
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
  );
}

export default Header;
