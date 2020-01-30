import React, { useState } from 'react'
import { InputContainer, Input, Title } from './style'

const TextInput = ({
  type = 'text',
  isRequired = false,
  name,
  title,
  isError = false,
  onChange
}) => {
  const [required, setRequired] = useState(isRequired)

  const onTextChange = (e) => {
    setRequired(false)
    if (isRequired && e.target.value === '') {
      setRequired(true)
    }
    onChange(e.target.value)
  }

  return (
    <InputContainer>
      <Title>{title}</Title>
      <Input type={type} name={name} required={required} isError={isError} onChange={onTextChange} />
    </InputContainer>
  )
}

export default TextInput
