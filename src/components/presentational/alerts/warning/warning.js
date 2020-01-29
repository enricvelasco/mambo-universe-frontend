import React from 'react'
import { AlertContainer } from './style'

const WarningAlert = ({ close }) => {
  const onClose = () => {
    close()
  }
  return (
    <AlertContainer>
      <button onClick={onClose}>close</button>
      WARNING
    </AlertContainer>
  )
}

export default WarningAlert
