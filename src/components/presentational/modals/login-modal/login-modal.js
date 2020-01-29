import React, { useState } from 'react'
import Layout from '../components/layout'
import { navigate } from '@reach/router'
import { ModalRow } from './styles'
import TextInput from '../../../common/inputs/text-input'
import { sigInUserWithEmail } from '../../../../services/login'

const LoginModal = ({ close }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    sigInUserWithEmail(email, password)
      .then(() => {
        onClose()
      })
      .catch(err => {
        console.log('ERROR', err)
      })
  }

  const onClose = () => {
    navigate('/')
    close()
  }
  return (
    <Layout closeAction={onClose}>
      <ModalRow>
        TEXT DEMO
        <form onSubmit={handleSubmit}>
          <TextInput title='Email' type='email' isRequired onChange={(text) => setEmail(text)} />
          <TextInput title='Password' type='password' isRequired onChange={(text) => setPassword(text)} />
          <input type='submit' value='Submit' />
        </form>
      </ModalRow>
    </Layout>
  )
}

export default LoginModal
