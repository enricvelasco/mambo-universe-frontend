import React, { useState } from 'react'
import Layout from '../components/layout'
import { navigate } from '@reach/router'
import { ModalRow, FormContainer, Title, ButtonContainer, Link } from './styles'
import TextInput from '../../../common/inputs/text-input'
import { sigInUserWithEmail } from '../../../../services/login'

import SubmitButton from '../../../common/submit-button'
import { createTopRightAlert } from '../../../../application/portals/config/alerts/actions'
import { alertsIds } from '../../../../application/portals/config/portals-list'

const LoginModal = ({ close, onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    sigInUserWithEmail(email, password)
      .then(() => {
        onClose()
        createTopRightAlert(alertsIds.SUCCESS, { text: 'Logueado OK' })
        onLogin()
      })
      .catch(err => {
        createTopRightAlert(alertsIds.ERROR, { text: err.code })
      })
  }

  const onClose = () => {
    navigate('/')
    close()
  }
  return (
    <Layout closeAction={onClose}>
      <ModalRow>
        <Title>
          INICIAR SESIÓN
        </Title>
        <FormContainer onSubmit={handleSubmit}>
          <TextInput title='Email' type='email' isRequired onChange={(text) => setEmail(text)} />
          <TextInput title='Password' type='password' isRequired onChange={(text) => setPassword(text)} />
          <ButtonContainer>
            <SubmitButton text='LogIn' />
          </ButtonContainer>
        </FormContainer>
        <Link>register</Link>
      </ModalRow>
    </Layout>
  )
}

export default LoginModal
