import React, { useState, useContext } from 'react'
import TextInput from '@Components/common/inputs/text-input'
import SubmitButton from '@Components/common/submit-button'
import { saveData } from '@Services/database'
import { Context } from '../../../../../Context'

const Formulary = () => {
  const { userInfo } = useContext(Context)

  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)

  const onSaveData = (event) => {
    event.preventDefault()
    const obj = {
      name: name,
      description: description,
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
      <TextInput title='Nombre' name='name' type='text' onChange={(text) => setName(text)}/>
      <TextInput title='Descripcion' name='description' type='text' onChange={(text) => setDescription(text)}/>
      <SubmitButton text='Save' />
    </form>
  )
}

export default Formulary
