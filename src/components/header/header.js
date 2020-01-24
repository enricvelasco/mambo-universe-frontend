import React from 'react';
import LinkButton from '../link-button'
import { HeaderContainer, LogoContainer, ItemsContainer, Logo, Menu, UserAccessContainer, Item } from './style'

const Header = () => (
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
          <LinkButton>
            LogIn
          </LinkButton>
        </UserAccessContainer>
      </ItemsContainer>
    </HeaderContainer>
);

export default Header;
