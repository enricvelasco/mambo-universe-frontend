import React, { useState, useContext } from 'react'
import TextInput from '@Components/common/inputs/text-input'
import SubmitButton from '@Components/common/submit-button'
import { saveData } from '@Services/database'
import { Context } from '../../../../../Context'
import InputTextArea from '@Components/common/inputs/text-area'
import InputContainer from '@Components/common/inputs'

const Formulary = () => {
  const { userInfo } = useContext(Context)

  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [textArea, setTextArea] = useState(null)

  const onSaveData = (event) => {
    event.preventDefault()
    const obj = {
      name: name,
      description: description,
      text: textArea,
      user: userInfo.uid
    }
    console.log('DATOS A GUARDAR', obj)
    saveData(obj, 'recipes')
      .then((doc) => {
        console.log('GUARDADO CON ID:', doc.id)
      })
      .catch((err) => {
        console.log('ERROR GUARDADO:', err)
      })
  }

  return (
    <form onSubmit={onSaveData} autoComplete='off'>
      <InputContainer title='Nombre'>
        <TextInput name='name' type='text' onChange={(text) => setName(text)}/>
      </InputContainer>
      <InputContainer title='Descripcion'>
        <TextInput name='description' type='text' onChange={(text) => setDescription(text)}/>
      </InputContainer>
      <InputContainer title='TextArea'>
        <InputTextArea onChange={(text)=>setTextArea(text)}/>
      </InputContainer>
      <SubmitButton text='Save' />
    </form>
  )
}

export default Formulary
