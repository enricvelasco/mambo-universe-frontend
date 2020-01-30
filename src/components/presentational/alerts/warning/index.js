import React from 'react'
import { AlertContainer } from './style'

const WarningAlert = ({ close, text }) => {
  setTimeout(function () { close() }, 3000)
  const onClose = () => {
    close()
  }
  return (
    <AlertContainer>
      <button onClick={onClose}>close</button>
      {text}
    </AlertContainer>
  )
}

export default WarningAlert
