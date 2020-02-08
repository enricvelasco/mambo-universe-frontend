import React, { useState } from 'react'
import { Input } from './style'

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
    <Input type={type} name={name} required={required} isError={isError} onChange={onTextChange} />
  )
}

export default TextInput
