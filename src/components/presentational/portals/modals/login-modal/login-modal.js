import React from 'react'
import Layout from '../components/layout'
import { navigate } from '@reach/router'
import { ModalRow } from './styles'

const LoginModal = ({ close }) => {
  const onClose = () => {
    navigate('/')
    close()
  }
  return (
    <Layout closeAction={onClose}>
      <ModalRow>
        TEXT DEMO
      </ModalRow>
    </Layout>
  )
}

export default LoginModal
