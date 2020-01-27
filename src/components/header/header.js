import React from 'react';
import LinkButton from '../link-button'
import { createUserWithEmail } from '../../services/login'
import { createPortal } from '../modals/config/actions'
import { HeaderContainer, LogoContainer, ItemsContainer, Logo, Menu, UserAccessContainer, Item } from './style'
import LoginModal from '../modals/login-modal'

const Header = () => {
  const onClick = () => {
    console.log('ON CLICK')
    //createPortal();
    return <LoginModal />
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
