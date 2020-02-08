import React from 'react'
import OptionsMenu from './compoents/options-menu'
import { Content, ChildrenContainer } from './style'

const UserContainer = ({ children }) => {
  return (
    <Content>
      <OptionsMenu />
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </Content>
  )
}

export default UserContainer
