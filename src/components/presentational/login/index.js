import React from 'react'
import { createPortal } from '../../../application/portals/config/portals/actions'
import { portalsIds } from '../../../application/portals/config/portals-list'

const Login = ({ onLogin }) => (
  <>
    {createPortal(portalsIds.LOGIN, {onLogin: onLogin})}
  </>
)

export default Login
