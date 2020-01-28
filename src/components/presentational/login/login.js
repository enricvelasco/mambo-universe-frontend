import React from 'react'
import { createPortal } from '../modals/config/portals/actions'
import { portalsIds } from '../modals/config/modals-list'

const Login = () => {
  return (
    <>
      {createPortal(portalsIds.LOGIN)}
    </>
  )
}

export default Login
