import React, { useContext, useState } from 'react'
import { Context } from '../../../../../../Context'
import { saveData } from '@Services/database'
import InputContainer from '@Components/common/inputs'
import TextInput from '@Components/common/inputs/text-input'
import SubmitButton from '@Components/common/submit-button'

const IngredientsCategoriesFormulary = () => {
  console.log('INGREDIENTS CAT')
  const { userInfo } = useContext(Context)

  const [name, setName] = useState(null)

  const onSaveData = (event) => {
    event.preventDefault()
    const obj = {
      name: name,
      user: userInfo.uid
    }
    console.log('DATOS A GUARDAR', obj)
    saveData(obj, 'ingredients_categories')
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
        <TextInput name='name' type='text' onChange={(text) => setName(text)} />
      </InputContainer>
      <SubmitButton text='Save' />
    </form>
  )
}

export default IngredientsCategoriesFormulary
