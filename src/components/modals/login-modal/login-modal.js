import React from 'react'
import Layout from '../components/layout'
import { ModalRow } from './styles'

const LoginModal = ({ close }) => {
  return (
    <Layout closeAction={close}>
      <ModalRow>
        TEXT DEMO
      </ModalRow>
    </Layout>
  )
}

export default LoginModal
