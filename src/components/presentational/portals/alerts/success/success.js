import React from 'react'
import { AlertContainer } from './style'

const SuccessAlert = ({ id, close }) => {
  setTimeout(function () { close() }, 3000)
  const onClose = () => {
    close()
  }
  return (
    <AlertContainer>
      <button onClick={onClose}>close</button>
      SUCCESS
    </AlertContainer>
  )
}

export default SuccessAlert
