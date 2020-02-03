import React from 'react'
import OptionsMenu from './compoents/options-menu'
import { Content } from './style'

const UserContainer = ({ children }) => {
  return (
    <Content>
      <OptionsMenu />
      {children}
    </Content>
  )
}

export default UserContainer
