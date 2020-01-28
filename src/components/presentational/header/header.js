import React from 'react'
import LinkButton from '../../common/link-button'
import { createTopRightAlert, createBottomCenterAlert, createBottomLeftAlert, createBottomRightAlert, createCenterCenterAlert, createCenterLeftAlert, createCenterRightAlert, createTopCenterAlert, createTopLeftAlert } from '../portals/config/alerts/actions'
import { alertsIds } from '../portals/config/portals-list'
import { HeaderContainer, LogoContainer, ItemsContainer, Logo, Menu, UserAccessContainer, Item } from './style'

const onItemClick = () => {
  createTopRightAlert(alertsIds.WARNING)
  createBottomCenterAlert(alertsIds.WARNING)
  createBottomLeftAlert(alertsIds.WARNING)
  createBottomRightAlert(alertsIds.WARNING)
  createCenterCenterAlert(alertsIds.WARNING)
  createCenterLeftAlert(alertsIds.WARNING)
  createCenterRightAlert(alertsIds.WARNING)
  createTopCenterAlert(alertsIds.WARNING)
  createTopLeftAlert(alertsIds.WARNING)
}

const onItem2Click = () => {
  createTopRightAlert(alertsIds.SUCCESS)
}

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>Mambo Universe</Logo>
      </LogoContainer>
      <ItemsContainer>
        <Menu>
          <Item onClick={onItemClick}>Item 1</Item>
          <Item onClick={onItem2Click}>Item 2</Item>
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
