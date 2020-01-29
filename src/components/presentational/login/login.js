import React from 'react'
import { createPortal } from '../../../application/portals/config/portals/actions'
import { portalsIds } from '../../../application/portals/config/portals-list'

const Login = () => {
  return (
    <>
      {createPortal(portalsIds.LOGIN)}
    </>
  )
}

export default Login
