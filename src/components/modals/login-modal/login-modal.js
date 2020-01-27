import React from 'react'
import ReactDom from 'react-dom'
import Layout from '../components/layout'
import { ModalRow } from './styles'

const LoginModal = () => {
  return ReactDom.createPortal(
    <Layout>
      <ModalRow>
        TEXT DEMO
      </ModalRow>
    </Layout>,
    document.getElementById('modal')
  )
}

export default LoginModal
