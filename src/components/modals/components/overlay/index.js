import React from 'react'
import { OverlayContainer } from './styles'

const Overlay = ({ children }) => (
  <OverlayContainer>
    {children}
  </OverlayContainer>
)

export default Overlay
