import React from 'react'
import { createPortal } from '../portals/config/portals/actions'
import { portalsIds } from '../portals/config/portals-list'

const Login = () => {
  return (
    <>
      {createPortal(portalsIds.LOGIN)}
    </>
  )
}

export default Login
